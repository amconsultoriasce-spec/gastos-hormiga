self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('am-gastos').then(cache => {
      return cache.addAll(['./']);
    })
  );
});
