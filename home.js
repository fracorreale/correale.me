(() => {
  const desktop = matchMedia('(min-width:851px)');
  const links = [...document.querySelectorAll('.desktop-nav a')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  let frame = 0;
  function select(id) {
    links.forEach(link => {
      const active = desktop.matches && link.getAttribute('href') === id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function update() {
    frame = 0;
    if (!desktop.matches) { select(null); return; }
    let current = '#top';
    const offset = document.getElementById('header').offsetHeight + 40;
    sections.forEach(section => {
      if (section && section.getBoundingClientRect().top <= offset) current = '#' + section.id;
    });
    if (scrollY > 0 && innerHeight + scrollY >= document.documentElement.scrollHeight - 2) current = '#contact';
    select(current);
  }
  links.forEach(link => link.addEventListener('click', () => select(link.getAttribute('href'))));
  addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, {passive:true});
  addEventListener('resize', update);
  addEventListener('hashchange', update);
  addEventListener('load', update);
  desktop.addEventListener('change', update);
  update();
})();
