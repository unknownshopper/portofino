# Pendientes PORTOFINO

## Reunión con Gladys — 28-oct (WhatsApp hecho; lo demás sigue pendiente)

- [x] **WhatsApp 993 302 3903 VINCULADO a la bandeja de Business Suite (28-oct, con Gladys)** — sincronizando contactos e historial. Pendiente: revisar si WhatsApp aparece como canal en Automatizaciones; configurar en la app bienvenida/ausencia/respuestas rápidas/catálogo. Historial (referencia): 27-oct falló el intento remoto: se le mandó captura del QR, aceptó "Compartir todos los chats" pero "No se pudo escanear el código" (el QR caduca en minutos, es de un solo uso y lo leyó desde foto/galería). Mañana en persona:
  1. Gladys actualiza WhatsApp Business en App Store **antes** de empezar
  2. Business Suite → Mensajes → WhatsApp → Empezar → "Comparte tus contactos y chats" (QR)
  3. En su cel: Configuración → Cuenta → **Plataforma para empresas** → Escanear código QR → apuntar la cámara **directo a la pantalla** (no captura). Si tarda: "Volver" y reentrar para QR nuevo
  4. "Compartir todos los chats" (hasta 6 meses de historial) → Confirmar
  - Es el modo en que la app del cel sigue funcionando y ambos ven los chats. Si Meta dice que el número se quitará de la app → CANCELAR
  - Después: revisar en Automatizaciones si WhatsApp aparece como canal; configurar en la app bienvenida / ausencia / respuestas rápidas / catálogo
- [ ] **Instagram "Confirmar acceso"** en la bandeja — pedir a Gladys la contraseña/login de `@portofino.granitosymarmoles` si Meta la pide
- [ ] **2FA del portfolio** (hoy "Nadie") → subir a "Solicitar a administradores"; avisar a Gladys que al entrar con ventas@ le pedirá código
- [ ] **Google Maps**: preguntar si identificaron `vi...@gmail.com`. Ojo: `portofino.com.mx` usa Google Workspace (SPF `_spf.google.com`) → **`ventas@portofino.com.mx` ya es cuenta Google corporativa**: usarla como propietaria de la ficha
- [ ] **Perfil personal "Portofino Vhsa"** (antes `facebook.com/yamile.cejin`, 28-oct se le cambió usuario y nombre) — convertido en cuenta de apoyo que redirige a la fanpage. Confirmar con Gladys de quién es y si es admin de la página/portfolio; asegurar que la fanpage tenga otro admin con perfil personal real (respaldo). Privacidad → solicitudes de amistad → "Amigos de amigos"
- [ ] **Horario real de atención** por día (matriz, Sabina, Veracruz, Tuxtla) → confirmar el de la página FB y llevarlo a JSON-LD (`openingHours`), chatbot y Google Maps (dice "cierra 5:30 a.m.")
- [ ] Denominación/razón social, dirección de Tuxtla y precios públicos (ver "Para preguntar a Eduardo") — aprovechar si Gladys sabe

## Messenger / Instagram — automatizaciones (27-oct)

- [x] **Número viejo 993 393 9163** corregido en la respuesta de envíos y en las FAQs (había muchas con el viejo) → todas a `https://wa.me/529933023903` (sin `?fbclid=`)
- [x] **Palabras clave "Catálogo"** (2 automatizaciones por el límite de 5 palabras): `catálogo · productos · fotos · muestra · materiales` y `catalogo · catálogos · catalogos · modelos · muestras` → mensaje + botón "Ver catálogo" a `catalogo.html`
- [x] Las 2 de catálogo ACTIVADAS ("Catalogo" + "catálogo2") y probadas con éxito (27-oct)
- [ ] **Palabra clave envíos**: agregar variantes `envío · envio · envíos · envios · flete` (límite 5; si faltan `envían/mandan`, segunda automatización). "envios" sin acento no disparó nada
- [ ] **Re-probar** "¿Cuánto cuesta?", "envios", "¿tienen catalogo?" y cada FAQ en Messenger + IG. **Ojo: Meta solo dispara palabras clave si el chat lleva ≥15 min inactivo** → esperar 15 min entre pruebas o usar otra cuenta. Debe llegar UNA respuesta con 993 302 3903
- [x] Tarjeta **Horario** activada (27-oct). No guardaba porque había OTRA automatización "horario" que chocaba; se resolvió quitando el duplicado. Regla: una sola automatización por tema
- [ ] Probar "¿qué horario tienen?" (tras 15+ min inactivo) y confirmar que la respuesta muestre los días/horas reales, no solo el link
- [ ] Tarjeta **Información de contacto**: activar con 993 302 3903 + ventas@ (NO activar tarjeta Ubicación: ya hay palabra clave)
- [ ] Captions viejos en `redsoc/imgs/20261012-*/caption.txt` traen 993 393 9163 — si esos posts siguen publicados, editar el texto en FB/IG
- [x] JSON-LD `areaServed` con las 10 ciudades del área de servicio de la página FB + México

