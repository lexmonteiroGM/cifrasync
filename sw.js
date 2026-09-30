// CifraSync Service Worker
// Versão: incrementar isso a cada novo deploy para forçar atualização
const CACHE_VERSION = "cifrasync-v1";
const APP_SHELL = ["./", "./index.html"];

// Instala: pré-cacheia o HTML
self.addEventListener("install", (event) => {
  console.log("[SW] Install", CACHE_VERSION);
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

// Ativa: limpa caches antigos
self.addEventListener("activate", (event) => {
  console.log("[SW] Activate", CACHE_VERSION);
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch: estratégia network-first para HTML, cache-first para o resto
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Só intercepta mesma origem (ignora CDN externo, se houver)
  if (url.origin !== self.location.origin) return;

  // Ignora requisições não-GET (POST, etc.)
  if (req.method !== "GET") return;

  const isHTML =
    req.mode === "navigate" ||
    url.pathname === "/" ||
    url.pathname.endsWith("/") ||
    url.pathname.endsWith(".html");

  if (isHTML) {
    // Network-first: tenta rede, se falhar usa cache
    event.respondWith(
      fetch(req)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(req, clone));
          return response;
        })
        .catch(() =>
          caches.match(req).then((cached) => cached || caches.match("./index.html"))
        )
    );
    return;
  }

  // Outros assets: cache-first
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((response) => {
        if (!response || response.status !== 200) return response;
        const clone = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(req, clone));
        return response;
      });
    })
  );
});

// Permite que a página pergunte "força atualização"
self.addEventListener("message", (event) => {
  if (event.data === "skipWaiting") self.skipWaiting();
});