let markers = [];
  
function initMap() {
  const galway = { lat:53.27108077506178, lng:-9.056759662752283 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13.5,
    center: galway,
    mapTypeId: "terrain",
  });
}

// Adds a marker to the map and push to the array.
function addMarker(location) {
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      animation: google.maps.Animation.DROP,
    });
    markers.push(marker);
}

  
// Hotels
const hotelsButton = document.getElementById("hotels");
hotelsButton.addEventListener("click", showHotels);

function showHotels(){
    deleteMarkers(); // Clears all previous markers on the map
    for (let i = 0; i < hotels.length; i++) {
        addMarker(hotels[i].position)
    };
}

// Restaurants
const restaurantsButton = document.getElementById("restaurants");
restaurantsButton.addEventListener("click", showRestaurants);

function showRestaurants(){
    deleteMarkers(); // Clears all previous markers on the map
    for (let i = 0; i < restaurants.length; i++) {
        addMarker(restaurants[i].position)
    };
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

// Historic Sites
const historicSitesButton = document.getElementById("historic-sites");
historicSitesButton.addEventListener("click", showHistoricSites);

function showHistoricSites(){
    deleteMarkers(); // Clears all previous markers on the map
    for (let i = 0; i < historicSites.length; i++) {
        addMarker(historicSites[i].position)
    };
}

// Nature
const natureButton = document.getElementById("nature");
natureButton.addEventListener("click", showNature);

function showNature(){
    deleteMarkers(); // Clears all previous markers on the map
    for (let i = 0; i < nature.length; i++) {
        addMarker(nature[i].position)
    };
}

// Activities
const activitiesButton = document.getElementById("activities");
activitiesButton.addEventListener("click", showActivities);

function showActivities(){
    deleteMarkers(); // Clears all previous markers on the map
    for (let i = 0; i < activities.length; i++) {
        addMarker(activities[i].position)
    };
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
