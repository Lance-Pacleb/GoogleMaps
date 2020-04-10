 /*var styledMapType = new google.maps.StyledMapType(
            [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
],
{name: 'Styled Map'});
*/
 /*
map.mapTypes.set('styled_map', styledMapType);
map.setMapTypeId('styled_map');


 var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">LosAngeles</h1>'+
      '<div id="bodyContent">'+
      '<p></p>'+
      '</div>'+
      '</div>';

      //image


    var iconBase ='imagesmarker/';

    var icons = {
          parking: {
            icon: iconBase + 'food.png'
          },
          library: {
            icon: iconBase + 'seven.png'
          },
          info: {
            icon: iconBase + 'food1.png'
          }
        };

    var features = [
          {
            type: 'info'
          }, {
            type: 'parking'
          }, {
            type: 'info'
          }, {
            type: 'library'
          }, {
            type: 'info'
          }, {
            type: 'info'
          }, {
            type: 'library'
          }, {
            type: 'info'
          }, {
            type: 'parking'
          }, {
            type: 'info'
          }, {
            type: 'info'
          }, {
            type: 'parking'
          }, {
            type: 'library'
          }, {
            type: 'parking'
          }, {
            type: 'info'
          }, {
            type: 'library'
          }, {
            type: 'parking'
          }, {
            type: 'library'
          }, {
            type: 'library'
          }, {
            type: 'info'
          }, {
            type: 'library'
          }, {
            type: 'info'
          }, {
            type: 'library'
          }, {
            type: 'info'
          }, {
            type: 'info'
          }, {
            type: 'library'
          }, {
            type: 'info'
          }, {
            type: 'info'
          }, {
            type: 'info'
          }, {
            type: 'parking'
          }, {
            type: 'library'
          }, {
            type: 'info'
          }, {
            type: 'library'
          }, {
            type: 'parking'
          }, {
            type: 'info'
          }, {
            type: 'parking'
          }, {
            type: 'library'
          }, {
            type: 'info'
          }, {
            type: 'parking'
          }, {
            type: 'info'
          }, {
            type: 'info'
          }, {
            type: 'library'
          }, {
            type: 'info'
          }, {
            type: 'info'
          }, {
            type: 'library'
          }, {
            type: 'info'
          }, {
            type: 'library'
          }, {
            type: 'parking'
          }, {
            type: 'library'
          }, {
            type: 'parking'
          }, {
            type: 'parking'
          }
        ];
        title: name,
        icon: {
            url: icons[features[index].type].icon,
            scaledSize: new google.maps.Size(90, 90)
        }



    marker = new google.maps.Marker({
        position: losAngeles,
        map:map,
        title:'Los Angeles'
    });

    marker.addListener('click', function() {
        infoWindow.setContent(contentString);
        infowindow.open(map, marker);
    });
*/


window.onload = () =>{ // this a  shortcut declaration of function()
 
}

var map;
var markers = [];
.
var infoWindow;


function initMap(){

    var AranetaCenterCubao= {
        lat: 14.6194878, 
        lng: 121.0511312
    };

    map = new google.maps.Map(document.getElementById('map'), {
        center: AranetaCenterCubao,
        zoom: 13,
        mapTypeId:  'roadmap'
    });


    infoWindow = new google.maps.InfoWindow();
     
     searchStores();
    //;
    //setOnClickListener();
}




function searchStores(){
  var foundStores = [];
  var zipCodeInput = document.getElementById('zip-code-input').value;
 if(zipCodeInput){
     for(var store of stores){

        var postal = store["address"]["postalCode"].substring(0,5);
        var name = store["name"];

        if(postal == zipCodeInput){
              foundStores.push(store);
        }else if(name == zipCodeInput){
              foundStores.push(store);
        }else{
          var notFound = '';
            notFound += `
            <div class="not-found-store-container">
              <h3>'Store's Not Found'</h3>
            </div>
            `
            document.querySelector('.stores-list').innerHTML  = notFound;
        }
     }
  }else{
    foundStores = stores;
  }
 clearLocation();
 displayStore(foundStores);
 showStoreMarkers(foundStores);
 setOnClickListener();
}
function clearLocation(){
  infoWindow.close();
  for(var i = 0; i < markers.length; i++){
    markers[i].setMap(null);
  }
}

function setOnClickListener(){

  var storeElements = document.querySelectorAll('.store-container');

    storeElements.forEach( function(elem, index){
    elem.addEventListener('click', function() {
       new google.maps.event.trigger(markers[index], 'click');
        })
    })
}

function displayStore(stores){

    var storesHtml = '';
    for(var [index, store] of stores.entries()){

        var address = store["addressLines"];
        var phoneNumber = store["phoneNumber"];

        storesHtml += `
            <div class="store-container">
                  <div class="store-info-container">
                    <div class="store-address">
                        <span>${address[0]}</span>
                        <span>${address[1]}</span>
                    </div>
                    <div class="store-phone-number">
                            ${phoneNumber}
                    </div>
                  </div>
                  <div class="store-number-container">
                        <div class="store-number">
                          ${index+1}
                        </div>
                  </div>
            </div>`

        document.querySelector('.stores-list').innerHTML = storesHtml;
    }
}


function showStoreMarkers(stores){

    var bounds = new google.maps.LatLngBounds();
    for(var [index, store] of stores.entries()){

        var latlng = new google.maps.LatLng(
            store["coordinates"]["latitude"],
            store["coordinates"]["longitude"]);

        var name =store["name"];
        var address =store["addressLines"][0];
        var phoneNumber = store["phoneNumber"];
        var untilOpen = store["openStatusText"];

        bounds.extend(latlng);
        createMarker(latlng, name, address, phoneNumber, untilOpen, index+1);
    }
    map.fitBounds(bounds);
}

function createMarker(latlng, name, address, phoneNumber, untilOpen, index){

  var contentString = `
      <div class="store-info-window">
          <div class="store-info-name">
              ${name}
          </div>
          <div class="store-info-status">
              ${untilOpen}
          </div>
          <div class="store-info-address">
            <div class="circle">
                <i class="fas fa-location-arrow"></i>
            </div>
              ${address}
          </div>
          <div class="store-info-phone" >
            <div class="circle">
                <i class="fas fa-phone-alt"></i>
            </div>
             ${phoneNumber}
          </div>
      </div>`

    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        label: index.toString(),
    });

    google.maps.event.addListener(marker, 'click', () =>{
      infoWindow.setContent(contentString);
      infoWindow.open(map, marker);
    });

  markers.push(marker);
}

  /*

  for(var [index, storeElement] of storeElements.entries()){
    console.log(index);
      storeElement.addEventListener('click', function(index){
      new google.maps.event.trigger(marker[index], 'click');
    })
  }
  console.log(markers);
*/
