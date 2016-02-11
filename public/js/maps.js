var lat = $("#details-top").data('lat');
var lng = $("#details-top").data('lng');
function initialize() {
    var markerPos = new google.maps.LatLng(lat, lng);
    var mapOptions = {
        center: markerPos,
        zoom: 14,
        draggable:false,
        mapTypeControl: false,
        disableDoubleClickZoom:true,
        zoomControl: false,
        panControl:false,
        rotateControl:false,
        scrollwheel:false,
        streetViewControl:false,
        noClear:true
    };
    var map = new google.maps.Map(document.getElementById('details-top'),mapOptions);
    var marker = new google.maps.Marker({
        position: markerPos,
        map: map,
    });
}
function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC3JDgiaByCffejVGONCk04xY84pXp0oOo&' +'callback=initialize';
    document.body.appendChild(script);
}
if(lat && lng)
    window.onload = loadScript;