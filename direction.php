<!DOCTYPE html>
<html>
	<body> 

	<script type="text/javascript">
		document.body.onload = getLocation();
			function getLocation() {
			  if (navigator.geolocation) {
			    navigator.geolocation.getCurrentPosition(showPosition);
			  } else { 
			    x.innerHTML = "Geolocation is not supported by this browser.";
			  }
			}

			function showPosition(position) {	
			  document.getElementById('myLoc').value= position.coords.latitude+","+ position.coords.longitude;	  
			}
		
	</script>

	<form action="http://maps.google.com/maps" method="get" target="_blank">
	   <!-- <label for="saddr">My Location</label> -->
	   <!-- Lokasi User -->
	   <input type="hidden" name="saddr" id='myLoc'/>
	   <!-- Titik Tujuan -->
	   <input type="hidden" name="daddr" value="5.5565041,95.3222295" />
	   <input type="submit" value="Get directions" />
	</form>

	</body>
</html>