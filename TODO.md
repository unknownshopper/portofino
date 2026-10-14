# Pendientes PORTOFINO

## Para preguntar a Eduardo

- [x] **Enlace de Dropbox de `Productos`** — vínculo de lectura con descargas, verificado (descarga zip completo vía `dl=1`). Guardado local en `dropbox-link.txt` (gitignored)
- [ ] **Eduardo: subir fotos a `Productos/`** — estructura ya armada (10 rubros × PRODUCTO 01/02/03). Cuando suba: `bash tools/sync-productos.sh` descarga, procesa y regenera todo. `SISNTERIZADOS` ya se corrigió a `SINTERIZADOS`; queda `TRAVERTINO` → `TRAVERTINOS` (menor — el script lo mapea igual). Ideal: renombrar `PRODUCTO 0N` al nombre del modelo
- [ ] **Secret `DROPBOX_URL` en GitHub** → Settings → Secrets → Actions. Con eso corre el job nocturno (`.github/workflows/sync-productos.yml`)
- [ ] **Direcciones físicas** de sucursales (Veracruz y Tabasco) → sección contacto + Google Maps + aviso de privacidad
- [ ] ¿Hay sucursal/showroom en Chiapas y Campeche o solo cobertura?
- [ ] **RFC / razón social** para el aviso de privacidad
- [ ] ¿Precio por m² público en el catálogo o siempre "a cotización"? (hoy: sin precio público)
- [x] Dominio definitivo: `portofino.com.mx` (ya registrado por el cliente) → pendiente solo DNS + CNAME + `og:url`

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
- [ ] **Meta Pixel ID** → Events Manager del Business Manager → Orígenes de datos → pegar en `meta-pixel.js` (`META_PIXEL_ID`). Ya trackea PageView, Contact (clics wa/mail) y Lead (cotización)
- [ ] Verificación de dominio en Business Manager → meta tag o TXT en DNS (hacer cuando el dominio apunte al sitio)
- [ ] Revisión responsive final (carousel materiales, catálogo, panel de cotización en móvil)
