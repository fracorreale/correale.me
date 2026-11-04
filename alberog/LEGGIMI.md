# Albero genealogico — come aggiornarlo

La cartella funziona anche offline: scaricala e apri `index.html` con doppio clic.
Fai le modifiche lì, controlla il risultato nel browser e, quando sei sicuro,
carica i file su GitHub (ramo `main`): la pagina online si aggiorna in un minuto circa.

## Cosa c'è nella cartella

| File | Cosa contiene | Quando lo tocchi |
|---|---|---|
| `famiglia.js` | persone, date, note, legami | quasi sempre |
| `foto/<id>.webp` | un ritratto per persona | quando aggiungi o cambi una foto |
| `img/` | sfondo e titolo | quasi mai |
| `index.html` | grafica e logica della pagina | solo per cambiare l'aspetto |

## Operazioni tipiche

- **Correggere una data o una nota**: in `famiglia.js` cerca il nome e cambia il valore tra virgolette.
- **Aggiungere una foto**: salva l'immagine come `foto/<id>.webp` (circa 300 px di altezza)
  e aggiungi alla persona la riga `"foto": "foto/<id>.webp",`.
- **Aggiungere una persona**: copia il blocco di una persona simile, cambia `id`, nome e dati,
  poi aggiungi in `edges` i legami (`coniuge`, `figlio`, `fratello/sorella`).

Se dopo una modifica la pagina resta vuota, quasi sempre manca una virgola o una virgoletta in `famiglia.js`.
