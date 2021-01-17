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

let hotels = [
    {
        name: "Jurys Inn Galway",
        position: {  
            lat: 53.27062409609697, 
            lng: -9.054967632117835 
        },
        content: `<b>Jurys Inn Galway</b> <br />
                  <a href="https://www.jurysinns.com/hotels/galway/?utm_source=google&utm_medium=local" target="_blank">Website</a>`
    }, 
    {
        name: "Harbour Hotel",
        position: {  
            lat: 53.270803429668476, 
            lng: -9.047536935531378 
        },
        content: `<b>Harbour Hotel</b> <br />
                    <a href="https://www.harbour.ie/?utm_source=google&utm_medium=organic&utm_campaign=Knowledge_Graph" target="_blank">Website</a>`
    }
];

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
        content: `<b>The Quays Bar & Restaurant</b> <br />
                    <a href="http://quaysgalway.ie/" target="_blank">Website</a>`
    }
];

let nightlife = [
    {
        name: "Róisín Dubh",
        position: {   
            lat: 53.27020397986475,
            lng: -9.058122630263655
        },
        content: `<b>Róisín Dubh</b> <br />
        <a href="http://www.roisindubh.net/" target="_blank">Website</a>`
    },
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
        name: "The Front Door Pub",
        position: {  
            lat: 53.27173740671623,
            lng: -9.054195876266448
        },
        content: `<b>The Front Door Pub</b> <br />
                  <a href="http://sevenbridgestreet.ie/" target="_blank">Website</a>`
    }
];

let historicSites = [
    {
        name: "Spanish Arch",
        position: {  
            lat: 53.269780422161375,
            lng: -9.054088588073709
        },
        content: `<b>Spanish Arch</b> <br />
        <a href="https://www.galwaytourism.ie/pThe-Spanish-Arch.html" target="_blank">Website</a>`
    },
    {
        name: "Galway City Museum",
        position: {   
            lat: 53.26966492755711,
            lng: -9.053648705785124
        },
        content: `<b>Galway City Museum</b> <br />
        <a href="http://www.galwaycitymuseum.ie/" target="_blank">Website</a>`
    },
    {
        name: "Statue of Oscar & Eduard Wilde",
        position: {    
            lat: 53.273732716176326,
            lng: -9.051535125058386
        },
        content: `<b>Statue of Oscar & Eduard Wilde</b> <br />
        <a href="http://galwaycity.ie/" target="_blank">Website</a>`
    },
    {
        name: "Hall of the Red Earl",
        position: {      
            lat: 53.271051189210105,
            lng: -9.053670587146563
        },
        content: `<b>Hall of the Red Earl</b> <br />
        <a href="http://www.galwaycivictrust.ie/" target="_blank">Website</a>`
    },
    {
        name: "Menlo Castle",
        position: {       
            lat: 53.296509034331876,
            lng: -9.07365433982323
        },
        content: `<b>Menlo Castle</b> <br />
        <a href="http://www.galwaycity.ie/heritage-conservation/" target="_blank">Website</a>`
    },
    {
        name: "Menlo Castle",
        position: {      
            lat: 53.26856891345938,
            lng: -9.051686686150235
        },
        content: `<b>Menlo Castle</b> <br />
        <a href="http://www.galwaycity.ie/heritage-conservation/" target="_blank">Website</a>`
    },
    {
        name: "Famine Ship Memorial",
        position: {       
            lat: 53.261961966367764,
            lng: -9.064365343700054
        },
        content: `<b>Famine Ship Memorial</b> <br />
        <a href="https://www.salthill.com/" target="_blank">Website</a>`
    },
];

