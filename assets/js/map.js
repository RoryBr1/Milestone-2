/* This script deals with the followiing functionalities:
  - Initializing the map
  - Event listners for category buttons
  - Adding markers to the map when category buttons are clicked
  - Opening the relevant marker's info window when clicked, based on the data in markersData.js

  All location data is stored in assets/js/markersData.js. */

var markers = []; // array into which markers are pushed to drop them on the map

let selected = []; // selected marker
let activeInfoWindow; // info window related to clicked marker. can only be one info window open at any time.
let activeMarkerName; // name of the clicked marker. 
var bounds;

// Initialize map
function initMap() {
  bounds = new google.maps.LatLngBounds();

  const galway = { lat: 53.27108077506178, lng: -9.056759662752283 };
  map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      minZoom:5,
      center: galway,
      mapTypeId: "terrain",
      streetViewControl: false,
      
  });
}

// Following function 
//  1) adds markers to the map when called 
//  2) creates event listeners for markers being clicked 
//  3) markerClick() opens infowindow. 
const addMarker = (markerData) => {
  const marker = new google.maps.Marker({
      position: markerData.position,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: { url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png" },
      content: markerData.content + `<br/> <button id="add-button"> <i class="fas fa-plus-square"></i> Add to List</button>`
  });

  markers.push(marker); // pushes markers to the markers array, which is cleared each time new markers are loaded.
  
  marker.addListener("click", () => {
      var infowindow = new google.maps.InfoWindow({
          content: marker.content
      });

      // Closes any previously opened infowindows
      if (activeInfoWindow) 
          activeInfoWindow.close();
      infowindow.open(map, marker);
      activeInfoWindow = infowindow;
      activeMarkerName = markerData.name;
  });
  bounds.extend(marker.getPosition());
  map.fitBounds(bounds, 0.5); // fit map viewport to all markers all the markers.
}


// Deletes all markers in the array by removing references to them.
const deleteMarkers = () => {
  markers.forEach(m => m.setMap(null));
  markers = [];
}

// Event Listeners for all buttons
[...document.querySelectorAll('.map-buttons>button')].forEach(e => {
  e.addEventListener("click", () => {
      deleteMarkers();
      markersSet[e.id].forEach(m => addMarker(m));
  });
});