const CACHE_NAME = "elegance-cache-v1"
const urlsToCache = [
  "/",
  "/offline",
  "/manifest.json",
  "/icon-192x192.png",
  "/icon-512x512.png",
  // Add other static assets you want to cache
]

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache")
      return cache.addAll(urlsToCache)
    }),
  )
})

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response
      }
      // No cache hit - fetch from network
      return fetch(event.request).catch(() => {
        // If network fails, serve offline page for navigation requests
        if (event.request.mode === "navigate") {
          return caches.match("/offline")
        }
        // For other requests (e.g., images, scripts), return a generic offline response or error
        return new Response("Network is unavailable.", { status: 503, statusText: "Service Unavailable" })
      })
    }),
  )
})

// Activate event
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Push event for notifications
self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : { title: "Élégance Algérienne", body: "Nouveau message!" }

  const options = {
    body: data.body,
    icon: data.icon || "/icon-192x192.png",
    badge: data.badge || "/icon-192x192.png",
    data: {
      url: data.url || "/", // URL to open when notification is clicked
    },
  }

  event.waitUntil(self.registration.showNotification(data.title, options))
})

// Notification click event
self.addEventListener("notificationclick", (event) => {
  event.notification.close()
  event.waitUntil(clients.openWindow(event.notification.data.url))
})
