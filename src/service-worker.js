
workbox.core.setCacheNameDetails({prefix: "www.mybrokensite.com"});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener("fetch", function fetchEvent(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function searchCache(response) {
        if (response) {
          return response
        } else {
          return fetch(event.request)
            .then (function fetchResponse(response) {
              return caches.open("www.mybrokensite.com")
                .then (function cacheResponse(cache) {
                  cache.put(event.request.url, response.clone())
                  return response
                })
            })
        }
      })
  )
})

