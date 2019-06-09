const CACHE_NAME = "static-cache-v1"

const FILES_TO_CACHE = ["/offline.html"]

self.addEventListener("install", evt => {
  console.log("[ServiceWorker] Install")
  //缓存offline.html
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      //waitUntil作用于该promise
      return cache.addAll(FILES_TO_CACHE)
    })
  )
  //跳过等待直接进入activate
  self.skipWaiting()
})

self.addEventListener("activate", evt => {
  console.log("[ServiceWorker] Activate")
  //清理旧版本的cache
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache", key)
            return caches.delete(key)
          }
        })
      )
    })
  )
  self.clients.claim()
})

self.addEventListener("fetch", evt => {
  if (evt.request.mode !== "navigate") {
    return
  }

  evt.respondWith(
    fetch(evt.request).catch(() =>
      caches.open(CACHE_NAME).then(cache => cache.match("/offline.html"))
    )
  )
})
