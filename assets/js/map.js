var map = L.map('map').setView([45.4991,9.1328], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoibWlrZWJvc3MwOSIsImEiOiJja3k5MnY3ZTcwMmRnMm5venVoNGV3eWpnIn0.VfOQncIfXuXYcECkzcAVNQ'
}).addTo(map);


/* 

var circle = L.circle([45.48756, 9.18524], {
color: 'red',
fillColor: '#f03',
fillOpacity: 0.5,
radius: 500
}).addTo(map);

circle.bindPopup("<b>Gaia</b><br>3939319999.");
 */
var marker1 = L.marker([45.48756,9.18524]).addTo(map);
marker1.bindPopup("<b>Shanghai</b><br>3939319999").openPopup();

//delivery

 var polygon = L.polygon([
[45.5288,9.0396],
[45.4228,9.0643],
[45.3785,9.1655],
[45.4180,9.2701],
[45.4908,9.2934],
[45.5593,9.2089]
]).addTo(map);
 
/* var polygon = L.polygon([
    [45.5119, 9.0850],
    [45.5336, 9.0690],
    [45.5285, 9.0867],
    [45.5192, 9.1431],
    [45.4928, 9.1456],
    [45.4851, 9.1303],
    [45.4903, 9.1008]
]).addTo(map); */

//polygon.bindPopup("We deliver in this area");

/* 
var marker1 = L.marker([45.49534,9.12429]).addTo(map);
marker1.bindPopup("<b>Carrefour</b><br>7h-21:30").openPopup();


var marker2 = L.marker([45.50325,9.12718]).addTo(map);
marker2.bindPopup("<b>Conad</b><br>8h-19:00").openPopup();


var marker3 = L.marker([45.4968,9.1132]).addTo(map);
marker3.bindPopup("<b>Coop</b><br>8:30-19:00").openPopup();



var marker4 = L.marker([45.50219,9.11467]).addTo(map);
marker4.bindPopup("<b>Lidl</b><br>8:00-20:00").openPopup();


var marker5 = L.marker([45.50030,9.13083]).addTo(map);
marker5.bindPopup("<b>Burger king</b><br>11:00-21:00").openPopup();

var marker6 = L.marker([45.49601,9.13903]).addTo(map);
marker6.bindPopup("<b>Mcdonalds</b><br>8:00-23:30").openPopup();
 */