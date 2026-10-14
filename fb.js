// Firebase — PORTOFINO (cotizaciones → panel admin.html)
// Config: console.firebase.google.com → tu proyecto → Configuración → Tus apps → Web.
// Mientras apiKey quede vacío no se carga nada — el cotizador funciona igual (correo/WhatsApp).
const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyA3jaMC7q1H81xt8P-8Baz10-chLVvJeSA',
  authDomain: 'portofino-1.firebaseapp.com',
  projectId: 'portofino-1',
  storageBucket: 'portofino-1.firebasestorage.app',
  messagingSenderId: '78595824301',
  appId: '1:78595824301:web:d5d75c42778e7e8ef80424',
};
const FB_V = '10.14.1';
const FB_ON = !!FIREBASE_CONFIG.apiKey;

const __fbLoad = (async () => {
  if (!FB_ON) return null;
  const srcs = ['app', 'firestore', 'auth'].map(m =>
    `https://www.gstatic.com/firebasejs/${FB_V}/firebase-${m}-compat.js`);
  for (const s of srcs) {
    await new Promise((res, rej) => {
      const el = document.createElement('script');
      el.src = s; el.onload = res; el.onerror = rej;
      document.head.appendChild(el);
    });
  }
  firebase.initializeApp(FIREBASE_CONFIG);
  return firebase;
})();

// guarda la solicitud — fire-and-forget, no bloquea el mailto/WhatsApp
async function guardarCotizacion(datos) {
  try {
    const fb = await __fbLoad;
    if (!fb) return;
    await fb.firestore().collection('cotizaciones').add({
      ...datos,
      estado: 'pendiente',
      creado: fb.firestore.FieldValue.serverTimestamp(),
    });
  } catch (e) { /* sin config o sin red — el correo/WhatsApp ya salió */ }
}
