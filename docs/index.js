(function IFEE(window) {
  'use strict';

  function bounceMarker() {
    this.bounce(3);
  }

  function initOverMarkers(L, map, bouncingOptions) {
    var i;
    var lat;
    var lng;

    for (i = 0; i < 100; i++) {
      lat = (Math.random() / 50) + 48.48;
      lng = (Math.random() / 50) + 1.38;
      L.marker([lat, lng], { intentDuration: 600 })
        .setBouncingOptions(bouncingOptions)
        .addTo(map)
        .on('mouseintent', bounceMarker);
    }
  }

  function initIntentMarkers(L, map, bouncingOptions) {
    var i;
    var lat;
    var lng;

    for (i = 0; i < 100; i++) {
      lat = (Math.random() / 50) + 48.48;
      lng = (Math.random() / 50) + 1.32;
      L.marker([lat, lng])
        .setBouncingOptions(bouncingOptions)
        .addTo(map)
        .on('mouseover', bounceMarker);
    }
  }

  function initMap() {
    var L = window.L;
    var bouncingOptions = {
      bounceHeight: 60,
      bounceSpeed: 54,
      elastic: false
    };
    var map = L.map('map')
      .setView([48.49, 1.36], 14)
      .fitBounds([
        [48.49, 1.40],
        [48.48, 1.32]
      ]);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    initOverMarkers(L, map, bouncingOptions);
    initIntentMarkers(L, map, bouncingOptions);
  }

  window.addEventListener('load', initMap);
}(window));
