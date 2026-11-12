// wa-bot — webhook WhatsApp Cloud API + Gemini (PORTOFINO)
// Portable: corre en Cloudflare Workers y en Firebase Cloud Functions (v2, con adaptador fetch).
// Env/secrets: WA_VERIFY_TOKEN (elegido por nosotros), WA_TOKEN (token de la app),
// PHONE_NUMBER_ID, GEMINI_KEY (key SIN restricción de referrer — la del sitio no sirve en servidor).

const GRAPH = 'https://graph.facebook.com/v21.0';
const GEMINI_MODEL = 'gemini-3-flash-preview';
const GEMINI_MODEL_B = 'gemini-3.1-flash-lite-preview';

const SYSTEM = `Eres el asistente de WhatsApp de PORTOFINO, venta al menudeo de mármol, granito y superficies de alta gama con sucursales en Villahermosa y Veracruz.
Sucursales: Villahermosa matriz (Periférico Carlos Pellicer Cámara 102, tel 993 141 6774, showroom con cita) · Villahermosa Sabina (Av. 20 de Noviembre 1115, tel 993 383 8740) · Veracruz (Carr. Veracruz–Medellín km 1.5, tel 229 167 1540) · Tuxtla Gutiérrez (distribuidor — tel 961 217 5504). Horario: lunes a viernes 8:00–17:30, sábado 9:00–14:00. No manejamos envíos — la recolección es en sucursal; entregas especiales se valoran caso por caso con un asesor.
Catálogo en línea: portofino.com.mx/catalogo.html. Ventas: ventas@portofino.com.mx.
Reglas: español, respuestas CORTAS (máx. 4 líneas, WhatsApp no es sitio web), tono cálido y profesional. NUNCA inventes precios, existencias ni tiempos de entrega — para eso dirige al cotizador del catálogo o a un asesor humano ("en un momento un asesor te contacta"). Si piden algo fuera de materiales (facturación, estado de pedido, quejas), di que un asesor lo atiende.`;

// memoria mínima por contacto — las funciones serverless no la conservan entre invocaciones;
// para MVP basta el último mensaje. (Fase 2: historial en Firestore.)
async function gemini(env, pregunta) {
  for (const model of [GEMINI_MODEL, GEMINI_MODEL_B]) {
    try {
      const r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_KEY}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: SYSTEM + '\n\nCliente: ' + pregunta }] }] }) });
      if (!r.ok) continue;
      const j = await r.json();
      const txt = j.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      if (txt) return txt.slice(0, 1000);
    } catch (e) { /* sigue el de respaldo */ }
  }
  return null;
}

async function waSend(env, to, text) {
  await fetch(`${GRAPH}/${env.PHONE_NUMBER_ID}/messages`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${env.WA_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ messaging_product: 'whatsapp', to, type: 'text', text: { body: text } }),
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // verificación de Meta
    if (request.method === 'GET') {
      if (url.searchParams.get('hub.mode') === 'subscribe' &&
          url.searchParams.get('hub.verify_token') === env.WA_VERIFY_TOKEN) {
        return new Response(url.searchParams.get('hub.challenge'), { status: 200 });
      }
      return new Response('Forbidden', { status: 403 });
    }

    // mensajes entrantes
    if (request.method === 'POST') {
      let body;
      try { body = await request.json(); } catch { return new Response('ok'); }
      const msg = body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
      if (msg?.type === 'text') {
        const to = msg.from;
        const pregunta = msg.text.body;
        const ai = await gemini(env, pregunta);
        await waSend(env, to,
          ai || '¡Hola! Gracias por escribir a PORTOFINO. Un asesor te atiende en breve. Mientras tanto: portofino.com.mx/catalogo.html');
      }
      return new Response('ok'); // Meta exige 200 rápido
    }
    return new Response('ok');
  },
};
