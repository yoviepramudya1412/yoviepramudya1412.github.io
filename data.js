(function () {
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    var groups = {
        layer1: new L.tileLayer.wms('http://localhost:8080/geoserver/webgis_bkn/ows?', {
            layers: 'webgis_bkn:kabupaten_aceh',
            format: 'image/png',
            transparent: 'true'
        }),
    };
    // L.tileLayer.wms('http://localhost:8070/geoserver/webgis_bkn/ows?', {
    //     layers: 'webgis_bkn:kabupaten_aceh',
    //     format: 'image/png',
    //     transparent: 'true'
    // }).addTo(mymap);

    // fetch('http://192.168.1.123:8080/geoserver/gis_dishub/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=gis_dishub%3Aterminalbis_pt&outputFormat=application%2Fjson').then(function (response) {
    //   return response.json().then(function(dataTrans) {
    //     console.log(dataTrans.features);
    //     L.geoJson(response).addTo(layer2).bindPopup("center")
    //   });
    // });
    window.DataMap = {
        LayerGroups: groups
    };
}());