let markers = [];

function initMap() {
  const galway = { lat:53.27108077506178, lng:-9.056759662752283 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13.5,
    center: galway,
    mapTypeId: "terrain",
  });
}

// Nightlife
const nightlifeButton = document.getElementById("nightlife");
nightlifeButton.addEventListener("click", showNightlife);

function showNightlife(){
    deleteMarkers(); // Clears all previous markers on the map
    for (let i = 0; i < nightlife.length; i++) {
        addMarker(nightlife[i].position)
    };
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