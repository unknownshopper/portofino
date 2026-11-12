const { onRequest } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');

const WA_TOKEN = defineSecret('WA_TOKEN');         // token de la app Meta (pasar a permanente después)
const WA_VERIFY_TOKEN = defineSecret('WA_VERIFY_TOKEN'); // cadena que inventamos nosotros
const PHONE_NUMBER_ID = defineSecret('PHONE_NUMBER_ID'); // 1434575116411638 (prueba)
const GEMINI_KEY = defineSecret('GEMINI_KEY');     // key SIN restricción de referrer

const GRAPH = 'https://graph.facebook.com/v21.0';
const MODELS = ['gemini-3-flash-preview', 'gemini-3.1-flash-lite-preview'];

/* futuro: si manejan también 3cm, agregarlo al contexto */
const SYSTEM = `Eres el asistente de WhatsApp de PORTOFINO, venta al menudeo de mármol, granito y superficies de alta gama con sucursales en Villahermosa y Veracruz.
Sucursales: Villahermosa matriz (Periférico Carlos Pellicer Cámara 102, tel 993 141 6774, showroom con cita) · Villahermosa Sabina (Av. 20 de Noviembre 1115, tel 993 383 8740) · Veracruz (Carr. Veracruz–Medellín km 1.5, tel 229 167 1540) · Tuxtla Gutiérrez (distribuidor — tel 961 217 5504). Horario: lunes a viernes 8:00–17:30, sábado 9:00–14:00. No manejamos envíos — la recolección es en sucursal; entregas especiales se valoran caso por caso con un asesor.
Catálogo en línea: portofino.com.mx/catalogo.html. Ventas: ventas@portofino.com.mx. Los materiales se venden por slab/lámina completa (nunca por m²), disponibles en espesor de 2cm; el peso varía por composición (granito más denso, mármol y cuarcita intermedios).
Reglas: español, respuestas CORTAS (máx. 4 líneas, WhatsApp no es sitio web), tono cálido y profesional. NUNCA inventes precios, existencias ni tiempos de entrega — para eso dirige al cotizador del catálogo o a un asesor humano ("en un momento un asesor te contacta"). Si piden algo fuera de materiales (facturación, estado de pedido, quejas), di que un asesor lo atiende.`;

async function gemini(pregunta) {
  for (const model of MODELS) {
    try {
      const r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_KEY.value()}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: SYSTEM + '\n\nCliente: ' + pregunta }] }] }) });
      if (!r.ok) { console.error('gemini', model, r.status); continue; }
      const j = await r.json();
      const txt = j.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      if (txt) return txt.slice(0, 1000);
    } catch (e) { /* respaldo */ }
  }
  return null;
}

async function waSend(to, text) {
  const r = await fetch(`${GRAPH}/${PHONE_NUMBER_ID.value()}/messages`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${WA_TOKEN.value()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ messaging_product: 'whatsapp', to, type: 'text', text: { body: text } }),
  });
  if (!r.ok) console.error('waSend', r.status, await r.text());
  else console.log('waSend ok →', to);
}

exports.waWebhook = onRequest(
  { secrets: [WA_TOKEN, WA_VERIFY_TOKEN, PHONE_NUMBER_ID, GEMINI_KEY] },
  async (req, res) => {
    if (req.method === 'GET') {
      if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token'] === WA_VERIFY_TOKEN.value()) {
        res.status(200).send(req.query['hub.challenge']);
        return;
      }
      res.status(403).send('Forbidden');
      return;
    }
    if (req.method === 'POST') {
      res.status(200).send('ok'); // responde rápido a Meta
      try {
        console.log('POST', JSON.stringify(req.body).slice(0,400));
        const msg = req.body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
        if (msg?.type === 'text') {
          const ai = await gemini(msg.text.body);
          await waSend(msg.from, ai || '¡Hola! Gracias por escribir a PORTOFINO. Un asesor te atiende en breve. Mientras tanto: portofino.com.mx/catalogo.html');
        }
      } catch (e) { console.error(e); }
    }
  }
);
