// self.addEventListener('install', (event) => {
//   console.log('Service Worker installed');
// });

// self.addEventListener('activate', (event) => {
//   console.log('Service Worker activated');
// });

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        'index.html',
        '/icons/cd/icon-small.png',
        '/icons/cd/icon-large.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});