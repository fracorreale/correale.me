(()=>{
const isMap=location.pathname.includes('/map/');
const base=isMap?'../':'./';
function syncLinks(){
 const lang=document.documentElement.lang==='it'?'it':'en';
 document.querySelectorAll('.site-nav a').forEach(a=>{
 const label=a.dataset.en||a.textContent.trim();
 const routes={'Home':'/','About me':'/#about','Currently':'/#things','Contact':'/#contact','Sport':'/sport-'+lang+'.html','Naples':'/naples.html','Napoli':'/naples.html','Places':'/places-'+lang+'.html','Duino':base+'index.html'};
 if(routes[label])a.setAttribute('href',routes[label]);
 });
 document.querySelectorAll('a[href]').forEach(a=>{
  const raw=a.getAttribute('href');if(raw.startsWith('#')||raw.startsWith('mailto:'))return;
  const u=new URL(raw,location.href);if(u.origin!==location.origin&&u.hostname!=='correale.me')return;
  if(u.pathname.endsWith('.html')||u.pathname.endsWith('/')){u.searchParams.set('lang',lang);a.href=u.pathname+u.search+u.hash}
 });
 document.querySelectorAll('.lang button').forEach(b=>b.setAttribute('aria-pressed',String(b.id===lang)));
 const u=new URL(location.href);u.searchParams.set('lang',lang);history.replaceState(null,'',u);
}
function init(){
 const original=window.setLang;
 if(original){window.setLang=function(lang){original(lang);syncLinks()};window.setLang(new URLSearchParams(location.search).get('lang')==='it'?'it':'en')}
 const nav=document.querySelector('.site-nav');
 if(nav&&!nav.querySelector('[data-map-link]')){
  const a=document.createElement('a');a.dataset.mapLink='';a.dataset.en='The Map';a.dataset.it='La mappa';a.href=base+'map/';a.textContent=document.documentElement.lang==='it'?'La mappa':'The Map';
  nav.querySelector('.dropdown-menu')?.append(a);
 }
 syncLinks();
 const header=document.querySelector('header');if(header)new ResizeObserver(()=>document.documentElement.style.setProperty('--live-header-height',header.offsetHeight+'px')).observe(header);
 document.querySelector('.notes-trigger')?.addEventListener('click',function(){this.setAttribute('aria-expanded',String(this.parentElement.classList.contains('open')))});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelector('.nav-dropdown')?.classList.remove('open');document.querySelector('.notes-trigger')?.setAttribute('aria-expanded','false')}});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
