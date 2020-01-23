
var CACHE = 'mercadosefectivos';
const staticAssets = [
  './',
  './manifest.json',
  './index.html',
   './sw.js',
   './index.js',
   './css/btn.css',
   './css/style.css',
   './js/main.js',
   './lib/axios.min.js',
   './lib/funciones.js',
   './lib/sweetalert.min.js'
];

self.addEventListener('install', function(evt) {
  //console.log('Service worker instalado');
  evt.waitUntil(caches.open(CACHE).then(function (cache) {
    cache.addAll(staticAssets);
  }));
});

self.addEventListener('fetch', function(evt) {
/*
  var req = evt.request.clone();
  
    if (req.clone().method == "GET") {
      evt.respondWith(fromCache(evt.request));
      evt.waitUntil(update(evt.request));
    }
  /*
    if (req.clone().method == "GET") {
      evt.respondWith(fromCache(evt.request));
      //evt.waitUntil(update(evt.request));
    }
  */
  
});



function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request);
  });
}

async function update(request) {
  return caches.open(CACHE).then(function (cache) {
    return fetch(request)
        .then(function (response) {
          return cache.put(request, response.clone())
                      .then(function () {
                        //console.log('Cache actualizado');
          return response;
      });
    });
  });
}
    

