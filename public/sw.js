const CACHE_NAME = "quiz_app";

const urlToCache = ["index.html",'offline.html','/static/js/bundle.js', '/static/js/0.chunk.js', '/static/js/main.chunk.js',"https://opentdb.com/api_category.php", '/'];

const self = this;

// install sw

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("opened caches");
        return cache.addAll(urlToCache);
      })
      .catch((error) => {
        console.log("error");
      })
  );
});

// fetch sw

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(() => {
      return fetch(e.request).catch(() => caches.match("offline.html"));
    })
  );
});

// activate sw

self.addEventListener("activate", (e) => {
  const cacheWhitList = [];
  cacheWhitList.push(CACHE_NAME);

  e.waitUntil(
    caches.keys().then((cacheName) =>
      promise.all(
        cacheName.map((cacheName) => {
          if (!cacheWhitList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});



