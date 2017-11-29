
// self.addEventListener("install", (event) => {
//     event.waitUntil(
//         caches.open("johncache").then(function(cache) {
//           return cache.addAll(
//             [
//               '/demo1.html'
//             ]
//           );
//         })
//     );
// }); 

self.addEventListener("push", function(event){
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
  
    const title = 'Push Codelab';
    const options = {
      body: 'Yay it works.',
      icon: 'images/icon.png',
      badge: 'images/badge.png'
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
});

// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//       caches.open('johncache').then(function(cache) {
//           console.log('check to see if request is in cache: ', event.request);
//         return cache.match(event.request).then(function (response) {
//           return response || fetch(event.request).then(function(response) {
//               console.log('storing request in cache', event.request);
//             cache.put(event.request, response.clone());
//             return response;
//           });
//         });
//       })
//     );
//   });