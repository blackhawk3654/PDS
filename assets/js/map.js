var map = L.map('map').setView([45.4991,9.1328], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoibWlrZWJvc3MwOSIsImEiOiJja3k5MnY3ZTcwMmRnMm5venVoNGV3eWpnIn0.VfOQncIfXuXYcECkzcAVNQ'
}).addTo(map);



//user1 Maria
var circle = L.circle([45.4991, 9.1328], {
color: 'red',
fillColor: '#f03',
fillOpacity: 0.5,
radius: 400
}).addTo(map);

circle.bindPopup("<b>Maria -60€</b><br>3422133228.");

//Moris
var marker1 = L.marker([45.4956,9.1170]).addTo(map);
marker1.bindPopup("<b>Moris -50€</b><br>3980982335").openPopup();


//Brasile
/* var marker2 = L.marker([45.51473,9.07923]).addTo(map);
marker2.bindPopup("<b>Bra -50€</b><br>3332190528").openPopup(); */

//Loris
var marker3 = L.marker([45.49405,9.14248]).addTo(map);
marker3.bindPopup("<b>Lori -50€</b><br>3468548605").openPopup();


//Ariana
var marker4 = L.marker([45.52486,9.20690]).addTo(map);
marker4.bindPopup("<b>Ariana -50€</b><br>3534276639").openPopup();
