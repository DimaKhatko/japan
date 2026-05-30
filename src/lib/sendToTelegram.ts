export interface ApplicationData {
  name: string;
  phone: string;
  email: string;
  promo?: string;
  children?: string;
}

export interface SendResult {
  ok: boolean;
  error?: string;
}

/**
 * Sends an application as a plain-text message to a Telegram chat via the Bot API.
 * Credentials come from build-time env vars (see .env.example). Plain text is used
 * intentionally (no parse_mode) so user input never needs Markdown/HTML escaping.
 */
export async function sendToTelegram(data: ApplicationData): Promise<SendResult> {
  const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return { ok: false, error: "Telegram credentials are not configured." };
  }

  const dateTime = new Intl.DateTimeFormat("uk-UA", {
    timeZone: "Europe/Kyiv",
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date());

  const text = [
    "🟣 Нова заявка — Japan 2026",
    `Ім'я: ${data.name}`,
    `Телефон: ${data.phone}`,
    `E-mail: ${data.email}`,
    `Промокод: ${data.promo || "—"}`,
    `Діти: ${data.children || "—"}`,
    "———",
    "Джерело: japan landing",
    dateTime,
  ].join("\n");

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    if (!res.ok) {
      return { ok: false, error: `Telegram API responded with ${res.status}.` };
    }

    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Network error.",
    };
  }
}
