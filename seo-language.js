/* Single-URL pages retain their English HTML fallback for crawlers.
   Keep metadata aligned with the existing language controls; never change content. */
(() => {
  function updateMetadata() {
    const lang = document.documentElement.lang === 'it' ? 'it' : 'en';
    const title = document.querySelector('meta[name="seo:title:' + lang + '"]');
    const description = document.querySelector('meta[name="seo:description:' + lang + '"]');
    if (!title || !description) return;
    document.title = title.content;
    document.querySelector('meta[name="description"]').content = description.content;
    document.querySelector('meta[property="og:title"]').content = title.content;
    document.querySelector('meta[property="og:description"]').content = description.content;
    document.querySelector('meta[property="og:locale"]').content = lang === 'it' ? 'it_IT' : 'en_GB';
    document.querySelector('meta[property="og:locale:alternate"]').content = lang === 'it' ? 'en_GB' : 'it_IT';
  }
  updateMetadata();
  new MutationObserver(updateMetadata).observe(document.documentElement, {
    attributes: true, attributeFilter: ['lang']
  });
})();
