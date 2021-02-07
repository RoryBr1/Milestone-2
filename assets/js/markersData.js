/* This script stores all marker data used for map.js and todoList.js, including
    - Marker name
    - Marker position to be placed on the map
    - Content of info-windows

    Arrays are created named after and relevant to each category: hotels, restaurants, nightlife, historicSites, nature and activities.
    To create new markers in any category, use the template below and insert within the relavant array.
    Examine the format of existing markers to make sure it matches, and test all markers on the map after adding them.
*/

/*  MARKER FORMAT TEMPLATE   
    {
        name: " INSERT MARKER NAME ",
        position: { 
            lat: INSERT LATITUDE , 
            lng: INSERT LONGITUDE
        },
        content: `<b> INSERT MARKER NAME </b> <br>
                    Marker description <br>
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
        content: `<b>Jurys Inn Galway</b> <br>
                    Hotel
                  <a href="https://www.jurysinns.com/hotels/galway/?utm_source=google&utm_medium=local" target="_blank">Website</a>`
    }, 
    {
        name: "Harbour Hotel",
        position: {  
            lat: 53.270803429668476, 
            lng: -9.047536935531378 
        },
        content: `<b>Harbour Hotel</b> <br>
                    Hotel <br>
                    <a href="https://www.harbour.ie/?utm_source=google&utm_medium=organic&utm_campaign=Knowledge_Graph" target="_blank">Website</a>`
    }, 
    {
        name: "The Residence Hotel",
        position: {  
            lat: 53.27103737916188, 
            lng: -9.05434074579078
        },
        content: `<b>The Residence Hotel</b> <br>
                    Hotel <br>
                    <a href="http://www.theresidencehotel.ie/en/?utm_source=google&utm_medium=organic&utm_campaign=Knowledge_Graph" target="_blank">Website</a>`
    }, 
    {
        name: "The House Hotel", 
        position: {  
            lat: 53.270672401786555,
            lng: -9.053422135271697
        },
        content: `<b>The House Hotel</b> <br>
                    Hotel <br>
                    <a href="http://www.thehousehotel.ie/?utm_source=mybusiness&utm_medium=organic" target="_blank">Website</a>`
    }, 
    {
        name: "Galway Arms Inn", 
        position: {   
            lat: 53.271475872476785,
            lng: -9.056988728816263
        },
        content: `<b>Galway Arms Inn</b> <br>
                    Hotel <br>
                    <a href="http://galwayarmsinn.com-galway.com/" target="_blank">Website</a>`
    }, 
    {
        name: "The Ardilaun Hotel", 
        position: {    
            lat: 53.26775683353552,
            lng: -9.080827084575802
        },
        content: `<b>The Ardilaun Hotel</b> <br>
                    Hotel <br>
                    <a href="https://www.theardilaunhotel.ie/" target="_blank">Website</a>`
    }, 
    {
        name: "Galway Bay Hotel", 
        position: {    
            lat: 53.25855521962067, 
            lng: -9.084858299920429
        },
        content: `<b>Galway Bay Hotel</b> <br>
                    Hotel <br>
                    <a href="http://www.galwaybayhotel.com/" target="_blank">Website</a>`
    }, 
    {
        name: "Anno Santo Hotel", 
        position: {     
            lat: 53.263355005069656,
            lng: -9.08863485139975
        },
        content: `<b>Anno Santo Hotel</b> <br>
                    Hotel <br>
                    <a href="http://www.annosantohotel.com/" target="_blank">Website</a>`
    }, 
    {
        name: "Salthill Hotel", 
        position: {     
            lat: 53.25870796999936, 
            lng: -9.087261561523563
        },
        content: `<b>Salthill Hotel</b> <br>
                    Hotel <br>
                    <a href="https://www.salthillhotel.com/?utm_source=mybusiness&utm_medium=organic&utm_campaign=Google%20My%20Business" target="_blank">Website</a>`
    }, 
    {
        name: "Park House Hotel", 
        position: {     
            lat: 53.274742343731006, 
            lng: -9.046960699920428
        },
        content: `<b>Park House Hotel</b> <br>
                    Hotel <br>
                    <a href="https://www.parkhousehotel.ie/?utm_source=mybusiness&utm_medium=organic" target="_blank">Website</a>`
    }, 
    {
        name: "Park House Hotel", 
        position: {     
            lat: 53.274742343731006, 
            lng: -9.046960699920428
        },
        content: `<b>Park House Hotel</b> <br>
                    Hotel <br>
                    <a href="https://www.parkhousehotel.ie/?utm_source=mybusiness&utm_medium=organic" target="_blank">Website</a>`
    }, 
    {
        name: "Clayton Hotel", 
        position: {      
            lat: 53.29136237873036,
            lng: -8.989341330609685
        },
        content: `<b>Clayton Hotel</b> <br>
                    Hotel <br>
                    <a href="https://ad.doubleclick.net/ddm/trackclk/N1074062.3844254CLAYTONHOTELS-OR/B24186235.278894805;dc_trk_aid=472925211;dc_trk_cid=135201398;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=" target="_blank">Website</a>`
    }, 
    {
        name: "Clybaun Hotel", 
        position: {      
            lat: 53.26970306726223, 
            lng: -9.107568315265057
        },
        content: `<b>Clybaun Hotel</b> <br>
                    Hotel <br>
                    <a href="http://www.clybaunhotel.ie/" target="_blank">Website</a>`
    }, 
    {
        name: "Imperial Hotel", 
        position: {       
            lat: 53.27467185628938,
            lng: -9.051038045954312
        },
        content: `<b>Imperial Hotel</b> <br>
                    Hotel <br>
                    <a href="http://www.clybaunhotel.ie/" target="_blank">Website</a>`
    }, 
    {
        name: "The Maldron Hotel", 
        position: {       
            lat: 53.28578913960272, 
            lng: -9.045122599920427
        },
        content: `<b>The Maldron Hotel</b> <br>
                    Hotel <br>
                    <a href="https://ad.doubleclick.net/ddm/trackclk/N1074062.3913567MALDRONHOTELS-OR/B24608539.282337852;dc_trk_aid=476090150;dc_trk_cid=137767636;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=$%7BGDPR%7D;gdpr_consent=$%7BGDPR_CONSENT_755%7D" target="_blank">Website</a>`
    }, 
    {
        name: "The Connacht Hotel", 
        position: {       
            lat: 53.280084888887394, 
            lng: -9.021187784575803
        },
        content: `<b>The Connacht Hotel</b> <br>
                    Hotel <br>
                    <a href="https://www.theconnacht.ie/?utm_source=google&utm_medium=organic&utm_campaign=Knowledge_Graph" target="_blank">Website</a>`
    }, 
    {
        name: "The Forster Court Hotel", 
        position: {       
            lat: 53.27503404813004, 
            lng: -9.04617356902971
        },
        content: `<b>The Forster Court Hotel</b> <br>
                    Hotel <br>
                    <a href="https://www.theforstercourt.ie/en/?utm_source=google&utm_medium=organic&utm_campaign=Knowledge_Graph" target="_blank">Website</a>`
    }, 
    {
        name: "Nox Hotel", 
        position: {       
            lat: 53.28626190168182, 
            lng: -9.042231792677997
        },
        content: `<b>Nox Hotel</b> <br>
                    Hotel <br>
                    <a href="http://www.noxhotelgalway.ie/" target="_blank">Website</a>`
    }
];

let restaurants = [
    {
        name: "Seven Bar & Restaurant",
        position: { 
            lat: 53.27181651197241, 
            lng: -9.055076401427293 
        },
        content: `<b>Seven Bar & Restaurant</b> <br>
                    Bar/Restaurant <br>
                  <a href="http://sevenbridgestreet.ie/" target="_blank">Website</a>`
    }, 
    {
        name: "The Quays Bar & Restaurant",
        position: { 
            lat: 53.27110339602522, 
            lng: -9.053954830263663 
        },
        content: `<b>The Quays Bar & Restaurant</b> <br>
                    Bar/Restaurant <br>
                    <a href="http://quaysgalway.ie/" target="_blank">Website</a>`
    }, 
    {
        name: "Scotty's Burgers & Wings",
        position: { 
            lat: 53.284438413777146, 
            lng: -9.050448179645915
        },
        content: `<b>Scotty's Burgers & Wings</b> <br>
                    Restaurant <br>
                    <a href="https://scottys.ie/" target="_blank">Website</a>`
    }, 
    {
        name: "Fork Restaurant",
        position: { 
            lat: 53.28679875880583, 
            lng: -9.042208433477276
        },
        content: `<b>Fork Restaurant</b> <br>
                    Restaurant <br>
                    <a href="http://noxhotelgalway.ie/" target="_blank">Website</a>`
    }, 
    {
        name: "Frends Restaurant",
        position: { 
            lat: 53.283771336116565, 
            lng: -9.035427809025999
        },
        content: `<b>Frends Restaurant</b> <br>
                    Restaurant <br>
                    <a href="https://restaurantguru.com/Frends-Restaurant-Galway" target="_blank">Website</a>`
    }, 
    {
        name: "Grain & Grill ",
        position: { 
            lat: 53.285669914407144, 
            lng: -9.045384168979771
        },
        content: `<b>Grain & Grill </b> <br>
                    Bar/Restaurant <br>
                    <a href="https://www.maldronhotelsandyroadgalway.com/dining/" target="_blank">Website</a>`
    }, 
    {
        name: "Apoema Bistro",
        position: { 
            lat: 53.27599738489084, 
            lng: -9.049750200051093
        },
        content: `<b>Apoema Bistro</b> <br>
                    Restaurant <br>
                    <a href="https://www.apoemabistro.ie/menus" target="_blank">Website</a>`
    }, 
    {
        name: "Khow Thai",
        position: { 
            lat: 53.28665703696316, 
            lng: -9.033202086806055
        },
        content: `<b>Khow Thai</b> <br>
                    Restaurant <br>
                    <a href="http://khowthai.ie/" target="_blank">Website</a>`
    }, 
    {
        name: "McSwiggans Restaurant",
        position: { 
            lat: 53.275098291793064, 
            lng: -9.05254669087088
        },
        content: `<b>McSwiggans Restaurant</b> <br>
                    Restaurant <br>
                    <a href="http://mcswiggans.ie/" target="_blank">Website</a>`
    }, 
    {
        name: "Loam Restaurant",
        position: { 
            lat: 53.27409912962594, 
            lng: -9.045004088741328
        },
        content: `<b>Loam Restaurant</b> <br>
                    Restaurant <br>
                    <a href="http://www.loamgalway.com/" target="_blank">Website</a>`
    }, 
    {
        name: "Papa Rich Woodquay",
        position: { 
            lat: 53.27510683762272, 
            lng: -9.052794646950787
        },
        content: `<b>Papa Rich Woodquay</b> <br>
                    Restaurant <br>
                    <a href="http://www.paparich.ie/" target="_blank">Website</a>`
    }, 
    {
        name: "Zappis Restaurant",
        position: { 
            lat: 53.27434056426496, 
            lng: -9.051828484153873
        },
        content: `<b>Zappis Restaurant</b> <br>
                    Restaurant <br>
                    <a href="https://zappisgalway.ie/" target="_blank">Website</a>`
    }, 
    {
        name: "Trieste Café & Wine Bar",
        position: { 
            lat: 53.272069719751364, 
            lng: -9.051686210477385
        },
        content: `<b>Trieste Café & Wine Bar</b> <br>
                    Café/Restaurant <br>
                    <a href="https://trieste-cafe-wine-bar.clickandcollection.com/" target="_blank">Website</a>`
    }, 
    {
        name: "Tomodachi Sushi Bar",
        position: { 
            lat: 53.27411005642217, 
            lng: -9.051317676805963
        },
        content: `<b>Tomodachi Sushi Bar</b> <br>
                    Asian restaurant <br>
                    <a href="http://tomodachi.ie/" target="_blank">Website</a>`
    }, 
    {
        name: "Asian Tea House",
        position: { 
            lat: 53.27458482950851, 
            lng: -9.053491618464468
        },
        content: `<b>Asian Tea House</b> <br>
                    Asian restaurant <br>
                    <a href="http://www.asianteahouse.ie/" target="_blank">Website</a>`
    }, 
    {
        name: "Pasta Factory",
        position: { 
            lat: 53.274322352312446, 
            lng: -9.053658346544482
        },
        content: `<b>Pasta Factory</b> <br>
                    Restaurant <br>
                    <a href="http://pastafactoryrestaurant.com/" target="_blank">Website</a>`
    }
];

let nightlife = [
    {
        name: "Róisín Dubh",
        position: {   
            lat: 53.27020397986475,
            lng: -9.058122630263655
        },
        content: `<b>Róisín Dubh</b> <br> 
                    Bar / Nightclub <br>
                <a href="http://www.roisindubh.net/" target="_blank">Website</a>`
    },
    {
        name: "Seven Bar & Restaurant",
        position: { 
            lat: 53.27181651197241, 
            lng: -9.055076401427293 
        },
        content: `<b>Seven Bar & Restaurant</b> <br>
                   Bar / Nightclub <br>
                  <a href="http://sevenbridgestreet.ie/" target="_blank">Website</a>`
    },
    {
        name: "The Front Door Pub",
        position: {  
            lat: 53.27173740671623,
            lng: -9.054195876266448
        },
        content: `<b>The Front Door Pub</b> <br>
        Bar / Nightclub <br>          
        <a href="http://sevenbridgestreet.ie/" target="_blank">Website</a>`
    },
    {
        name: "Coyotes Late Bar",
        position: {  
            lat: 53.2728463326419, 
            lng: -9.05269203270198
        },
        content: `<b>Coyotes Late Bar</b> <br>
        Bar / Nightclub <br>          
        <a href="http://www.coyotes.ie/" target="_blank">Website</a>`
    },
    {
        name: "DNA",
        position: {  
            lat: 53.27389255839181, 
            lng: -9.050393813114722
        },
        content: `<b>DNA</b> <br>
        Bar / Nightclub <br>          
        <a href="http://www.dnagalway.com/" target="_blank">Website</a>`
    },
    {
        name: "Electric",
        position: {  
            lat: 53.273813011654504, 
            lng:  -9.052903160666355
        },
        content: `<b>Electric</b> <br>
        Bar / Nightclub <br>          
        <a href="https://www.facebook.com/ElectricGalway/" target="_blank">Website</a>`
    },
    {
        name: "Halo",
        position: {  
            lat: 53.27365723451133, 
            lng: -9.05261578412678
        },
        content: `<b>Halo</b> <br>
        Bar / Nightclub <br>          
        <a href="https://www.facebook.com/HaloNightclubGalway/" target="_blank">Website</a>`
    },
    {
        name: "O'Connell's Bar",
        position: {  
            lat: 53.274629524394314, 
            lng: -9.048317062865136
        },
        content: `<b>O'Connell's Bar</b> <br>
        Bar / Nightclub <br>          
        <a href="http://www.oconnellsbargalway.com/" target="_blank">Website</a>`
    },
    {
        name: "Nova",
        position: {  
            lat: 53.270207022355535, 
            lng: -9.059079234472488
        },
        content: `<b>Nova</b> <br>
        Bar / LGBT Friendly <br>          
        <a href="https://www.facebook.com/novabargalway/" target="_blank">Website</a>`
    },
    {
        name: "Caribou",
        position: {  
            lat: 53.275567829217266,
            lng:  -9.05249732321061
        },
        content: `<b>Caribou</b> <br>
        Bar / Nightclub <br>          
        <a href="http://www.caribougalway.com/" target="_blank">Website</a>`
    },
    {
        name: "Barr An Chaladh",
        position: {  
            lat: 53.27529042860854, 
            lng: -9.052763403899911
        },
        content: `<b>Barr An Chaladh</b> <br>
        Traditional Pub <br>          
        <a href="https://barr-an-chaladh.business.site/" target="_blank">Website</a>`
    },
    {
        name: "Taaffes Bar",
        position: {  
            lat: 53.2723584217657, 
            lng: -9.05315675202358
        },
        content: `<b>Taaffes Bar</b> <br>
        Traditional Pub <br>          
        <a href="https://www.facebook.com/taaffes.bar.1/" target="_blank">Website</a>`
    },
    {
        name: "Tigh Chóilí",
        position: {  
            lat: 53.27234348810739, 
            lng: -9.05355591082315
        },
        content: `<b>Tigh Chóilí</b> <br>
        Traditional Pub <br>          
        <a href="http://tigcoiligalway.com/" target="_blank">Website</a>`
    },
    {
        name: "An Púcán",
        position: {  
            lat: 53.27455168016004, 
            lng: -9.047430501228757
        },
        content: `<b>An Púcán</b> <br>
        Bar / Nightclub <br>          
        <a href="https://anpucan.ie/" target="_blank">Website</a>`
    },
    {
        name: "The Skeff Bar",
        position: {  
            lat: 53.27410851028751, 
            lng: -9.050059078277625
        },
        content: `<b>The Skeff Bar</b> <br>
        Bar / Nightclub <br>          
        <a href="http://www.theskeff.ie/" target="_blank">Website</a>`
    },
    {
        name: "Monroe's Tavern",
        position: {  
            lat: 53.270024905933, 
            lng: -9.057768144904271
        },
        content: `<b>Monroe's Tavernb</b> <br>
        Bar / Nightclub <br>          
        <a href="http://www.monroes.ie/" target="_blank">Website</a>`
    },
    {
        name: "Sally Longs Rock Bar",
        position: {  
            lat: 53.27414458776358, 
            lng: -9.053625178480377
        },
        content: `<b>Sally Longs Rock Bar</b> <br>
        Rock Bar/LGBT Friendly <br>          
        <a href="https://www.sallylongs.com/" target="_blank">Website</a>`
    },
    {
        name: "1520  Bar",
        position: {  
            lat: 53.27106893716259, 
            lng: -9.054376737990207
        },
        content: `<b>1520  Bar</b> <br>
        Bar <br>          
        <a href="https://1520.ie/" target="_blank">Website</a>`
    }
];

let historicSites = [
    {
        name: "Spanish Arch",
        position: {  
            lat: 53.269780422161375,
            lng: -9.054088588073709
        },
        content: `<b>Spanish Arch</b> <br>
        Historic site <br>
        <a href="https://www.galwaytourism.ie/pThe-Spanish-Arch.html" target="_blank">Website</a>`
    },
    {
        name: "Galway City Museum",
        position: {   
            lat: 53.26966492755711,
            lng: -9.053648705785124
        },
        content: `<b>Galway City Museum</b> <br>
        Museum <br>
        <a href="http://www.galwaycitymuseum.ie/" target="_blank">Website</a>`
    },
    {
        name: "Statue of Oscar & Eduard Wilde",
        position: {    
            lat: 53.273732716176326,
            lng: -9.051535125058386
        },
        content: `<b>Statue of Oscar & Eduard Wilde</b> <br>
        Historic Statue <br>
        <a href="http://galwaycity.ie/" target="_blank">Website</a>`
    },
    {
        name: "Hall of the Red Earl",
        position: {      
            lat: 53.271051189210105,
            lng: -9.053670587146563
        },
        content: `<b>Hall of the Red Earl</b> <br>
        Castle <br>
        <a href="http://www.galwaycivictrust.ie/" target="_blank">Website</a>`
    },
    {
        name: "Menlo Castle",
        position: {       
            lat: 53.296509034331876,
            lng: -9.07365433982323
        },
        content: `<b>Menlo Castle</b> <br>
        Castle <br>
        <a href="http://www.galwaycity.ie/heritage-conservation/" target="_blank">Website</a>`
    },
    {
        name: "Fisheries Watchtower Museum",
        position: {      
            lat: 53.27099838985916, 
            lng: -9.054373976391885
        },
        content: `<b>Fisheries Watchtower Museum</b> <br>
        Museum <br>
        <a href="http://www.galwaycity.ie/heritage-conservation/" target="_blank">Website</a>`
    },
    {
        name: "Famine Ship Memorial",
        position: {       
            lat: 53.261961966367764,
            lng: -9.064365343700054
        },
        content: `<b>Famine Ship Memorial</b> <br>
        Historic site <br>
        <a href="https://www.salthill.com/" target="_blank">Website</a>`
    },
    {
        name: "Merlin Castle",
        position: {       
            lat: 53.27982909257506, 
            lng: -8.998058599980107
        },
        content: `<b>Merlin Castle</b> <br>
        Castle <br>
        <a href="https://www.facebook.com/groups/FriendsofMerlinWoods/" target="_blank">Website</a>`
    },
    {
        name: "Terryland Castle",
        position: {       
            lat: 53.2831008071796, 
            lng: -9.059537457652421
        },
        content: `<b>Terryland Castle</b> <br>
        Castle <br>
        <a href="http://www.galwaycity.ie/heritage-conservation/" target="_blank">Website</a>`
    },
    {
        name: "Lynch Memorial Window",
        position: {       
            lat: 53.27223027779617, 
            lng: -9.053504940663169
        },
        content: `<b>Lynch Memorial Window</b> <br>
        Historic Site <br>
        <a href="https://www.tripadvisor.ie/Attraction_Review-g186609-d215972-Reviews-The_Lynch_Memorial-Galway_County_Galway_Western_Ireland.html" target="_blank">Website</a>`
    },
    {
        name: "Oranmore Castle",
        position: {       
            lat: 53.268304123683784, 
            lng: -8.934775853337134
        },
        content: `<b>Oranmore Castle</b> <br>
        Castle <br>
        <a href="http://www.oranmorecastle.com/" target="_blank">Website</a>`
    },
    {
        name: "Ardfry Castle",
        position: {       
            lat: 53.23716534861427, 
            lng: -8.977184239461574
        },
        content: `<b>Ardfry Castle</b> <br>
        Castle <br>
        <a href="https://visitgalway.ie/ardfry-castle/" target="_blank">Website</a>`
    },
    {
        name: "Eyre Square",
        position: {       
            lat: 53.27436827052334, 
            lng: -9.049195413471633
        },
        content: `<b>Eyre Square</b> <br> 
        Historic City Centre <br>
        <a href="http://www.galwaycity.ie/public-parks" target="_blank">Website</a>`
    }
];

let nature = [
    {
        name: "Grattan Beach",
        position: {       
            lat: 53.26299999861083,
            lng: -9.06598345236164
        },
        content: `<b>Grattan Beach</b> <br>
        Beach <br>
        <a href="http://www.galwaycity.ie/" target="_blank">Website</a>`
    },
    {
        name: "Salthill Prom",
        position: {       
            lat: 53.257534597320145,
            lng: -9.086925441291887
        },
        content: `<b>Salthill Prom</b> <br>
        Scenic Walk <br>
        <a href="http://www.galwaycity.ie/" target="_blank">Website</a>`
    },
    {
        name: "The Meadows Wildlife Park",
        position: {        
            lat: 53.27547917041817,
            lng: -8.997749636070202
        },
        content: `<b>The Meadows Wildlife Park</b> <br>
        Wildlife Park <br>
        <a href="https://www.facebook.com/groups/128207273995064/" target="_blank">Website</a>`
    },
    { 
        name: "Merlin Park Woods",
        position: {        
            lat: 53.28029198716102,
            lng: -8.991792056950251
        },
        content: `<b>Merlin Park Woods</b> <br>
        Scenic Walk <br>
        <a href="https://www.facebook.com/groups/FriendsofMerlinWoods/" target="_blank">Website</a>`
    },
    { 
        name: "Circle of Life Commemorative Garden",
        position: {        
            lat: 53.25800992586065,
            lng: -9.085544220716457 
        },
        content: `<b>Circle of Life Commemorative Garden</b> <br>
        Garden/Park <br>
        <a href="https://www.galwaycity.ie/" target="_blank">Website</a>`
    },
    { 
        name: "Claude Toft Park",
        position: {         
            lat: 53.26116791306052,
            lng: -9.072428391573974
        },
        content: `<b>Claude Toft Park</b> <br>
        Park <br>
        <a href="https://www.galwaycity.ie/" target="_blank">Website</a>`
    },
    { 
        name: "Salthill Public Park",
        position: {          
            lat: 53.25966499072458,
            lng: -9.080698691973739
        },
        content: `<b>Salthill Public Park</b> <br>
        Park <br>
        <a href="https://www.galwaycity.ie/" target="_blank">Website</a>`
    },
    { 
        name: "South Park Beach",
        position: {           
            lat: 53.26459190454105,
            lng: -9.051847728007633
        },
        content: `<b>South Park Beach</b> <br>
        Beach <br>
        <a href="https://www.galwaycity.ie/" target="_blank">Website</a>`
    },
    {
        name: "Celia Griffin Memorial Park",
        position: {    
            lat: 53.26301753921266,
            lng: -9.06403632633284    
        },
        content: `<b>Celia Griffin Memorial Park</b> <br>
        Park <br>
        <a href="https://www.salthill.com/" target="_blank">Website</a>`
    },
    {
        name: "Deadmans Beach",
        position: {     
            lat: 53.26954489407315,
            lng: -9.035236826894474
        },
        content: `<b>Deadmans Beach</b> <br>
        Beach <br>
        <a href="https://www.galwaycity.ie/" target="_blank">Website</a>`
    },
    {
        name: "Eyre Square",
        position: {      
            lat: 53.274365536293,
            lng: -9.049229623478606
        },
        content: `<b>Eyre Square</b> <br>
        Park/City Centre <br>
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
        content: `<b>IMC Cinema Galway</b> <br>
        Cinema <br>
        <a href="http://www.imccinemas.ie/home.asp?venue=galway" target="_blank">Website</a>`
    },
    {
        name: "Galway Greyhound Stadium",
        position: {      
            lat: 53.27887561980191, 
            lng: -9.03940732825368
        },
        content: `<b>Galway Greyhound Stadium</b> <br>
        Race Track <br>
        <a href="http://www.galwaygreyhoundstadium.ie/?utm_source=google&utm_medium=maps" target="_blank">Website</a>`
    },
    {
        name: "Galway Golf Club",
        position: {       
            lat: 53.260186460198724,
            lng: -9.09499208975245
        },
        content: `<b>Galway Golf Club</b> <br>
        Golf <br>
        <a href="http://www.galwaygolf.com/" target="_blank">Website</a>`
    },
    {
        name: "Great Escape Rooms",
        position: {       
            lat: 53.27386553936585, 
            lng: -9.053522244160893
        },
        content: `<b>Great Escape Rooms</b> <br>
        Escape Room <br>
        <a href="http://greatescaperooms.ie/" target="_blank">Website</a>`
    },
    {
        name: "Waterside Zorbing",
        position: {       
            lat: 53.277362026224324, 
            lng: -9.054148151401487
        },
        content: `<b>Waterside Zorbing</b> <br>
        Outdoor activity <br>
        <a href="http://www.getwest.ie/water-zorbing/" target="_blank">Website</a>`
    },
    {
        name: "Pure Skill",
        position: {       
            lat: 53.27133798110528, 
            lng: -9.100741161219371
        },
        content: `<b>Pure Skill</b> <br>
        Gaelic Sports Complex<br>
        <a href="http://www.pureskill.ie/" target="_blank">Website</a>`
    },
    {
        name: "Galway Walks ",
        position: {       
            lat: 53.274689552753806, 
            lng: -9.048460876685633
        },
        content: `<b>Galway Walks </b> <br>
        Tour guide <br>
        <a href="http://www.galwaywalks.com/" target="_blank">Website</a>`
    },
    {
        name: "Planet Entertainment Centre",
        position: {       
            lat: 53.27953196150168, 
            lng: -9.048261172918158
        },
        content: `<b>Planet Entertainment Centre</b> <br>
        Bowling, Arcade, Snooker <br>
        <a href="http://www.planetgalway.ie/" target="_blank">Website</a>`
    },
    {
        name: "Claudes Casino",
        position: {       
            lat: 53.25962237785931, 
            lng: -9.076502425580449
        },
        content: `<b>Claudes Casino</b> <br>
        Casino <br>
        <a href="https://facebook.com/Claudes-Casino-Salthill-297509226486/" target="_blank">Website</a>`
    },
    {
        name: "Seapoint Leisure",
        position: {       
            lat: 53.25964699625536, 
            lng: -9.075540041095756
        },
        content: `<b>Seapoint Leisure</b> <br>
        Amusement Center <br>
        <a href="https://www.facebook.com/seapointgalway/" target="_blank">Website</a>`
    },
    {
        name: "Galway Bay Boat Tours",
        position: {       
            lat: 53.26901202906572, 
            lng: -9.047193666652664
        },
        content: `<b>Galway Bay Boat Tours</b> <br>
        Tour organiser <br>
        <a href="http://www.galwaybaytours.com/" target="_blank">Website</a>`
    },
    {
        name: "Eglinton Casino",
        position: {       
            lat: 53.27469800875754, 
            lng: -9.052455081569898
        },
        content: `<b>Eglinton Casino</b> <br>
        Casino/Snooker Hall <br>
        <a href="http://www.theeglinton.com/" target="_blank">Website</a>`
    },
    {
        name: "Caesers Palace",
        position: {       
            lat: 53.27390136403644, 
            lng: -9.04843831375855
        },
        content: `<b>Caesers Palace</b> <br>
        Casino <br>
        <a href="https://caesars.vantageclub.ie/" target="_blank">Website</a>`
    }
];

let markersSet = {
    "hotels": hotels,
    "restaurants": restaurants,
    "nightlife": nightlife,
    "historic-sites": historicSites,
    "nature": nature,
    "activities": activities
};