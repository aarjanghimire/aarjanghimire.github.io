//map
var map = L.map('map').setView([27.6880308,85.3258103], 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var meroGhar = L.marker([27.746373567269192, 85.32384350152827]).addTo(map);
var suprantGhar = L.marker([27.7076263, 85.2802412]).addTo(map);
var ashmaGhar = L.marker([27.657970, 85.332119]).addTo(map);

var meroCollege = L.polygon([
  [27.69353495363323, 85.31879410670189],
  [27.693836068865586, 85.31805696040709],
  [27.69586738413602, 85.3188119835573],
  [27.69462275022162, 85.31966305310628]
]).addTo(map);

var whereItapped = L.popup();
var whereIlive = L.popup();

function clikity() {
  meroGhar.bindPopup("I Stay Here").openPopup();
}

function onMapClick(e) {
  whereItapped.setLatLng(e.latlng).setContent("You tapped at " + e.latlng.toString()).openOn(map);
}

map.on('click', onMapClick)




//mode switch
var toggle = document.getElementById("toggle");

toggle.onchange = function() {
    if (toggle.checked) {
      //bodyfont
      document.documentElement.style.setProperty('--color-body', '#b6cbce');
      //heading
      document.documentElement.style.setProperty('--color-heading', '#bbbbbb');
      //base1
      document.documentElement.style.setProperty('--color-base', '#2B362A');
      //base2
      document.documentElement.style.setProperty('--color-base2', '#223D31');
      //brand1
      document.documentElement.style.setProperty('--color-brand', '#58E9F0');
      //brand2
      document.documentElement.style.setProperty('--color-brand2', '#4FF8A2');
      //brand3
      document.documentElement.style.setProperty('--color-brand3', '#45ABD9');
      //white
      document.documentElement.style.setProperty('--color-white', '#F8E47F');
      //grad1
      document.documentElement.style.setProperty('--color-gard1', '#582201b0');
      //grad2
      document.documentElement.style.setProperty('--color-grad2', '#080503a6');

    } else {
      //bodyfont
      document.documentElement.style.setProperty('--color-body', '#b6cbce');
      //heading
      document.documentElement.style.setProperty('--color-heading', '#eef3db');
      //base1
      document.documentElement.style.setProperty('--color-base', '#F08A46');
      //base2
      document.documentElement.style.setProperty('--color-base2', '#A36337');
      //brand1
      document.documentElement.style.setProperty('--color-brand', '#e0f780');
      //brand2
      document.documentElement.style.setProperty('--color-brand2', '#deff58');
      //brand3
      document.documentElement.style.setProperty('--color-brand3', '#878b77');
      //white
      document.documentElement.style.setProperty('--color-white', '#fff');
      //grad1
      document.documentElement.style.setProperty('--color-gard1', '#6d462db0');
      //grad2
      document.documentElement.style.setProperty('--color-grad2', '#724222a6');
    }
};

AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});