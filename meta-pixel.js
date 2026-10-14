// Meta Pixel — PORTOFINO
// Pegar el Pixel ID de Administrador de eventos (Events Manager → Orígenes de datos).
// Mientras quede vacío no se carga nada — el sitio funciona igual.
const META_PIXEL_ID = '';

if (META_PIXEL_ID) {
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
  (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', META_PIXEL_ID);
  fbq('track', 'PageView');
}

// Evento personalizado — usar px('Lead') / px('Contact') desde las páginas
window.px = (ev, data) => { if (window.fbq) fbq('track', ev, data); };

// Clic a WhatsApp o correo = Contact
document.addEventListener('click', e => {
  const a = e.target.closest('a');
  if (!a) return;
  if (/^https?:\/\/(wa\.me|api\.whatsapp|web\.whatsapp)/.test(a.href)) px('Contact', { canal: 'whatsapp' });
  else if (a.href.startsWith('mailto:')) px('Contact', { canal: 'correo' });
});
