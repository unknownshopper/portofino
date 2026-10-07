# Pendientes PORTOFINO

## Para preguntar a Eduardo

- [ ] **Enlace de la carpeta Dropbox de Portofino** → regenerar `imagenes.js` + `img/thumbs/` con las fotos reales (hoy son de muestra, Wikimedia Commons). Al regenerar: subir `?v=` del script tag
- [ ] **Nombres de carpetas/rubros** reales: hoy `marmoles`, `granitos`, `silestone`, `dekton`, `cocinas`, `banos`
- [ ] **Direcciones físicas** de sucursales (Veracruz y Tabasco) → sección contacto + Google Maps + aviso de privacidad
- [ ] ¿Hay sucursal/showroom en Chiapas y Campeche o solo cobertura?
- [ ] **RFC / razón social** para el aviso de privacidad
- [ ] ¿Precio por m² público en el catálogo o siempre "a cotización"? (hoy: sin precio público)
- [ ] ¿Dominio definitivo? (¿portofino.com.mx? ya existe para el correo) → CNAME + DNS + actualizar `og:url`

## Ya resuelto

- [x] Correo de ventas — `ventas@portofino.com.mx` (cotizador mailto primario, WhatsApp alterno; también en contacto y aviso)
- [x] Repo GitHub — `github.com/unknownshopper/portofino`, remote `origin` conectado
- [x] `og:image`/`og:url` → `unknownshopper.github.io/portofino`
- [x] `galeria.html` retirada — `catalogo.html` la sustituye (mismos `#slugs`)
- [x] Fotos de muestra + manifiesto provisional en los rubros nuevos
- [x] Thumbs viejos de kuchen eliminados de `img/thumbs/`

## Por hacer (técnico)

- [x] Activar **GitHub Pages**: Settings → Pages → Deploy from branch → `main` → sitio en `https://unknownshopper.github.io/portofino/`
- [~] Dominio propio `portofino.com.mx` — CNAME en raíz ✓ · falta DNS (abajo) + `og:url`
  - Hoy apunta a `107.180.112.116` (GoDaddy). En el DNS de GoDaddy:
    - `@` (A records) → `185.199.108.153` `185.199.109.153` `185.199.110.153` `185.199.111.153`
    - `www` (CNAME) → `unknownshopper.github.io` (hoy: CNAME al apex)
  - Después en GitHub: Settings → Pages → verificar dominio + **Enforce HTTPS**
  - Al final: cambiar `og:url` en index/propuesta de github.io a `https://portofino.com.mx`
- [ ] Revisión responsive final (carousel materiales, catálogo, panel de cotización en móvil)
