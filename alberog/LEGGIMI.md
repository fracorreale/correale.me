# Albero genealogico — come aggiornarlo

La cartella funziona anche offline: scaricala e apri `index.html` con doppio clic.
Fai le modifiche lì, controlla il risultato nel browser e, quando sei sicuro,
carica i file su GitHub (ramo `main`): la pagina online si aggiorna in un minuto circa.

## Cosa c'è nella cartella

| File | Cosa contiene | Quando lo tocchi |
|---|---|---|
| `famiglia.js` | persone, date, note, legami — **unica fonte dei dati** | quasi sempre |
| `foto/<id>.webp` | un ritratto per persona | quando aggiungi o cambi una foto |
| `img/` | sfondo e titolo | quasi mai |
| `index.html` | grafica e logica dell'albero | solo per cambiare l'aspetto |
| `Calendario-Compleanni.html` | grafica del calendario: legge le date da `famiglia.js` | solo per cambiare l'aspetto |
| `Compleanni-Famiglia.ics` | file per Calendario Apple, generato da `famiglia.js` | da rigenerare dopo ogni cambio di date |

**Regola importante:** non incollare mai dati o foto dentro `index.html` o `Calendario-Compleanni.html`
e non ripubblicare una copia vecchia della pagina. Si parte sempre dai file attuali del repository,
altrimenti si cancellano le modifiche fatte nel frattempo. Le date si cambiano solo in `famiglia.js`:
albero e calendario si aggiornano da soli; il file `.ics` va rigenerato.

Date di nascita in `famiglia.js`: `"birthDate": "AAAA-MM-GG"` se l'anno è noto;
`"birthMonth": M, "birthDay": G` se l'anno non è noto.

## Operazioni tipiche

- **Correggere una data o una nota**: in `famiglia.js` cerca il nome e cambia il valore tra virgolette.
- **Aggiungere una foto**: salva l'immagine come `foto/<id>.webp` (circa 300 px di altezza)
  e aggiungi alla persona la riga `"foto": "foto/<id>.webp",`.
- **Aggiungere una persona**: copia il blocco di una persona simile, cambia `id`, nome e dati,
  poi aggiungi in `edges` i legami (`coniuge`, `figlio`, `fratello/sorella`).

Se dopo una modifica la pagina resta vuota, quasi sempre manca una virgola o una virgoletta in `famiglia.js`.

## Schede

- Nel calendario, un clic su un nome apre la scheda dell'albero sopra la pagina: è la stessa scheda di `index.html`, non una copia.
- Link diretto a una scheda: `index.html#persona=<id>` (es. `#persona=gaetano`).
