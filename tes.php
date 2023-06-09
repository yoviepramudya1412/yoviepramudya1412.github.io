
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head> 
<title></title> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.0/dist/leaflet.css" />
<link rel="stylesheet" href="https://labs.easyblog.it/maps/leaflet-search/src/leaflet-search.css" />
<link rel="stylesheet" href="style.css" />
</head>

<body>
<h3><a href="../"><big>◄</big> Leaflet.Control.Search</a></h3>

<h4>GeoJSON Example: <em>search vector features in GeoJSON layer by property</em></h4>
<div id="map"></div>

<script src="https://unpkg.com/leaflet@1.3.0/dist/leaflet.js"></script>
<script src="https://labs.easyblog.it/maps/leaflet-search/src/leaflet-search.js"></script>
<!-- //<script src="data/us-states.js"></script> -->
<script>

	//sample data values define in us-states.js
	//var data = us_states;
	fetch('http://192.168.1.123:8080/geoserver/gis_dishub/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=gis_dishub%3Aterminalbis_pt&outputFormat=application%2Fjson').then(function (response) {
      return response.json().then(function(dataTrans) {
        console.log(dataTrans.features);
      

	var map = new L.Map('map', {zoom: 5, center: new L.latLng([4.363,97.075]) });

	map.addLayer(new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));	//base layer

	var featuresLayer = new L.GeoJSON(dataTrans, {
			style: function(feature) {
				return {color: feature.properties.color };
			},
			onEachFeature: function(feature, marker) {
				marker.bindPopup('<h4 style="color:'+feature.properties.color+'">'+ feature.properties.namobj +'</h4>');
			}
		});

	map.addLayer(featuresLayer);

	var searchControl = new L.Control.Search({
		layer: featuresLayer,
		propertyName: 'namobj',
		marker: false,
		moveToLocation: function(latlng, title, map) {
			//map.fitBounds( latlng.layer.getBounds() );
			var zoom = map.getBoundsZoom(latlng.layer.getBounds());
  			map.setView(latlng, zoom); // access the zoom
		}
	});

	searchControl.on('search:locationfound', function(e) {
		
		console.log('search:locationfound', );

		//map.removeLayer(this._markerSearch)

		e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
		if(e.layer._popup)
			e.layer.openPopup();

	}).on('search:collapsed', function(e) {

		featuresLayer.eachLayer(function(layer) {	//restore feature color
			featuresLayer.resetStyle(layer);
		});	
	});
	
	map.addControl( searchControl );  //inizialize search control

});
    });

</script>

<div id="copy"><a href="http://labs.easyblog.it/">Labs</a> &bull; <a rel="author" href="http://labs.easyblog.it/stefano-cudini/">Stefano Cudini</a></div>

<script type="text/javascript" src="https://labs.easyblog.it/labs-common.js"></script>

</body>
</html>
