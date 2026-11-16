// ── Reproductor fullscreen compartido — logo Portofino que rota de esquina ──
// Uso: PortofinoVideo.open('video/dekton-pietra-edition.mp4', 'video/dekton-pietra-poster.webp')
// El video NO se descarga hasta que se abre (preload="none").
window.PortofinoVideo = (() => {
  const CORNERS = [
    { top: '28px', right: 'auto', bottom: 'auto', left: '28px' },
    { top: '28px', right: '28px', bottom: 'auto', left: 'auto' },
    { top: 'auto', right: '28px', bottom: '28px', left: 'auto' },
    { top: 'auto', right: 'auto', bottom: '28px', left: '28px' },
  ];
  let ov = null, vid = null, logo = null, timer = null, ci = 0;

  const css = document.createElement('style');
  css.textContent = `
    .pfv-ov{position:fixed;inset:0;z-index:9999;background:rgba(8,8,9,.96);
      display:flex;align-items:center;justify-content:center;
      opacity:0;pointer-events:none;transition:opacity .3s ease}
    .pfv-ov.on{opacity:1;pointer-events:auto}
    .pfv-ov video{max-width:min(92vw,1600px);max-height:82vh;border-radius:10px;
      box-shadow:0 24px 80px rgba(0,0,0,.6);outline:none}
    .pfv-logo{position:absolute;width:150px;opacity:.92;filter:drop-shadow(0 2px 10px rgba(0,0,0,.5));
      transition:top .7s ease,right .7s ease,bottom .7s ease,left .7s ease;pointer-events:none}
    .pfv-x{position:absolute;top:22px;right:26px;z-index:2;width:46px;height:46px;
      border:1px solid rgba(255,255,255,.35);border-radius:50%;background:rgba(255,255,255,.08);
      color:#fff;font-size:1.15rem;cursor:pointer;backdrop-filter:blur(6px)}
    .pfv-x:hover{background:rgba(255,255,255,.2)}
    @media (max-width:640px){.pfv-logo{width:104px}.pfv-ov video{max-width:96vw;max-height:70vh}}
  `;
  document.head.appendChild(css);

  function build() {
    ov = document.createElement('div');
    ov.className = 'pfv-ov';
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-label', 'Reproductor de video');
    ov.innerHTML = `
      <video controls playsinline preload="none"></video>
      <img class="pfv-logo" src="img/logo-w.png" alt="PORTOFINO">
      <button class="pfv-x" aria-label="Cerrar video">✕</button>`;
    vid = ov.querySelector('video');
    logo = ov.querySelector('.pfv-logo');
    ov.querySelector('.pfv-x').onclick = close;
    ov.addEventListener('click', e => { if (e.target === ov) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && ov.classList.contains('on')) close(); });
    vid.addEventListener('ended', close);
    document.body.appendChild(ov);
  }

  function moverLogo() {
    ci = (ci + 1) % CORNERS.length;
    const c = CORNERS[ci];
    logo.style.top = c.top; logo.style.right = c.right;
    logo.style.bottom = c.bottom; logo.style.left = c.left;
  }

  function open(src, poster) {
    if (!ov) build();
    ci = 0;
    const c = CORNERS[0];
    logo.style.top = c.top; logo.style.right = c.right;
    logo.style.bottom = c.bottom; logo.style.left = c.left;
    if (poster) vid.poster = poster;
    vid.src = src;
    ov.classList.add('on');
    document.body.style.overflow = 'hidden';
    vid.play().catch(() => {});
    timer = setInterval(moverLogo, 5000);
  }

  function close() {
    clearInterval(timer);
    vid.pause();
    vid.removeAttribute('src');
    vid.load();
    ov.classList.remove('on');
    document.body.style.overflow = '';
  }

  return { open, close };
})();
