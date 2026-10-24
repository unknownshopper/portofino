# Pendientes PORTOFINO

## Bloqueado — esperando externos

- [ ] **Eduardo: subir fotos reales a `Productos/`** — la estructura ya está armada (10 rubros × PRODUCTO 01/02/03). El sync nocturno (`.github/workflows/sync-productos.yml` con secret `DROPBOX_URL`) procesa solo: baja el zip, genera WebP y desplaza muestras orgánicamente por rubro
- [ ] **Dominio `portofino.com.mx` → GitHub Pages** (lunes): DNS `@` → A records `185.199.108-111.153` + `www` → CNAME `unknownshopper.github.io`; luego Custom domain en Settings → Pages + Enforce HTTPS. Opción mejor: Cloudflare enfrente (resuelve el caché de 10 min de Pages). Al activar: cambiar `og:url` de github.io a portofino.com.mx y verificar con `dig +short portofino.com.mx`
- [ ] **Fusión de páginas FB** — falta control total en ambas (hoy solo admin). Conservar `Portofino Granitos y Mármoles`, absorber `portofinoveracruz`. Al tener el handle final: actualizar link en CTA contacto + tarjeta Veracruz + `sameAs` del JSON-LD
- [ ] **Google Business Profile** — ya existe ficha "PORTOFINO - Mármoles y Granitos" (matriz, 5.0★, sin dueño). Esperar autorización/acceso a cuenta corporativa de Portofino para reclamarla — NO con cuenta personal. Luego: subir fotos nuevas (las actuales dicen "Stonia"), agregar sitio web, y crear fichas de Sabina, Veracruz y Tuxtla
- [ ] **Alertas al recibir cotización** — hoy el lead solo llega al panel admin; falta aviso a la oficina. Opciones: Cloud Function (requiere plan Blaze/tarjeta), extensión "Trigger Email" de Firebase, o webhook Make/Zapier gratis → correo a `ventas@portofino.com.mx`. Decidir ruta con Eduardo
- [ ] **Firebase App Check** (reCAPTCHA) — blindaje anti-spam real del cotizador. Hacer junto con el dominio
- [ ] **Reunión Stone Profit Systems (ERP)** — qué módulos tienen, si hay export de inventario → el catálogo podría mostrar existencia real de losas

## Para preguntar a Eduardo

- [ ] **RFC / razón social** para el aviso de privacidad
- [ ] ¿Precio por m² público en el catálogo o siempre "a cotización"? (hoy: sin precio público)
- [ ] Dirección física de Tuxtla Gutiérrez (hoy solo ciudad + tel 961 217 5504)

## Por hacer (técnico, sin bloqueo)

- [ ] Publicar `firestore.rules` endurecidas en consola (Firestore → Reglas → pegar → Publicar) — ya escritas en el repo
- [ ] Verificación de dominio en Business Manager → meta tag o TXT en DNS (cuando el dominio apunte al sitio)
- [ ] Revisión responsive final (carousel materiales, catálogo, panel de cotización en móvil)
- [ ] Pixel: re-verificar eventos en Events Manager tras el dominio nuevo

## Ya resuelto

- [x] Sucursales reales: Villahermosa matriz, Villahermosa Sabina, Veracruz y Tuxtla — visibles + en contexto del chat IA
- [x] Automatizaciones Meta Business Suite (FB + IG): respuesta instantánea, mensaje de ausencia, 4 FAQs, comentario→DM, palabras clave ×3 — todo embala a cotizador/WhatsApp
- [x] Cotizador → Firestore + admin autenticado (filtros por estado, eliminar, badge instalación, XSS tapado)
- [x] Gemini híbrido en el chat (key `portoai` en `fb.js`, modelo 3-flash + respaldo lite; intents curados primero)
- [x] `pubfb.html`: 3 modos de publicación (día / producto con variantes / promoción) + Ollama local
- [x] SEO estructural: `robots.txt`, `sitemap.xml`, canonical y JSON-LD LocalBusiness con las 4 sucursales
- [x] Imágenes optimizadas: muestras WebP, hero responsive con `fetchpriority`, logo reducido, builder genera WebP
- [x] Sync nocturno: solo commitea cuando el catálogo cambia de verdad
- [x] Meta Pixel `1124678623449829` — PageView + Lead conectados (`meta-pixel.js`)
- [x] Secret `DROPBOX_URL` + workflow Actions funcionando
- [x] Correo `ventas@portofino.com.mx` en cotizador, contacto y aviso
- [x] Repo + GitHub Pages activos en `unknownshopper.github.io/portofino`
- [x] `galeria.html` retirada — `catalogo.html` la sustituye
