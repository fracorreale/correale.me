# SEO e Google Search Console — correale.me

## Modifiche
Title con Francesco Correale, descrizioni IT/EN, canonical HTTPS senza www,
Open Graph e JSON-LD Person/WebSite nella homepage. I profili sameAs sono
quelli già collegati nel sito. Nessuna dichiarazione NewsMediaOrganization.
Grafica, body HTML, CSS e script esistenti non cambiano.

La homepage e tennis, Napoli, dintorni, viaggi e cinema usano un solo URL:
l'HTML iniziale è inglese e seo-language.js allinea title, description e
Open Graph alla lingua selezionata. Questo non crea due versioni indicizzabili.
Google potrebbe indicizzare soltanto la lingua iniziale; per indicizzare
separatamente IT/EN servirebbe in futuro una modifica agli URL e al routing.
Non si dichiarano hreflang IT/EN sullo stesso URL.
Le cinque coppie con URL separati hanno canonical propri e hreflang reciproci
assoluti. La sitemap include tutte le 16 pagine di contenuto, esclude il
selettore chess.html, frammenti e duplicato index.html della homepage.
Non sono inventate date lastmod.

## Verifica in Google Search Console dopo il merge e il deploy
1. Apri https://search.google.com/search-console con il tuo account Google.
2. Aggiungi la proprietà Dominio correale.me. Copia il record TXT fornito
   da Google nella gestione DNS del tuo dominio, senza cambiare CNAME,
   record A o MX. Torna in Search Console e premi Verifica.
   Non rimuovere il TXT dopo la verifica.
3. In alternativa aggiungi la proprietà Prefisso URL https://correale.me/.
   Usa il file HTML originale fornito da Google nella radice del repository,
   oppure il meta tag google-site-verification esatto nel head di index.html.
   Pubblica tramite PR e verifica solo dopo il deploy. Non usare token fittizi.
4. Attendi il completamento del workflow GitHub Pages dopo il merge.
   Apri https://correale.me/robots.txt e https://correale.me/sitemap.xml.
   Entrambi devono rispondere 200 con il contenuto di questa PR.
5. Nella sezione Sitemap invia https://correale.me/sitemap.xml.
6. In Controllo URL inserisci https://correale.me/, esegui il test dell'URL
   pubblicato e controlla scansione consentita, risposta 200, assenza di
   noindex e canonical dichiarato. Poi richiedi l'indicizzazione.
7. Ripeti sulle principali sezioni e controlla il rapporto Indicizzazione
   delle pagine. Il canonical scelto da Google dovrebbe coincidere con quello
   dichiarato; la decisione resta di Google.
8. Nel rapporto Rendimento filtra la query Francesco Correale e osserva
   impressioni e clic nel tempo. Indicizzazione e posizione non sono garantite.

## Verifica tecnica
Il repository è HTML/CSS/JS statico senza package.json o fase di compilazione.
Servire i file dalla radice è il build previsto; il deploy effettivo dipende
dal workflow GitHub Pages. Controllare sintassi di seo-language.js, JSON-LD,
XML sitemap, unicità dei metadati, esistenza dei target e body invariati.
La verifica locale non certifica l'avvenuta indicizzazione.
I controlli HTTP della produzione prima del merge riguardano la versione
precedente; ripetere quelli di robots/sitemap dopo il deploy.
Zscaler e le policy aziendali restano un processo separato.

Fonti:
- https://support.google.com/webmasters/answer/9008080
- https://developers.google.com/search/docs/monitor-debug/search-console-start
- https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites

## Riscontro produzione del 12 ottobre 2026, prima del merge
- https://correale.me/ risponde HTTP 200, senza X-Robots-Tag di esclusione.
- robots.txt e sitemap.xml rispondono 404: vengono introdotti dalla PR.
- http://correale.me/ risponde 200 senza redirect HTTPS. In Settings > Pages
  verificare e attivare Enforce HTTPS quando disponibile.
- https://www.correale.me/ fallisce la verifica TLS per nome non incluso nel
  certificato. Se vuoi supportare www, verificare DNS e certificato in
  GitHub Pages; non disabilitare la verifica TLS. Il canonical di questa PR
  usa sempre https://correale.me/ e non dipende da www.
- L'ultimo workflow Pages della versione di partenza è completato con successo:
  https://github.com/fracorreale/correale.me/actions/runs/38275984777
