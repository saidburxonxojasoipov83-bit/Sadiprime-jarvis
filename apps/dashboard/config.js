// PARI Dashboard — Hermes connection
// Railway service public URL ni qo'ying (trailing slash YO'Q)
window.PARI_CONFIG = {
  // Masalan: "https://sadiprime-jarvis-production.up.railway.app"
  hermesBaseUrl: localStorage.getItem("PARI_HERMES_URL") || "",
  // Ixtiyoriy: agar Hermes Bearer talab qilsa
  apiKey: localStorage.getItem("PARI_API_KEY") || "",
  pollMs: 15000,
};
