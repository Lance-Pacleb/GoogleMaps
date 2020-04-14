window.onload = () => {
    const input = document.querySelector('#country-name-input');
    input.addEventListener('input', searchCountry);
}
var map;
var markers = [];
var infoWindow;
var DataForCovidCaces;

async function initMap() {
    //data's
    let res = await axios.get('https://corona.lmao.ninja/countries'); //axios will return a promise data
    DataForCovidCaces = res.data; //DataForCovidCases var is global declation

    //var philippineIndex = DataForCovidCaces.findIndex(one => one['country'] == 'Philippines');

    let philippine = { lat: 13, lng: 122}
    map = new google.maps.Map(document.getElementById('map'), {
        center: philippine,
        zoom: 6,
        mapTypeId: 'roadmap',
    });

    google.maps.event.addListenerOnce(map, 'tilesloaded', function () {
       
    });
    
    infoWindow = new google.maps.InfoWindow();
    searchCountry();
}

function displayCountriesName(DataForCovidCaces){
    let storesHtml = '';

    for( var[index, country] of DataForCovidCaces.entries()){
            var number = index+1
             storesHtml += `
            <div  class="store-container" >
               
                <div class="store-info-container">
                    <div class="store-address">
                        <span>${number}. ${country['country']}</span>
                        <span></span>
                    </div>
                    <div class="store-phone-number">
                        
                    </div>
                </div>

                <div class="store-number-container">
                    <div class="store-number">
                    <img src="${country['countryInfo']['flag']}" width="20px" height="20px"/>
                    </div>
                </div>
            </div>
        `
         document.querySelector('.stores-list').innerHTML = storesHtml; //combine this to store-list to show the data for loop
        
    }
}

function showCovidMarkers(newDataForCovidCaces) {
   // var bounds = new google.maps.LatLngBounds();
  for(var [index, dataCases] of DataForCovidCaces.entries()){
        var latlng = new google.maps.LatLng(
            dataCases['countryInfo']['lat'],
            dataCases['countryInfo']['long']);

        var lastUpdated = new Date(dataCases['updated']).toLocaleDateString("vn")
        var country     = dataCases.country; //same format how call oject data 
        var cases       = dataCases.cases;
        var deaths      = dataCases['deaths']
        var recovered   = dataCases['recovered']// this call using object literals use by arry bracket in js
        var id          = dataCases['countryInfo']['_id'] // they almost d same declaration of calling it's droperty
        var flagCountry = dataCases['countryInfo'].flag
        var iso2        = dataCases['countryInfo']['iso2']
        var todayCases  = dataCases['todayCases'];
       // bounds.extend(latlng);
        createCovidMarker(latlng, lastUpdated, country, cases, deaths, recovered,todayCases, id, iso2, flagCountry)
    }
//map.fitBounds(bounds);
}

function createCovidMarker(latlng, lastUpdated, country, cases, deaths, recovered, todayCases, id, iso2, flagCountry) {

    let html = `
        <div class="country-info-window">
            <div class="flags-country"><img src="${flagCountry}"/></div>

            <div class="country-info-name">${country}</div>

            <div class="country-last-updated">
                <span>last updated: </span>${lastUpdated}
            </div>

            <div class="data-info-total total">
            <div class="circle icon-total"><i class="fas fa-head-side-mask"></i></div>
                 Total Cases: ${cases}
            </div>

            <div class="data-info-today">
            <div class="circle icon-today"><i class="fas fa-calendar-day"></i></div>
                    Today Cases: ${todayCases}
            </div>
            <div class="data-info-recovered recovered">
            <div class="circle"><i class="fas fa-ambulance"></i></div>
                Recovered: ${recovered}
            </div>
            <div class="data-info-death death">
                 <div class="circle"><i class="fas fa-dizzy"></i></div>
                 Deaths: ${deaths}
             </div>
        </div>
    `


    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        icon:{
            url: 'image/corona1.png',
            scaledSize: new google.maps.Size(80, 80)
        } 
    });
    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
        

    });
    markers.push(marker); // this value is for global declaration its is inialize  avobe before the starting window.load
}


function searchCountry() {
    let countryNammeInput = document.getElementById("country-name-input").value; // value from the use input form inputs form from html file
                                                                                // also has a addListener above the window.load
    console.log('Country Name Input: ' + countryNammeInput);

    let oldIndex = []
    let countriesResult = DataForCovidCaces.filter((one, index) => {

        if (one['country'].toLowerCase().includes(countryNammeInput.toLowerCase())) {
            oldIndex.push(index);
            return true;
        }
    })
    countriesResult.map((one, index) => {
        one['index'] = oldIndex[index];
    })

    console.log(countriesResult); //to check id data is show
    clearLocation();  // this for clear the marker in the map using the index markers 
    displayCountriesName(countriesResult);
    showCovidMarkers(countriesResult);
    setOnClickListener(); // set in click when you click the data in box list will apper the data in the marker window Info's

}
function setOnClickListener(){
  var storeElements = document.querySelectorAll('.store-container');
    storeElements.forEach( function(elem, index){
    elem.addEventListener('click', function() {
       new google.maps.event.trigger(markers[index], 'click');
        })
    })
}
function clearLocation(){
  infoWindow.close();
  for(var i = 0; i < markers.length; i++){
    markers[i].setMap(null);
  }
  markers.length = 0
}
