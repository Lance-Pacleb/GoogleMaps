
function initMap(){
    var philippines = {
        lat: 12.8797,
        lng: 121.7740
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: philippines,
        zoom: 7,
        mapTypeId: 'roadmap',
    });

    var marker = new google.maps.Marker({
        position: philippines,
        map:map
    });
}