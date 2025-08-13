const CACHE_NAME = 'panel-logistica-v1';
const FILES_TO_CACHE = [
  './index.html',
  './manifest.json',
  './style.css',
  './main.js',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});