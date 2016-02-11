
            var map;
            var loophotspot = 0;
            var infowindow;
            var markersArray = [];
            var lat = {{ res.latitude }};
            var lng = {{ res.longitude }};
            // var lat = 18.64;
            // var lng = 73.75800000000004;
            var pyrmont = new google.maps.LatLng(lat, lng);
            var marker;
            var p1 = new google.maps.LatLng(lat,lng);
            var geocoder = new google.maps.Geocoder();
            var infowindow = new google.maps.InfoWindow();
            var htmldata = "";
            var hotspot_all_array = [];
            var loop;
            var center = new google.maps.LatLng(lat, lng);
            var lat;
            var lng;
            var radius;
            function initialize() {
                map = new google.maps.Map(document.getElementById('map'), {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    center: pyrmont,
                    zoom: 12
                });
                var circle = new google.maps.Circle({center: pyrmont, map: map, radius: 2000, fillColor: '#FFF', fillOpacity: 0.0,strokeWeight: 0, editable: false});
            	// $(".hotspot-icon a").on('click', function(e){
	            // 	e.preventDefault();
	            // 	search_types(map.getCenter(), $(this).data('value'));
            	// });
            	var type_array = ["airport", "atm", "bank", "bar", "cafe", "food", "gym", "hospital", "library", "movie_theater", "restaurant", "shopping_mall", "taxi_stand"];
            	for (var i = 0; i < type_array.length; i++) {
            	search_types(map.getCenter(), type_array[i]);
            	}
            }
            function createMarker(place,icon) {
                var placeLoc = place.geometry.location;
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                    icon: icon,
                    visible:true
                });
                markersArray.push(marker);
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent("<b>Name:</b>"+place.name+"<br><b>Address:</b>"+place.vicinity+"<br><b>Reference:</b>"+place.reference+"<br><b>Rating:</b>"+place.rating+"<br><b>Id:</b>"+place.id);
                    infowindow.open(map, this);
                });
            }
            var source="";
            var dest='';
            function search_types(latLng, type){
                clearOverlays();
                if(!latLng){
                    var latLng = pyrmont;
                }
                var icon = "images/marker.png";
                var request = {
                    location: latLng,
                    radius: 2000,
                    types: [type] //e.g. school, restaurant,bank,bar,city_hall,gym,night_club,park,zoo
                };
                if(type == undefined)
                    return;
                var service = new google.maps.places.PlacesService(map);
                service.search(request, function(results, status,pagination) {
                    map.setZoom(12);
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        //htmldata = "";
                        loop = 0;
                        for (var i = 0; i < results.length; i++) {
                            results[i].html_attributions='';
                            var loc1 = new google.maps.LatLng(results[i].geometry.location.lat(), results[i].geometry.location.lng());
                            var dist = pyrmont.distanceFrom(loc1);
                            var distfrom = (dist/1000).toFixed(2);
                            var image = results[i].icon;
                            if(loop < 7){
                                loop = loop + 1;
                                var myarr = results[i].vicinity.split(",");
                                hotspot_all_array[loophotspot++] = {image: image, name: results[i].name,distance: distfrom};
                                createMarker(results[i],icon);
                            }    
                        }
						hotspot_all_array.sort(function (a, b) {
							if (a.distance > b.distance)
								return 1;
							if (a.distance < b.distance)
								return -1;
							return 0;
						});
						htmldata = "";
						 for (var i = 0; i < hotspot_all_array.length; i++) {
						 	 htmldata += '<li class="icon hotspot-icon"><img src="'+hotspot_all_array[i].image+'" class="image_hotspot"/><span> '+hotspot_all_array[i].name+' ('+hotspot_all_array[i].distance+' km)</span></li>';
						 }	
						//console.log(hotspot_all_array);
                        $('#hostspot_data').html(htmldata);
                    }
                });
            }
            // Deletes all markers in the array by removing references to them
            function clearOverlays() {
                if (markersArray) {
                    for (i in markersArray) {
                        markersArray[i].setVisible(false)
                    }
                }
            }
            google.maps.event.addDomListener(window, 'load', initialize);
            function clearMarkers(){
                $('#show_btn').show();
                $('#hide_btn').hide();
                clearOverlays()
            }
            function showMarkers(){
                $('#show_btn').hide();
                $('#hide_btn').show();
                if (markersArray) {
                    for (i in markersArray) {
                        markersArray[i].setVisible(true)
                    }
                }
            } 
            function showMap(){
                var imageUrl = 'http://chart.apis.google.com/chart?cht=mm&chs=24x32&chco=FFFFFF,008CFF,000000&ext=.png';
                var markerImage = new google.maps.MarkerImage(imageUrl,new google.maps.Size(24, 32));
                //var input_addr =$('#address').val();
                var latitude = $('#latitude').val();
                var longitude = $('#longitude').val();
                var latlng = new google.maps.LatLng(latitude, longitude);
                map.setZoom(12);
                map.setCenter(latlng);
                marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    icon: markerImage,
                    draggable: false
                });
                $('#latitude,#longitude').show();
                //$('#address').val(results[0].formatted_address);
                $('#latitude').val(marker.getPosition().lat());
                $('#longitude').val(marker.getPosition().lng());
            }
            google.maps.LatLng.prototype.distanceFrom = function(latlng) {
            var lat = [this.lat(), latlng.lat()]
            var lng = [this.lng(), latlng.lng()]
            var R = 6378137;
            var dLat = (lat[1]-lat[0]) * Math.PI / 180;
            var dLng = (lng[1]-lng[0]) * Math.PI / 180;
            var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat[0] * Math.PI / 180 ) * Math.cos(lat[1] * Math.PI / 180 ) *
            Math.sin(dLng/2) * Math.sin(dLng/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c;
            return Math.round(d);
            }

