(function () {
    Map.MyMap.on("click", function (e) {

        /*
    -----------------------------------------------------------------------------
    EPSG4326					L.geoJSON/ L.geoJson			L.Proj.geoJson
    -----------------------------------------------------------------------------
    1. bounds.toBBoxString()	Works						Works
    2. sw.x,sw.y,ne.x,ne.y		Works						Works
    -----------------------------------------------------------------------------
    EPSG3857					L.geoJSON/ L.geoJson			L.Proj.geoJson
    -----------------------------------------------------------------------------
    1. bounds.toBBoxString()	No features error			No features error
    2. sw.x,sw.y,ne.x,ne.y		No geometry highlight		Works
    -----------------------------------------------------------------------------
    */

        var wmsUrl = 'http://localhost:8080/geoserver/gis_dishub/ows?';
        var _layers = this._layers,
            layers = [],
            versions = [],
            styles = [],
            geojson;

        for (var x in _layers) {
            var _layer = _layers[x];
            if (_layer.wmsParams) {
                layers.push(_layer.wmsParams.layers);
                versions.push(_layer.wmsParams.version);
                styles.push(_layer.wmsParams.styles);
            }
        }

        var loc = e.latlng,
            xy = e.containerPoint, // xy = this.latLngToContainerPoint(loc,this.getZoom())
            size = this.getSize(),
            bounds = this.getBounds(),
            crs = this.options.crs,
            sw = crs.project(bounds.getSouthWest()),
            ne = crs.project(bounds.getNorthEast()),
            obj = {
                service: "WMS", // WMS (default)
                version: versions[0],
                request: "GetFeatureInfo",
                layers: layers,
                styles: styles[0],
                bbox: bounds.toBBoxString(), // works only with EPSG4326, but not with EPSG3857
                bbox: sw.x + "," + sw.y + "," + ne.x + "," + ne.y, // works with both EPSG4326, EPSG3857
                width: size.x,
                height: size.y,
                query_layers: layers,
                info_format: "application/json", // text/plain (default), application/json for JSON (CORS enabled servers), text/javascript for JSONP (JSONP enabled servers)
                feature_count: 5 // 1 (default)
            };
        if (parseFloat(obj.version) >= 1.3) {
            obj.crs = crs.code;
            obj.i = xy.x;
            obj.j = xy.y;
        } else {
            obj.srs = crs.code;
            obj.x = xy.x;
            obj.y = xy.y;
        }

        $.ajax({
            url: Map.WmsUrl + L.Util.getParamString(obj, Map.WmsUrl, true),
            success: function (data, status, xhr) {

                function showPolygon(layer) {
                    var polygon = new L.tileLayer.wms(wmsUrl, {
                        // layers: 'gis_dishub:bandara_sim',
                        layers: layer,
                        format: 'image/png',
                        transparent: 'true',
                        crs: L.CRS.EPSG4326
                        // zoom: 13
                    }).addTo(Map.MyMap);
                    polygon.bringToFront();

                }

                // function zoomToFeature() {
                //     Map.MyMap.fitBounds(Map.MyMap.getBounds(polygon));
                // }

                document.body.onload = getLocation();
                function getLocation() {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(showPosition);
                    } else {
                        x.innerHTML = "Geolocation is not supported by this browser.";
                    }
                }

                function showPosition(position) {
                    document.getElementById('myLoc').value = position.coords.latitude + "," + position.coords.longitude;
                }

                if (geojson) {
                    Map.MyMap.removeLayer(geojson);
                }

                // if (polygon) {
                //     Map.MyMap.removeLayer(polygon);
                // }
                var lat = loc.lat;
                var lng = loc.lng;

                if (data.features) {
                    var features = data.features;
                    console.log(features);
                    if (features.length) {
                        var html = "<center>Feature(s) Found: " + features.length + "</center>";
                        geojson = L.geoJSON(data).addTo(Map.MyMap);
                        for (var i in features) {
                            var feature = features[i];
                            var types = feature.geometry.type;
                            var properties = feature.properties;

                            var property, pInfo;

                            if (types === 'Point') {
                                html += '<br/><center><img src="img/' + properties.polygon + '.jpg" style="width:200px; height:100px"></center>'; // style="width:80px; height:80px"
                                html += '<table><caption><center><b>' + properties.nama_objek + '</b></center></caption>';
                                html += '<thead><tr><th>Property</th><th>Value</th></tr></thead><tbody>';
                                var btnPolygon;
                                for (var x in properties) {
                                    if (x != 'bbox') {
                                        if (x != 'polygon') {
                                            property = x.charAt(0).toUpperCase() + x.slice(1)
                                            if (properties[x] != null) {
                                                pInfo = properties[x];
                                            } else {
                                                pInfo = '-';
                                            }
                                            html += '<tr><th>' + property + '&nbsp;&nbsp;</th><td>' + pInfo + '</td></tr>';
                                        } else {
                                            html += '';
                                        }
                                    }
                                    if (x != 'koridor') {
                                        btnPolygon = "<button class='btn-polygon btn btn-info btn-sm btn-block' style='padding-bottom:5px; font-size:11px'>Lihat Bangunan</button>";
                                    } else {
                                        btnPolygon = "";
                                    }
                                }
                                html += '</tbody></table>' + "<br/><center>" + btnPolygon +
                                    '<form action="http://maps.google.com/maps" method="get" target="_blank">' +
                                    '<input type="hidden" name="saddr" id="myLoc" />' +
                                    '<input type="hidden" name="daddr" value=' + lat + ',' + lng + ' />' +
                                    '<input type="submit" value="Lihat Rute" class="btn btn-info btn-sm btn-block" style="padding-bottom:5px; margin-top:5px; font-size:11px"/>' +
                                    '</form></center><br/><br/>';
                            } else {
                                if (properties.nama_objek != 'Batas Area') {
                                    html += '<table><caption><center><b>' + properties.nama_objek + '</b></center></caption>';
                                    html += '<thead><tr><th>Property</th><th>Value</th></tr></thead><tbody>';
                                    for (var x in properties) {
                                        if (x != 'bbox') {
                                            if (x != 'id') {
                                                property = x.charAt(0).toUpperCase() + x.slice(1)
                                                if (properties[x] != null) {
                                                    pInfo = properties[x];
                                                } else {
                                                    pInfo = '-';
                                                }
                                                html += '<tr><th>' + property + '&nbsp;&nbsp;</th><td>' + pInfo + '</td></tr>';
                                            } else {
                                                html += '';
                                            }
                                        }
                                    }
                                    html += '</tbody></table><br/>';
                                } else {
                                    html += '';
                                }
                            }
                        }
                        Map.MyMap.openPopup(html, loc, { maxHeight: 500 });
                    } else {
                        Map.MyMap.closePopup();
                        // if (polygon) {
                        //     Map.MyMap.removeLayer(polygon);
                        // }
                    }
                } else {
                    Map.MyMap.closePopup();
                    // if (polygon) {
                    //     Map.MyMap.removeLayer(polygon);
                    // }
                }
                $(".btn-polygon").on("click", e => {
                    e.preventDefault();
                    showPolygon('gis_dishub:' + feature.properties.polygon + '');
                    Map.MyMap.closePopup();
                    // var markerBounds = L.latLngBounds([loc]);
                    // Map.MyMap.fitBounds(markerBounds, 8);
                    // Map.MyMap.fitBounds([ [5.53167148, 95.293178], [5.57264, 95.363988] ]);
                    Map.MyMap.flyTo(new L.LatLng(lat, lng), 15.5);
                    // Map.MyMap.setView(new L.LatLng(lat, lng), 15);
                    // Map.MyMap.setView(Map.MyMap.getBounds(polygon).getCenter());
                    // zoomToFeature();
                    // console.log(lat_southWest, lng_southWest, lat_northEast, lng_northEast);
                    console.log(data);
                });
            },
            error: function (xhr, status, err) {
                if (geojson) {
                    Map.MyMap.removeLayer(geojson);
                }
                html += "Unable to Complete the Request.: " + err;
                // Map.MyMap.openPopup(html, loc);
            }
        });
    });
}());