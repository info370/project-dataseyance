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
            var contentString = 
            "<div id='infoWindow'>" +
                "<h1 style='color: black'>" + d["PMA Location Address"] + "</h1>" + 
                parseInt(d["units_estimate"]) + " unit(s) available over <br/>" + 
                d[" PMA Land SqFt "] + " square feet<br/>" + 
                "at approximately $" + parseInt(d["cost_estimate"]) + 
             "</div>"

            var infoWindow = new google.maps.InfoWindow({
                content: contentString,
            });
            
            
            var coordinates = {lat: parseFloat(d.latitude), lng: parseFloat(d.longitude)};
            var marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                title: d["PMA Location Address"]
            });

            marker.addListener('click', function() {
                infoWindow.close();
                infoWindow.open(map, marker);
            });
        });
    });
}