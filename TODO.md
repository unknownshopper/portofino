# Pendientes PORTOFINO

## Bloqueado — esperando externos

- [ ] **Eduardo: subir fotos reales a `Productos/`** — la estructura ya está armada (10 rubros × PRODUCTO 01/02/03). El sync nocturno (`.github/workflows/sync-productos.yml` con secret `DROPBOX_URL`) procesa solo: baja el zip, genera WebP y desplaza muestras orgánicamente por rubro
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

- [ ] **Confirmar códigos de Business Manager** (mañana): Meta mandó código de 6 dígitos a `ventas@portofino.com.mx` (correo) y otro por WhatsApp al `993 302 3903` — caducan en 60 min, si expiran dar "Reenviar código". Requiere acceso al buzón de ventas@ y al celular de ventas
- [ ] **Asociar WhatsApp Business 993 302 3903 a la bandeja de Business Suite** (Mensajes → WhatsApp → Empezar; tener el cel a la mano para el código de verificación)
- [ ] **Eduardo: TXT de verificación de dominio en GoDaddy** — meta tag falló (crawler de Meta); método correcto = TXT. En DNS de `portofino.com.mx` agregar: tipo **TXT**, host `@`, valor `facebook-domain-verification=63tzrb6sfo543gfu4h28mqqgfa42u4n` (confirmar el valor exacto en Business Manager → Seguridad de marca → Dominios → opción TXT — es el mismo código de la metaetiqueta). NO tocar A/CNAME/MX. Luego clic en "Verificar dominio"
- [ ] **Google Search Console**: verificar propiedad, enviar `sitemap.xml`, revisar cobertura de indexación
- [ ] Revisión responsive final (carousel materiales, catálogo, panel de cotización en móvil)
- [ ] Pixel: re-verificar eventos en Events Manager tras el dominio nuevo

## Ya resuelto

- [x] **Dominio `portofino.com.mx` en producción** — DNS (A + CNAME www) → GitHub Pages, certificado Let's Encrypt emitido (apex + www), Enforce HTTPS activado por API, `og:url`/`og:image` migrados a portofino.com.mx
- [x] **WhatsApp único de ventas 993 302 3903** — ícono central en contacto, promociones, chat, modal y aviso migrados; automatizaciones Meta actualizadas al mismo número
- [x] `firestore.rules` endurecidas publicadas — verificado: create público OK, lectura sin login = 403
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
