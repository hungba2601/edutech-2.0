const CACHE_NAME = 'edutech-pwa-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.svg'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // Kích hoạt ngay lập tức SW mới
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  // Xóa các cache cũ
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Nắm quyền điều khiển các trang ngay lập tức
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    // Chiến lược Network First: Luôn ưu tiên lấy dữ liệu từ server trước
    fetch(event.request)
      .then(response => {
        // Nếu tải thành công, lưu bản sao vào cache để dùng khi offline
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // Nếu mất mạng (fetch lỗi), lấy dữ liệu từ cache ra dùng
        return caches.match(event.request);
      })
  );
});
