import posthog from "posthog-js";

/**
 * Registra un evento en PostHog. Seguro en SSR y cuando PostHog no está
 * inicializado (sin key configurada) — simplemente no hace nada.
 */
export function track(event: string, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    posthog.capture(event, props);
  } catch {
    /* no-op */
  }
}
