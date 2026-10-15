// Firebase — PORTOFINO (cotizaciones → panel admin.html)
// Config: console.firebase.google.com → tu proyecto → Configuración → Tus apps → Web.
// La apiKey web identifica el proyecto, no autoriza nada — la seguridad son las reglas de Firestore.
const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyA3jaMC7q1H81xt8P-8Baz10-chLVvJeSA',
  authDomain: 'portofino-1.firebaseapp.com',
  projectId: 'portofino-1',
  storageBucket: 'portofino-1.firebasestorage.app',
  messagingSenderId: '78595824301',
  appId: '1:78595824301:web:d5d75c42778e7e8ef80424',
};
// Gemini — clave de AI Studio RESTRINGIDA por HTTP referrer al dominio del sitio
// (aistudio.google.com → Get API key → en Google Cloud agregar restricción de referrer:
//  *.github.io/* · portofino.com.mx/* · localhost:*/*)
const GEMINI_KEY = '';
const GEMINI_MODEL = 'gemini-2.0-flash';
const GEMINI_ON = !!GEMINI_KEY;

async function gemini(prompt) {
  if (!GEMINI_ON) return null;
  try {
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_KEY}`,
      { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }) });
    const j = await r.json();
    return j.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || null;
  } catch (e) { return null; }
}

const FB_V = '10.14.1';
const FB_ON = !!FIREBASE_CONFIG.apiKey;
const FS_URL = `https://firestore.googleapis.com/v1/projects/${FIREBASE_CONFIG.projectId}/databases/(default)/documents`;

// SDK completo solo cuando lo pide admin.html (auth + lectura)
function __fbLoad() {
  if (!FB_ON) return Promise.resolve(null);
  if (!window.__fbReady) {
    window.__fbReady = (async () => {
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
  }
  return window.__fbReady;
}

// valor JS → formato Firestore REST
function __fs(v) {
  if (v === null || v === undefined) return { nullValue: null };
  if (typeof v === 'number') return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
  if (typeof v === 'boolean') return { booleanValue: v };
  if (Array.isArray(v)) return { arrayValue: { values: v.map(__fs) } };
  if (typeof v === 'object') {
    const f = {};
    for (const k in v) f[k] = __fs(v[k]);
    return { mapValue: { fields: f } };
  }
  return { stringValue: String(v) };
}

// guarda la solicitud vía REST (un fetch común — el SDK lo bloquean varios ad-blockers)
// fire-and-forget: no bloquea el mailto/WhatsApp
async function guardarCotizacion(datos) {
  if (!FB_ON) return;
  const fields = {};
  const doc = { ...datos, estado: 'pendiente', creado: new Date().toISOString() };
  for (const k in doc) fields[k] = __fs(doc[k]);
  try {
    await fetch(`${FS_URL}/cotizaciones?key=${FIREBASE_CONFIG.apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields }),
    });
  } catch (e) { /* sin red — el correo/WhatsApp ya salió */ }
}
