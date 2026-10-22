Leaflet.OverIntent
==================

Aiming is neater than clicking !

This plugins adds a new event ``mouseintent``, that differs from ``mouseover`` since
it reflects user intentions to aim a particular layer.

Observe the difference with the [online demo](http://makinacorpus.github.io/Leaflet.OverIntent/).


Usage
-----

```javascript

    var marker = L.marker([lat, lng]).addTo(map);

    marker.on('mouseintent', function (e) {
        // User meant it !
    });
```

( *works with markers and vectorial layers* )

**Options**

* ``intentDuration`` : default is 300ms (See demo.)


Changelog
---------

### 1.0.1

* Allow Leaflet 1.x (peer dependency `leaflet >=0.7 <2`)

### 1.0.0

* Initial version


Authors
-------

[![Makina Corpus](http://depot.makina-corpus.org/public/logo.gif)](http://makinacorpus.com)