## Bloqueado — esperando externos

- [ ] **Eduardo: subir fotos reales a `Productos/`** — 28-oct: YA hay reales en **CUARCITAS (16 productos, 38 fotos; falta foto de MARE BIANCO)** y **SINTERIZADOS (22, 45 fotos)**, publicadas por el sync de las 8:56 am. Siguen vacías (con muestras de relleno): CUARZOS, DEKTON, GRANITOS, MÁRMOLES, SELLADORES (carpetas PRODUCTO 01/02/03); ECLOS, TARJAS y TRAVERTINO también con relleno. La estructura ya está armada (10 rubros × PRODUCTO 01/02/03). El sync nocturno (`.github/workflows/sync-productos.yml` con secret `DROPBOX_URL`) procesa solo: baja el zip, genera WebP y desplaza muestras orgánicamente por rubro
- [ ] **Fusión de páginas FB** — página principal = `facebook.com/portofinogranitosymarmoles` (28-oct: ya en CTA contacto + sameAs; tarjeta Veracruz sigue a portofinoveracruz hasta fusionar). falta control total en ambas (hoy solo admin). Conservar `Portofino Granitos y Mármoles`, absorber `portofinoveracruz`. Al tener el handle final: actualizar link en CTA contacto + tarjeta Veracruz + `sameAs` del JSON-LD
- [ ] **Google Business Profile** — ya existe ficha "PORTOFINO - Mármoles y Granitos" (matriz, 5.0★). **Sí tiene dueño: `vi...@gmail.com`** (27-oct, Eduardo preguntando a Gladys quién es). Si alguien de Portofino la controla → que agregue la cuenta corporativa como propietario y a nosotros como admin. Si no → "Solicitar acceso" desde cuenta corporativa (el dueño tiene unos días para responder; si no contesta, Google suele habilitar reclamarla). NO con cuenta personal. Horario en ficha dice "cierra 5:30 a.m." — corregir. Luego: subir fotos nuevas (las actuales dicen "Stonia"), agregar sitio web, y crear fichas de Sabina, Veracruz y Tuxtla
- [ ] **Alertas al recibir cotización** — hoy el lead solo llega al panel admin; falta aviso a la oficina. Opciones: Cloud Function (requiere plan Blaze/tarjeta), extensión "Trigger Email" de Firebase, o webhook Make/Zapier gratis → correo a `ventas@portofino.com.mx`. Decidir ruta con Eduardo
- [ ] **Firebase App Check** (reCAPTCHA) — blindaje anti-spam real del cotizador. Hacer junto con el dominio
- [ ] **Reunión Stone Profit Systems (ERP)** — qué módulos tienen, si hay export de inventario → el catálogo podría mostrar existencia real de losas

## Para preguntar a Eduardo

- [ ] **Denominación/razón social** para el aviso de privacidad (solo el nombre legal — la LFPDPPP pide identidad del responsable, no el RFC; el RFC se omite por decisión de Portofino)
- [ ] ¿Precio por m² público en el catálogo o siempre "a cotización"? (hoy: sin precio público)
- [ ] Dirección física de Tuxtla Gutiérrez (hoy solo ciudad + tel 961 217 5504)

## Por hacer (técnico, sin bloqueo)

- [ ] **pubfb: nuevo estilo de imágenes (EN LOCAL, sin subir)** — pedido del cliente: texto mínimo (nombre/rubro chicos arriba-izq.) y logo completo blanco abajo-centrado (ref. granito con logo blanco); modo producto con logo tinta abajo-centrado. Revisar vista previa y subir
- [ ] **Logo del menú se empalma con títulos en móvil** (nav fija sin fondo) → dar fondo al nav al aparecer el logo o esconderlo en móvil. Decidir con Alberto
- [ ] **Medición/instalación**: plantilla promo dice "incluidas", chatbot dice "por cuenta del contratista" → confirmar con Portofino y unificar
- [ ] Perfil de apoyo FB tiene `ventas@stonia.mx` como correo → si Stonia ya no tiene relación, quitarlo (puede recuperar la cuenta). Verificar que el perfil "Ventas Portofino" conserve método de recuperación tras mover el 993 302 3903

