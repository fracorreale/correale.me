(() => {
  const button = document.querySelector('.menu-btn');
  const panel = document.getElementById('mobile-navigation');
  const mobile = matchMedia('(max-width:850px)');
  const languageButtons = [...document.querySelectorAll('.lang')];
  function setOpen(open, restoreFocus = false) {
    open = open && mobile.matches;
    panel.classList.toggle('open', open);
    panel.inert = !open;
    panel.setAttribute('aria-hidden', String(!open));
    button.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    if (restoreFocus) button.focus();
  }
  button.addEventListener('click', () => setOpen(!panel.classList.contains('open')));
  panel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    setOpen(false);
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({preventScroll:true});
    }
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && panel.classList.contains('open')) setOpen(false, true);
  });
  document.addEventListener('click', event => {
    if (!panel.contains(event.target) && !document.getElementById('header').contains(event.target)) setOpen(false);
  });
  document.addEventListener('focusin', event => {
    if (!panel.contains(event.target) && !document.getElementById('header').contains(event.target)) setOpen(false);
  });
  function updateLanguageLabels() {
    const italian = document.documentElement.lang === 'it';
    button.setAttribute('aria-label', italian ? 'Menu di navigazione' : 'Navigation menu');
    panel.querySelector('nav').setAttribute('aria-label', italian ? 'Navigazione mobile' : 'Mobile navigation');
    languageButtons.forEach(item => item.setAttribute('aria-pressed', String(item.dataset.lang === document.documentElement.lang)));
  }
  languageButtons.forEach(item => item.addEventListener('click', updateLanguageLabels));
  mobile.addEventListener('change', () => setOpen(false));
  document.getElementById('header').classList.toggle('scrolled', scrollY > 16);
  setOpen(false);
  updateLanguageLabels();
})();
