(() => {
  const header = document.getElementById('header');
  const button = header.querySelector('.menu-btn');
  const panel = document.getElementById('mobile-navigation');
  const mobile = matchMedia('(max-width:850px)');
  const languageButtons = [...header.querySelectorAll('.lang')];
  const labels = {
    en: {home: 'Home', about: 'About', notes: 'Notes', things: 'Currently', contact: 'Contact'},
    it: {home: 'Home', about: 'Chi sono', notes: 'Note', things: 'Currently', contact: 'Contatti'}
  };

  const disclosures = [];
  document.querySelectorAll('[data-nav="notes"]').forEach(trigger => {
    const wrapper = document.createElement('div');
    wrapper.className = 'notes-dropdown';
    trigger.before(wrapper);
    wrapper.append(trigger);
    trigger.setAttribute('role', 'button');
    trigger.setAttribute('aria-expanded', 'false');
    const submenu = document.createElement('div');
    submenu.className = 'notes-submenu';
    submenu.id = 'notes-submenu-' + disclosures.length;
    submenu.hidden = true;
    trigger.setAttribute('aria-controls', submenu.id);
    wrapper.append(submenu);
    function close() {
      submenu.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    }
    function toggle(event) {
      event.preventDefault();
      const open = submenu.hidden;
      disclosures.forEach(item => item.close());
      submenu.hidden = !open;
      trigger.setAttribute('aria-expanded', String(open));
    }
    trigger.addEventListener('click', toggle);
    trigger.addEventListener('keydown', event => {
      if (event.key === ' ') toggle(event);
      if (event.key === 'ArrowDown') {
        if (submenu.hidden) toggle(event);
        event.preventDefault();
        submenu.querySelector('a').focus();
      }
    });
    wrapper.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !submenu.hidden) {
        event.stopPropagation();
        close();
        trigger.focus();
      }
    });
    wrapper.addEventListener('focusout', event => {
      if (!wrapper.contains(event.relatedTarget)) close();
    });
    document.addEventListener('click', event => {
      if (!wrapper.contains(event.target)) close();
    });
    disclosures.push({trigger, submenu, close});
  });

  function setOpen(open, restoreFocus = false) {
    open = open && mobile.matches;
    if (!open) disclosures.forEach(item => item.close());
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
    disclosures.forEach(({submenu}) => {
      const lang = italian ? 'it' : 'en';
      submenu.innerHTML = '<a href="sport-' + lang + '.html">Sport</a>' +
        '<a href="culture-' + lang + '.html">' + (italian ? 'Cultura' : 'Culture') + '</a>' +
        '<a href="places-' + lang + '.html">' + (italian ? 'Luoghi' : 'Places') + '</a>';
    });
    button.setAttribute('aria-label', italian ? 'Menu di navigazione' : 'Navigation menu');
    panel.querySelector('nav').setAttribute('aria-label', italian ? 'Navigazione mobile' : 'Mobile navigation');
    languageButtons.forEach(item => item.setAttribute('aria-pressed', String(item.dataset.lang === document.documentElement.lang)));
  }

  button.addEventListener('click', () => setOpen(!panel.classList.contains('open')));
  panel.querySelectorAll('a:not([data-nav="notes"])').forEach(link => link.addEventListener('click', () => {
    setOpen(false);
    const hash = link.getAttribute('href');
    const target = hash.startsWith('#') && document.querySelector(hash);
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({preventScroll: true});
    }
  }));
  panel.addEventListener('click', event => {
    if (event.target.closest('.notes-submenu a')) setOpen(false);
  });
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

