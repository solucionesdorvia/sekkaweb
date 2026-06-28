// Datos de contacto de la marca — editá acá y se actualiza en todo el sitio.

// Número de WhatsApp en formato internacional, sin "+" ni espacios.
// (54 + 9 + número sin 0 ni 15). Constante única reutilizada en todos los botones.
export const WHATSAPP_NUMBER = "5491122345776";

// Helper: arma una URL de wa.me con un mensaje pre-cargado.
const waUrl = (mensaje: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

// Precio público de la bolsa — ancla premium, visible en la web.
export const PRECIO_BOLSA = "$5.000";

// Pedido / compra — botón principal "Pedí por WhatsApp".
export const WHATSAPP_ORDER_URL = waUrl("Hola! Quiero pedir SEKKA 🌿");

// Mayorista / comercios — sección "Vendé SEKKA". El precio mayorista NUNCA va en la web.
export const WHATSAPP_WHOLESALE_URL = waUrl(
  "Hola! Tengo un comercio y quiero vender SEKKA. ¿Me pasás la lista mayorista?",
);

// Consulta general (contacto / negocio).
export const WHATSAPP_URL = waUrl(
  "Hola SEKKA, vi la web y me gustaría conocer más sobre los deshidratados artesanales.",
);

// CTA por producto — abre WhatsApp con un mensaje que menciona la fruta.
export const whatsappProductUrl = (fruta: string) =>
  waUrl(`Hola SEKKA, quiero consultar por la ${fruta}.`);

export const INSTAGRAM_HANDLE = "@sekka.artesanal";
export const INSTAGRAM_URL = "https://instagram.com/sekka.artesanal";
