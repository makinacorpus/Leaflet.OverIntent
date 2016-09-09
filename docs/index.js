(function (window) {
    'use strict';

    function initMap() {
        var L = window.L;
        var map = L.map('map')
          .setView([48.49, 1.36], 14)
          .fitBounds([
            [48.49, 1.40],
            [48.48, 1.32]
          ]);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


        for (var i=0; i<100; i++) {
          var lat = Math.random()/50 + 48.48
            , lng = Math.random()/50 + 1.38;
          L.marker([lat, lng], {intentDuration: 600})
            .setBouncingOptions({
                bounceHeight : 60,
                bounceSpeed  : 54,
                elastic: false
            })
          .addTo(map)
          .on('mouseintent', function () { this.bounce(3) ; });
        }


        for (var i=0; i<100; i++) {
          var lat = Math.random()/50 + 48.48
            , lng = Math.random()/50 + 1.32;
          L.marker([lat, lng])
            .setBouncingOptions({
                bounceHeight : 60,
                bounceSpeed  : 54,
                elastic: false
            })
          .addTo(map)
          .on('mouseover', function () { this.bounce(3) ; });
        }
    }

    window.addEventListener('load', function () {
        initMap();
    });
}(window));
