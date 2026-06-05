// Datos de contacto de la marca — editá acá y se actualiza en todo el sitio.

// Número de WhatsApp en formato internacional, sin "+" ni espacios.
// Ej. Argentina: 5491122334455  (54 + 9 + número sin 0 ni 15)
export const WHATSAPP_NUMBER = "549XXXXXXXXX";

const WHATSAPP_MESSAGE =
  "Hola SEKKA, vi la web y me gustaría conocer más sobre los deshidratados artesanales.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

// CTA por producto — abre WhatsApp con un mensaje que menciona la fruta.
export const whatsappProductUrl = (fruta: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola SEKKA, quiero consultar por la ${fruta}.`,
  )}`;

export const INSTAGRAM_HANDLE = "@sekka.artesanal";
export const INSTAGRAM_URL = "https://instagram.com/sekka.artesanal";
