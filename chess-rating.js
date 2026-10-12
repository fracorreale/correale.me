(() => {
  const widgets = [...document.querySelectorAll('[data-rapid-rating]')];
  if (!widgets.length) return;
  const it = document.documentElement.lang === 'it';
  const message = (text, rating = '—') => widgets.forEach(widget => {
    widget.querySelector('[data-rating-value]').textContent = String(rating);
    widget.querySelector('[data-rating-status]').textContent = text;
  });
  let pending = false;
  async function refresh() {
    if (pending || document.hidden) return;
    pending = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch('https://api.chess.com/pub/player/flurred19/stats', {signal: controller.signal});
      if (!response.ok) throw new Error('Chess.com unavailable');
      const stats = await response.json();
      const rating = stats.chess_rapid?.last?.rating;
      if (!Number.isInteger(rating) || rating <= 0) {
        message(it ? 'Rating Rapid non disponibile' : 'Rapid rating unavailable');
        return;
      }
      message(it ? 'Ultimo rating disponibile su Chess.com' : 'Latest available rating on Chess.com', rating);
    } catch {
      message(it ? 'Chess.com non disponibile. Riprova più tardi.' : 'Chess.com unavailable. Please try again later.');
    } finally {
      clearTimeout(timeout);
      pending = false;
    }
  }
  refresh();
  setInterval(refresh, 300000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
})();
