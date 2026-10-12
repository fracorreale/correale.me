(() => {
  const lang = document.documentElement.lang;
  try { localStorage.setItem('correale-lang', lang); } catch {}
  document.querySelectorAll('.lang').forEach(link => link.classList.toggle('active', link.dataset.lang === lang));
})();
