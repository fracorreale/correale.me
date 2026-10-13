(() => {
  const container = document.getElementById('disqus_thread');
  if (!container) return;
  window.disqus_config = function () {
    this.page.url = 'https://correale.me/football-it.html';
    this.page.identifier = 'correale-napoli-suggestions';
    this.page.title = 'Forza Napoli, sempre — Suggerimenti';
    this.language = document.documentElement.lang === 'it' ? 'it' : 'en';
  };
  const script = document.createElement('script');
  script.src = 'https://www-correale-me.disqus.com/embed.js';
  script.async = true;
  script.setAttribute('data-timestamp', String(Date.now()));
  script.onerror = () => {
    const message = document.createElement('p');
    message.textContent = document.documentElement.lang === 'it'
      ? 'Non riesco a caricare i suggerimenti. Riprova tra poco o controlla il blocco dei contenuti del browser.'
      : 'Unable to load suggestions. Try again shortly or check your browser’s content blocker.';
    container.replaceChildren(message);
  };
  document.head.appendChild(script);
})();
