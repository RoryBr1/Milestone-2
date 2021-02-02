var markers = [];//some array

let selected = [];
let activeInfoWindow;
let activeMarkerName;

// Initialize map
function initMap() {
  const galway = { lat: 53.27108077506178, lng: -9.056759662752283 };
  map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
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