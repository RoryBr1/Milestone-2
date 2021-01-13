/*  MARKER FORMAT TEMPLATE   
    {
        name: " INSERT MARKER NAME ",
        position: { 
            lat: INSERT LATITUDE , 
            lng: INSERT LONGITUDE
        },
        content: `<b> INSERT MARKER NAME </b> <br />
                  <a href=" INSERT URL " target="_blank">Website</a>`
    }
*/

let restaurants = [
    {
        name: "Seven Bar & Restaurant",
        position: { 
            lat: 53.27181651197241, 
            lng: -9.055076401427293 
        },
        content: `<b>Seven Bar & Restaurant</b> <br />
                  <a href="http://sevenbridgestreet.ie/" target="_blank">Website</a>`
    }, 
    {
        name: "The Quays Bar & Restaurant",
        position: { 
            lat: 53.27110339602522, 
            lng: -9.053954830263663 
        },
        website: "https://quaysgalway.ie/",
        content: `<b>The Quays Bar & Restaurant</b> <br />
                    <a href="http://quaysgalway.ie/" target="_blank">Website</a>`
    }
];

let nightlife = [
    {
        name: "Seven Bridgestreet",
        position: { 
            lat: 53.27181651197241 + 0.00015, 
            lng: -9.055076401427293 + 0.00015
        },
        website: "http://sevenbridgestreet.ie/"
    },
    {
        name: "The Quays Bar & Restaurant",
        position: { 
            lat: 53.27110339602522 + 0.00015, 
            lng: -9.053954830263663 + 0.00015
        },
        website: "https://quaysgalway.ie/"
    }
];

let historicSites = [
    {
        name: "Seven Bridgestreet",
        position: { 
            lat: 53.27181651197241 + 0.00025,
            lng: -9.055076401427293 + 0.00025
        },
        website: "http://sevenbridgestreet.ie/"
    },
    {
        name: "The Quays Bar & Restaurant",
        position: { 
            lat: 53.27110339602522 + 0.00035,
            lng: -9.053954830263663 + 0.00035
        },
        website: "https://quaysgalway.ie/"
    }
];

let nature = [
    {
        name: "Seven Bridgestreet",
        position: { 
            lat: 53.27181651197241 + 0.00045,
            lng: -9.055076401427293 + 0.00045
        },
        website: "http://sevenbridgestreet.ie/"
    },
    {
        name: "The Quays Bar & Restaurant",
        position: { 
            lat: 53.27110339602522 + 0.00045,
            lng: -9.053954830263663 + 0.00045
        },
        website: "https://quaysgalway.ie/"
    }
];

let activities = [
    {
        name: "Seven Bridgestreet",
        position: { 
            lat: 53.27181651197241 + 0.00055,
            lng: -9.055076401427293 + 0.00055
        },
        website: "http://sevenbridgestreet.ie/"
    },
    {
        name: "The Quays Bar & Restaurant",
        position: { 
            lat: 53.27110339602522 + 0.00055,
            lng: -9.053954830263663 + 0.00055
        },
        website: "https://quaysgalway.ie/"
    }
];

let markersSet = {
    "restaurants": restaurants,
    "nightlife": nightlife,
    "historic-sites": historicSites,
    "nature": nature,
    "activities": activities
};