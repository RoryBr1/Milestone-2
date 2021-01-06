 function initMap() { // Initialize Map
    var options = {
        zoom:14,
        center:{lat:53.2707,lng:-9.0568},
        disableDefaultUI:true
    }

    var map = new 
    google.maps.Map(document.getElementById('map'), options);

    // Event Listeners
    document.getElementById("restaurants").addEventListener("click", showRestaurants);

    // Show Restaurants on #restaurants Click
    function showRestaurants() {
        new google.maps.Marker({
            position: {lat:53.27056881953248, lng:-9.053005040529506},
            map,
            title: "Pálás Bar & Kitchen",
        });
        }
}

