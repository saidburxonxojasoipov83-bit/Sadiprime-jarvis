window.PARI_CONFIG = {
  hermesBaseUrl: localStorage.getItem("PARI_HERMES_URL") || "/api/hermes",
  apiKey: localStorage.getItem("PARI_API_KEY") || "",
  pollMs: 15000,
};
