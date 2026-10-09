(() => {
  const header = document.getElementById('header');
  const button = header.querySelector('.menu-btn');
  const panel = document.getElementById('mobile-navigation');
  const mobile = matchMedia('(max-width:850px)');
  const languageButtons = [...header.querySelectorAll('.lang')];
  const labels = {
    en: {home: 'Home', about: 'About', notes: 'Notes', things: 'Things I Like', contact: 'Contact'},
    it: {home: 'Home', about: 'Chi sono', notes: 'Note', things: 'Cose che mi piacciono', contact: 'Contatti'}
  };

  function setOpen(open, restoreFocus = false) {
    open = open && mobile.matches;
    panel.classList.toggle('open', open);
    panel.inert = !open;
    panel.setAttribute('aria-hidden', String(!open));
    button.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    if (restoreFocus) button.focus();
  }

  function updateLanguage() {
    const italian = document.documentElement.lang === 'it';
    const text = labels[italian ? 'it' : 'en'];
    document.querySelectorAll('[data-nav]').forEach(link => { link.textContent = text[link.dataset.nav]; });
    button.setAttribute('aria-label', italian ? 'Menu di navigazione' : 'Navigation menu');
    panel.querySelector('nav').setAttribute('aria-label', italian ? 'Navigazione mobile' : 'Mobile navigation');
    languageButtons.forEach(item => item.setAttribute('aria-pressed', String(item.dataset.lang === document.documentElement.lang)));
  }

  button.addEventListener('click', () => setOpen(!panel.classList.contains('open')));
  panel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    setOpen(false);
    const hash = link.getAttribute('href');
    const target = hash.startsWith('#') && document.querySelector(hash);
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({preventScroll: true});
    }
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && panel.classList.contains('open')) setOpen(false, true);
  });
  document.addEventListener('click', event => {
    if (!panel.contains(event.target) && !header.contains(event.target)) setOpen(false);
  });
  document.addEventListener('focusin', event => {
    if (!panel.contains(event.target) && !header.contains(event.target)) setOpen(false);
  });
  mobile.addEventListener('change', () => setOpen(false));
  addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 16), {passive: true});
  new MutationObserver(updateLanguage).observe(document.documentElement, {attributes: true, attributeFilter: ['lang']});

  header.classList.toggle('scrolled', scrollY > 16);
  setOpen(false);
  updateLanguage();
})();
