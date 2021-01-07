let markers = [];

function initMap() {
  const galway = { lat:53.27108077506178, lng:-9.056759662752283 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13.5,
    center: galway,
    mapTypeId: "terrain",
  });
}


// Restaurants
const restaurantsButton = document.getElementById("restaurants");
restaurantsButton.addEventListener("click", showRestaurants);

let palasRestaurant = { position: {lat: 53.27039967529483, lng: -9.053005040529506},
                        name: "Pálás Bar & Kitchen" };

function showRestaurants(){
    deleteMarkers(); // Clears all previous markers on the map
    addMarker(palasRestaurant.position);
}

// Nightlife
const nightlifeButton = document.getElementById("nightlife");
nightlifeButton.addEventListener("click", deleteMarkers);
nightlifeButton.addEventListener("click", showNightlife);

let sevenBar = { position: {lat:53.271938416799195, lng:-9.055065672591013},
                        name: "Seven Bar & Grill" };

function showNightlife(){
    addMarker(sevenBar.position)
}

// Adds a marker to the map and push to the array.
function addMarker(location) {
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  markers.push(marker);
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}