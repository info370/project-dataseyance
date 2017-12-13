var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 47.6062, lng: -122.3321},
        zoom: 11
    });

    // Add markers of excess land plots. 
    d3.csv("./website/data/property_with_coords.csv", function(data) {
        data.forEach(function(d) {
            // console.log(typeof(d.latitude));
            // console.log(d.longitude);
            
            var coordinates = {lat: parseFloat(d.latitude), lng: parseFloat(d.longitude)};
            var marker = new google.maps.Marker({
                position: coordinates,
                map: map
            });
        });
    });
}