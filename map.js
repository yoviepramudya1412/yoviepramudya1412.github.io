(function () {
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    var wmsUrl = 'http://localhost:8080/geoserver/gis_dishub/ows?';
    var legendUrl = 'http://localhost:8080/geoserver/gis_dishub/wms?TRANSPARENT=TRUE&SERVICE=WMS&VERSION=1.1.1&REQUEST=GetLegendGraphic&EXCEPTIONS=application%2Fvnd.ogc.se_xml&LAYER=gis_dishub:';

    var mymap = L.map('map', {
        center: [4.326289, 96.703544],
        zoom: 8,
        zoomControl: false
    }), esriImagery = L.esri.basemapLayer('Imagery');
    mymap.addLayer(esriImagery);


    // var zoomTo = L.map('zoomto', {scrollWheelZoom: false}).setView([37.8, -96], 4);
// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(zoomTo);

    var baseLayers = [
        {
            group: "Basemap",
            layers: [
                {
                    name: "Mapbox: Grayscale",
                    layer: L.tileLayer(mbUrl, { id: 'mapbox.light', attribution: mbAttr })
                },
                {
                    name: "Mapbox: Streets",
                    layer: L.tileLayer(mbUrl, { id: 'mapbox.streets', attribution: mbAttr })
                },
                {
                    name: "Esri: Streets",
                    layer: L.esri.basemapLayer('Streets')
                },
                {
                    name: "Esri: Imagery",
                    layer: esriImagery
                }
            ]
        }
    ];

    var groupLayers = [
        {
            name: "Zona Transportasi",
            //icon: '<i class="icon icon-BandaraUmumBukanPusatPenyebaran resize"></i>',
            layer: {
                type: "tileLayer.wms",
                args: [wmsUrl, {
                    layers: 'gis_dishub:zona',
                    format: 'image/png',
                    transparent: true,
                    crs: L.CRS.EPSG4326
                    //minZoom: 13
                }
                ]
            }
        },
        {
            name: "Jaringan Jalan",
            //icon: '<i class="icon icon-BandaraUmumBukanPusatPenyebaran resize"></i>',
            layer: {
                type: "tileLayer.wms",
                args: [wmsUrl, {
                    //layers: 'gis_dishub:jaringanjalan_ln',
                    layers: 'gis_dishub:mergetrayek',
                    format: 'image/png',
                    transparent: true,
                    //crs: L.CRS.EPSG4326
                    //minZoom: 13
                }
                ]
            }
        },
        {
            name: "Halte Transkoetaradja",
            //icon: '<i class="icon icon-BandaraUmumBukanPusatPenyebaran resize"></i>',
            layer: {
                type: "tileLayer.wms",
                args: [wmsUrl, {
                    layers: 'gis_dishub:halte_pt',
                    format: 'image/png',
                    transparent: true,
                    crs: L.CRS.EPSG4326
                    //minZoom: 13
                }
                ]
            },


        },
        {
            group: "Darat",
            collapsed: true,
            layers: [
                {
                    name: "Terminal",
                    //icon: '<i class="icon icon-terminalA resize"></i>',
                    layer: {
                        type: "tileLayer.wms",
                        args: [wmsUrl, {
                            layers: 'gis_dishub:terminal_pt',
                            format: 'image/png',
                            transparent: true,
                            crs: L.CRS.EPSG4326
                            //minZoom: 13
                        }
                        ]
                    }
                },
                {
                    name: "Gedung Uji",
                    //icon: '<i class="icon icon-Uji resize"></i>',
                    layer: {
                        type: "tileLayer.wms",
                        args: [wmsUrl, {
                            layers: 'gis_dishub:gedunguji_pt',
                            format: 'image/png',
                            transparent: true,
                            crs: L.CRS.EPSG4326
                        }
                        ]
                    }
                },
                {
                    name: "Jembatan Timbang",
                    //icon: '<i class="icon icon-timbang resize"></i>',
                    layer: {
                        type: "tileLayer.wms",
                        args: [wmsUrl, {
                            layers: 'gis_dishub:jembatantimbang_pt',
                            format: 'image/png',
                            transparent: true,
                            crs: L.CRS.EPSG4326
                        }
                        ]
                    }
                }
            ]
        },
        {
            group: "Laut",
            collapsed: true,
            layers: [
                {
                    name: "Pelabuhan Laut",
                    //icon: '<i class="icon icon-PelabuhanInternasional resize"></i>',
                    layer: {
                        type: "tileLayer.wms",
                        args: [wmsUrl, {
                            layers: 'gis_dishub:pelabuhanlaut_pt',
                            format: 'image/png',
                            transparent: true,
                            crs: L.CRS.EPSG4326
                        }
                        ]
                    }
                },
                {
                    name: "Pelabuhan Penyebrangan",
                    //icon: '<i class="icon icon-PelabuhanInternasional resize"></i>',
                    layer: {
                        type: "tileLayer.wms",
                        args: [wmsUrl, {
                            layers: 'gis_dishub:pelabuhanpenyebrangan_pt',
                            format: 'image/png',
                            transparent: true,
                            crs: L.CRS.EPSG4326
                        }
                        ]
                    }
                }
            ]
        },
        {
            group: "Udara",
            collapsed: true,
            layers: [
                {
                    name: "Bandar Udara",
                    //icon: '<i class="icon icon-BandaraUmumPusatPenyebaranPrimer resize"></i>',
                    layer: {
                        type: "tileLayer.wms",
                        args: [wmsUrl, {
                            layers: 'gis_dishub:bandara_pt',
                            format: 'image/png',
                            transparent: true,
                            crs: L.CRS.EPSG4326
                        }
                        ]
                    }
                },
                {
                    name: "Helipad",
                    //icon: '<i class="icon icon-BandaraUmumPusatPenyebaranPrimer resize"></i>',
                    layer: {
                        type: "tileLayer.wms",
                        args: [wmsUrl, {
                            layers: 'gis_dishub:helipad_pt',
                            format: 'image/png',
                            transparent: true,
                            crs: L.CRS.EPSG4326
                        }
                        ]
                    }
                }
            ]
        },
        {
            group: "Kereta Api",
            collapsed: true,
            layers: [
                {
                    name: "Stasiun Kereta Api",
                    //icon: '<i class="icon icon-StasiunKAkecil resize"></i>',
                    layer: {
                        type: "tileLayer.wms",
                        args: [wmsUrl, {
                            layers: 'gis_dishub:stasiunkeretaapi_pt',
                            format: 'image/png',
                            transparent: true,
                            crs: L.CRS.EPSG4326
                            //minZoom: 13
                        }
                        ]
                    }
                },
                {
                    name: "Rel Kereta Api",
                    //icon: '<i class="icon icon-BandaraUmumPusatPenyebaranTersier resize"></i>',
                    layer: {
                        type: "tileLayer.wms",
                        args: [wmsUrl, {
                            layers: 'gis_dishub:trase_ka_merge',
                            format: 'image/png',
                            transparent: true,
                            //crs: L.CRS.EPSG4326
                            //minZoom: 13
                        }
                        ]
                    }
                }
            ]
        }
    ];
    var panelLayers = new L.Control.PanelLayers(baseLayers, groupLayers, {
        //compact: true,
        collapsed: true,
        collapsibleGroups: true,
        position: 'topleft'
    });

    mymap.addControl(panelLayers);

    L.Control.PanelLayers.include({
        getOverlays: function () {
            var control, layers;
            for (var i in groupLayers) {
                var groupLayer = groupLayers[i];
                layer = groupLayer.layers;
                for (var x in layer) {
                    layers = layer[x].name;
                };
            };
            layers = {};
            control = this;
            control._layers.forEach(function (obj) {
                var layerName;
                if (obj.overlay) {
                    layerName = obj.name;
                    return layers[layerName] = control._map.hasLayer(obj.layer);
                }
            });
            return layers;
        }
    });

    // L.control.scale({
    //     maxWidth: 150,
    //     position: 'bottomleft'
    // }).addTo(map);
    // console.log(groupLayers[0].layer.options.crs);

    L.control.zoom({
        position: 'topright'
    }).addTo(mymap);

    L.easyButton({
        position:'topright',
        leafletClasses: true, 
        states: [{
                stateName: 'zoom-to-extend',           // name the state
                icon:      'fa-crosshairs fa-lg',      // and define its properties
                title:     'Zoom to Extend',           // like its title
                onClick: function(button, map) {       // and its callback
                    map.setView([4.326289, 96.703544], 8);
                }
        }]
    }).addTo(mymap);

    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend');
        var title = '<h4>LEGENDA</h4>';
        div.innerHTML = title;
        div.innerHTML += "<span style='font-size:0px;'><img src='" + legendUrl + "mergetrayek&FORMAT=image%2Fpng&LEGEND_OPTIONS=forceLabels:on'> Jaringan Jalan</br></span>";
        div.innerHTML += "<span style='font-size:0px;'><img src='" + legendUrl + "halte_pt&FORMAT=image%2Fpng&LEGEND_OPTIONS=forceLabels:on'> Halte Transkoetaradja</br></span>";
        div.innerHTML += "<span style='font-size:0px;'><img src='" + legendUrl + "stasiunkeretaapi_pt&FORMAT=image%2Fpng&LEGEND_OPTIONS=forceLabels:on'> Stasiun Kereta Api</br></span>";
        div.innerHTML += "<span style='font-size:0px;'><img src='" + legendUrl + "trase_ka_merge&FORMAT=image%2Fpng&LEGEND_OPTIONS=forceLabels:on'> Rel Kereta Api</br></span>";
        div.innerHTML += "<span style='font-size:0px;'><img src='" + legendUrl + "terminal_pt&FORMAT=image%2Fpng'> Terminal</br></span>";
        div.innerHTML += "<span style='font-size:0px;'><img src='" + legendUrl + "gedunguji_pt&FORMAT=image%2Fpng&LEGEND_OPTIONS=forceLabels:on'> Gedung Uji</br></span>";
        div.innerHTML += "<span style='font-size:0px;'><img src='" + legendUrl + "jembatantimbang_pt&FORMAT=image%2Fpng&LEGEND_OPTIONS=forceLabels:on'> Jembatan Timbang</br></span>";
        div.innerHTML += "<span style='font-size:0px;'><img src='" + legendUrl + "pelabuhanlaut_pt&FORMAT=image%2Fpng'> Pelabuhan Laut</br></span>";
        div.innerHTML += "<span style='font-size:0px;'><img src='" + legendUrl + "pelabuhanpenyebrangan_pt&FORMAT=image%2Fpng'> Pelabuhan Penyebrangan</br></span>";
        div.innerHTML += "<span style='font-size:0px;'><img src='" + legendUrl + "bandara_pt&FORMAT=image%2Fpng'>Bandar Udara</br></span>";
        div.innerHTML += "<span style='font-size:0px;'><img src='" + legendUrl + "helipad_pt&FORMAT=image%2Fpng&LEGEND_OPTIONS=forceLabels:on'> Helipad</br></span>";
        div.innerHTML += "<span style='font-size:0px;'><img src='" + legendUrl + "zona&FORMAT=image%2Fpng'> Zona Transportasi</br></span>";
        return div;
    };
    legend.addTo(mymap);

    function showLegend(layer) {
        var item = ".legend > span:contains(" + layer + ")";
        $(item).show();
    }

    function hideLegend(layer) {
        var item = ".legend > span:contains(" + layer + ")";
        $(item).hide();
    }

    mymap.on('overlayadd', function (eventLayer) {
        showLegend(eventLayer.name);
    });

    mymap.on('overlayremove', function (eventLayer) {
        hideLegend(eventLayer.name);
    });


    $.each(panelLayers.getOverlays(), function (index, value) {
        if (!value) {
            hideLegend(index);
        }
    });

    window.Map = {
        MyMap: mymap,
        WmsUrl: wmsUrl
    };
}());