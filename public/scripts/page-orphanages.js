const map = L.map('mapid').setView([-1.4557859,-48.4774922], 15);

// Create TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

// Create Icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// Create Popup Overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Orfanato <a href="orphanages.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" > </a>');

// Create and add Marker
L.marker([-1.4557859,-48.4774922], { icon })
    .addTo(map)
    .bindPopup(popup)