- [ ] **Google Search Console**: el DNS ya tiene un TXT `google-site-verification=KfpF8…` → alguien ya verificó el dominio; averiguar con qué cuenta (probable Workspace de Portofino) y pedir acceso en vez de re-verificar. Luego: enviar `sitemap.xml`, revisar cobertura de indexación
- [ ] Revisión responsive final (carousel materiales, catálogo, panel de cotización en móvil)
- [ ] Pixel: re-verificar eventos en Events Manager tras el dominio nuevo (dominio ya verificado en Meta → desbloqueado; configurar eventos agregados si lo pide)
- [ ] **Fase 2: bot IA (Gemini) en WhatsApp** — requiere Cloud API; evaluar tras vincular la app (coexistencia), no antes

## Ya resuelto

- [x] **Centro de seguridad Meta (27-oct)**: dominio de confianza agregado + passkey en Ventas Portofino (guardada en Administrador de contraseñas de Google/Chrome; la contraseña normal sigue vigente para Gladys). **NO eliminar "UnclaimedBusinessUser FromPool"** (@portofino.granitosymarmoles): es el usuario-placeholder del login de Instagram y el admin alternativo; si la alerta de passkey persiste por él, ignorarla. 2FA → pendiente en reunión con Gladys
- [x] **Dominio `portofino.com.mx` verificado en Meta** (27-oct) — la falla era una `q` de más en el código de la metaetiqueta. Hoy quedan 2 métodos activos: metaetiqueta en `index.html` + archivo `63tzrb6sfo543gfu4h28mqgfa42u4n.html` en raíz. **NO borrar ninguno** (Meta re-verifica periódicamente). Ya no se necesita el TXT en GoDaddy
- [x] **Business Manager: correo `ventas@portofino.com.mx` y WhatsApp Business 993 302 3903 verificados** (27-oct, códigos confirmados con Portofino)
- [x] **Dominio `portofino.com.mx` en producción** — DNS (A + CNAME www) → GitHub Pages, certificado Let's Encrypt emitido (apex + www), Enforce HTTPS activado por API, `og:url`/`og:image` migrados a portofino.com.mx
- [x] **WhatsApp único de ventas 993 302 3903** — ícono central en contacto, promociones, chat, modal y aviso migrados; automatizaciones Meta actualizadas al mismo número
- [x] `firestore.rules` endurecidas publicadas — verificado: create público OK, lectura sin login = 403
- [x] Sucursales reales: Villahermosa matriz, Villahermosa Sabina, Veracruz y Tuxtla — visibles + en contexto del chat IA
- [x] Automatizaciones Meta Business Suite (FB + IG): respuesta instantánea, mensaje de ausencia, 4 FAQs, comentario→DM, palabras clave ×3 — todo embala a cotizador/WhatsApp
- [x] Cotizador → Firestore + admin autenticado (filtros por estado, eliminar, badge instalación, XSS tapado)
- [x] Gemini híbrido en el chat (key `portoai` en `fb.js`, modelo 3-flash + respaldo lite; intents curados primero)
- [x] `pubfb.html`: 3 modos de publicación (día / producto con variantes / promoción). 28-oct: texto con **Gemini** (Ollama solo respaldo), cierre fijo con catálogo + WhatsApp 993 302 3903, nombres con mayúsculas/acentos correctos
- [x] **Catálogo con variantes + vista completa** (28-oct): miniaturas de todas las fotos de cada producto; clic en la foto → lightbox (flechas, teclado, swipe, cotizar desde ahí); evento Pixel `ViewContent`
- [x] Promociones en móvil: hueco entre texto y foto corregido (flex-basis 640px actuaba como alto en columna)
- [x] CTA Facebook + `sameAs` → `facebook.com/portofinogranitosymarmoles`
- [x] SEO estructural: `robots.txt`, `sitemap.xml`, canonical y JSON-LD LocalBusiness con las 4 sucursales
- [x] Imágenes optimizadas: muestras WebP, hero responsive con `fetchpriority`, logo reducido, builder genera WebP
- [x] Sync nocturno: solo commitea cuando el catálogo cambia de verdad
- [x] Meta Pixel `1124678623449829` — PageView + Lead conectados (`meta-pixel.js`)
- [x] Secret `DROPBOX_URL` + workflow Actions funcionando
- [x] Correo `ventas@portofino.com.mx` en cotizador, contacto y aviso
- [x] Repo + GitHub Pages activos en `unknownshopper.github.io/portofino`
- [x] `galeria.html` retirada — `catalogo.html` la sustituye
