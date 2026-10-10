# Pendientes PORTOFINO

## Para preguntar a Eduardo

- [ ] **Enlace de Google Drive de la carpeta `Productos`** (NO Dropbox) → regenerar `imagenes.js` + `img/thumbs/` con las fotos reales (hoy son de muestra). Ojo: Drive no sirve `raw=1` como Dropbox — las fotos saldrán por `drive.google.com/thumbnail?id=…&sz=w…` o `uc?id=…`; evaluar cuota/límites y si conviene self-hostear los thumbs procesados. Al regenerar: subir `?v=` del script tag
- [ ] Rubros reales según su estructura (ya confirmada): `granito`, `marmol`, `dekton`, `silestone`, `eclos`, `sinterizado`, `cuarzo`, `fregaderos`, `suministros`, `novedades` — productos por Color / Código del Modelo / Nombre del modelo, cada uno con `Fotografías/` + `Descripción` + `Características y medidas` (considerar mostrar ficha/descripción en el catálogo)
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
- [ ] Dominio propio `portofino.com.mx` — **ORDEN: primero DNS, después CNAME** (el CNAME solo hizo que github.io redirigiera al sitio de pruebas de GoDaddy sin HTTPS; ya se retiró)
  - Hoy apunta a `107.180.112.116` (GoDaddy, hosting de pruebas que desaparecerá). En el DNS de GoDaddy:
    - `@` (A records) → `185.199.108.153` `185.199.109.153` `185.199.110.153` `185.199.111.153`
    - `www` (CNAME) → `unknownshopper.github.io` (hoy: CNAME al apex)
  - Verificar con `dig +short portofino.com.mx` que resuelva a las IPs de GitHub
  - ENTONCES: re-agregar `CNAME` al repo (o Custom domain en Settings → Pages) + **Enforce HTTPS**
  - Al final: cambiar `og:url` en index/propuesta de github.io a `https://portofino.com.mx`
- [ ] Revisión responsive final (carousel materiales, catálogo, panel de cotización en móvil)
