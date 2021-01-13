let markers = [];
let selected = [];
let activeInfoWindow;
let activeMarkerName;

// Initialize map
function initMap() {
  const galway = { lat: 53.27108077506178, lng: -9.056759662752283 };
  map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: galway,
      mapTypeId: "terrain",
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
      let activeMarkerName = markerData.name;
      console.log(activeMarkerName);
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

// Event Listener for "Add to List" button
document.querySelector('body').addEventListener('click', event => {
  // Check if the clicked element was actually a #add-button
  if (event.target.matches('#add-button')) {
      console.log(activeMarkerName);
      addListItem();
  }
});