let nature = [
    {
        name: "Grattan Beach",
        position: {       
            lat: 53.26299999861083,
            lng: -9.06598345236164
        },
        content: `<b>Grattan Beach</b> <br />
        <a href="http://www.galwaycity.ie/" target="_blank">Website</a>`
    },
    {
        name: "Salthill Prom",
        position: {       
            lat: 53.257534597320145,
            lng: -9.086925441291887
        },
        content: `<b>Salthill Prom</b> <br />
        <a href="http://www.galwaycity.ie/" target="_blank">Website</a>`
    },
    {
        name: "The Meadows Wildlife Park",
        position: {        
            lat: 53.27547917041817,
            lng: -8.997749636070202
        },
        content: `<b>The Meadows Wildlife Park</b> <br />
        <a href="https://www.facebook.com/groups/128207273995064/" target="_blank">Website</a>`
    },
    { 
        name: "Merlin Park Woods",
        position: {        
            lat: 53.28029198716102,
            lng: -8.991792056950251
        },
        content: `<b>Merlin Park Woods</b> <br />
        <a href="https://www.facebook.com/groups/FriendsofMerlinWoods/" target="_blank">Website</a>`
    },
    { 
        name: "Circle of Life Commemorative Garden",
        position: {        
            lat: 53.25800992586065,
            lng: -9.085544220716457 
        },
        content: `<b>Circle of Life Commemorative Garden</b> <br />
        <a href="https://www.galwaycity.ie/" target="_blank">Website</a>`
    },
    { 
        name: "Claude Toft Park",
        position: {         
            lat: 53.26116791306052,
            lng: -9.072428391573974
        },
        content: `<b>Claude Toft Park</b> <br />
        <a href="https://www.galwaycity.ie/" target="_blank">Website</a>`
    },
    { 
        name: "Salthill Public Park",
        position: {          
            lat: 53.25966499072458,
            lng: -9.080698691973739
        },
        content: `<b>Salthill Public Park</b> <br />
        <a href="https://www.galwaycity.ie/" target="_blank">Website</a>`
    },
    { 
        name: "South Park Beach",
        position: {           
            lat: 53.26459190454105,
            lng: -9.051847728007633
        },
        content: `<b>South Park Beach</b> <br />
        <a href="https://www.galwaycity.ie/" target="_blank">Website</a>`
    },
    {
        name: "Celia Griffin Memorial Park",
        position: {    
            lat: 53.26301753921266,
            lng: -9.06403632633284    
        },
        content: `<b>Celia Griffin Memorial Park</b> <br />
        <a href="https://www.salthill.com/" target="_blank">Website</a>`
    },
    {
        name: "Deadmans Beach",
        position: {     
            lat: 53.26954489407315,
            lng: -9.035236826894474
        },
        content: `<b>Deadmans Beach</b> <br />
        <a href="https://www.galwaycity.ie/" target="_blank">Website</a>`
    },
    {
        name: "Eyre Square",
        position: {      
            lat: 53.274365536293,
            lng: -9.049229623478606
        },
        content: `<b>Eyre Square</b> <br />
        <a href="http://www.galwaycity.ie/public-parks" target="_blank">Website</a>`
    },
];

let activities = [
    {
        name: "IMC Cinema Galway",
        position: {       
            lat: 53.27970398330442,
            lng: -9.050767775472758
        },
        content: `<b>IMC Cinema Galway</b> <br />
        <a href="http://www.imccinemas.ie/home.asp?venue=galway" target="_blank">Website</a>`
    },
    {
        name: "Galway Greyhound Stadium",
        position: {      
            lat: 53.27887561980191, 
            lng: -9.03940732825368
        },
        content: `<b>Galway Greyhound Stadium</b> <br />
        <a href="http://www.galwaygreyhoundstadium.ie/?utm_source=google&utm_medium=maps" target="_blank">Website</a>`
    },
    {
        name: "Galway Golf Club",
        position: {       
            lat: 53.260186460198724,
            lng: -9.09499208975245
        },
        content: `<b>Galway Golf Club</b> <br />
        <a href="http://www.galwaygolf.com/" target="_blank">Website</a>`
    },
];

let markersSet = {
    "hotels": hotels,
    "restaurants": restaurants,
    "nightlife": nightlife,
    "historic-sites": historicSites,
    "nature": nature,
    "activities": activities
};