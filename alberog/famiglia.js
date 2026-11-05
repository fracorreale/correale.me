/* Albero genealogico — DATI
   Questo è l'unico file da modificare per aggiornare l'albero.
   - people: persone nell'albero (gen 0 = più antica). "foto" = percorso del ritratto in foto/
   - edges: legami (kind: "coniuge", "figlio", "fratello/sorella"); a → b
   - profileOnly: persone solo in scheda, non disegnate nell'albero
   - familyProfiles: schede di famiglia
   Per una nuova foto: salva foto/<id>.webp e aggiungi "foto": "foto/<id>.webp" alla persona.
   Attenzione: virgole e virgolette devono restare corrette, altrimenti la pagina resta vuota. */
window.FAMIGLIA = {
  "people": [
    {
      "id": "io",
      "name": "Francesco Correale",
      "branch": "Correale",
      "gen": 3,
      "dates": "1983 –",
      "note": "Figlio unico. Marito di Antonia Mortensen e padre di Margherita Janina Correale Mortensen.",
      "main": true,
      "birthDate": "1983-05-11",
      "birthDateUncertain": false,
      "foto": "foto/io.webp"
    },
    {
      "id": "padre",
      "name": "Giuseppe Correale",
      "branch": "Correale",
      "gen": 2,
      "dates": "1947 –",
      "main": true,
      "foto": "foto/padre.webp",
      "birthDate": "1947-10-24",
      "birthYear": 1947,
      "birthDateUncertain": false
    },
    {
      "id": "madre",
      "name": "Rosa Basile",
      "branch": "Basile",
      "gen": 2,
      "dates": "1953 –",
      "main": true,
      "foto": "foto/madre.webp",
      "birthDate": "1953-01-21",
      "birthYear": 1953,
      "birthDateUncertain": false
    },
    {
      "id": "gaetano",
      "name": "Gaetano Correale",
      "branch": "Correale",
      "gen": 1,
      "dates": "1921 – 1982",
      "note": "Figlio di Giuseppe Correale e Lucia Capriglione.",
      "main": true,
      "deathDate": "1982-07-02",
      "deathYear": 1982,
      "deathDateUncertain": false,
      "deceased": true,
      "birthDate": "1921-05-02",
      "birthYear": 1921,
      "birthDateUncertain": false,
      "foto": "foto/gaetano.webp"
    },
    {
      "id": "nonna",
      "name": "Margherita Langella",
      "branch": "Langella",
      "gen": 1,
      "dates": "1923 – 2016",
      "main": true,
      "birthDate": "1923-12-03",
      "birthYear": 1923,
      "birthDateUncertain": false,
      "foto": "foto/nonna.webp",
      "deceased": true
    },
    {
      "id": "ziof",
      "name": "Francesco Correale",
      "branch": "Correale",
      "gen": 2,
      "dates": "1955 –",
      "main": true,
      "birthDate": "1955-05-21",
      "birthYear": 1955,
      "birthDateUncertain": false,
      "foto": "foto/ziof.webp"
    },
    {
      "id": "elisa",
      "name": "Elisa Scala",
      "branch": "Correale",
      "gen": 2,
      "dates": "1964 –",
      "note": "Nessun figlio.",
      "main": false,
      "birthDate": "1964-03-24",
      "birthYear": 1964,
      "birthDateUncertain": false,
      "foto": "foto/elisa.webp"
    },
    {
      "id": "gennaro",
      "name": "Gennaro Basile",
      "branch": "Basile",
      "gen": 1,
      "dates": "1915 – 2005",
      "main": true,
      "birthDate": "1915-11-05",
      "birthDateUncertain": false,
      "deceased": true,
      "birthYear": 1915,
      "deathYear": 2005,
      "extraInfo": "Aveva un fratello, Domenico, e tre sorelle: Filomena, Teresa e Carmela.",
      "foto": "foto/gennaro.webp"
    },
    {
      "id": "annb",
      "name": "Nunzia Visciano",
      "branch": "Basile",
      "gen": 1,
      "dates": "1918 – 2014",
      "note": "Moglie di Gennaro Basile.",
      "main": true,
      "birthDate": "1918-09-02",
      "birthDateUncertain": false,
      "deceased": true,
      "birthYear": 1918,
      "deathYear": 2014,
      "extraInfo": "Aveva due fratelli, Gennaro e Luigi, e una sorella, Virginia."
    },
    {
      "id": "lucb",
      "name": "Lucia Basile",
      "branch": "Basile",
      "gen": 2,
      "dates": "",
      "note": "Figlia di Gennaro Basile e Nunzia Visciano; sposata con Franco Perez e madre di Guglielmo, Isabella e Stefania Perez. In vita.",
      "main": false,
      "foto": "foto/lucb.webp"
    },
    {
      "id": "elenab",
      "name": "Elena Basile",
      "branch": "Basile",
      "gen": 2,
      "dates": "1960 –",
      "note": "Figlia di Gennaro Basile e Nunzia Visciano.",
      "main": false,
      "birthYear": 1960,
      "foto": "foto/elenab.webp"
    },
    {
      "id": "luigib",
      "name": "Luigi Basile",
      "branch": "Basile",
      "gen": 2,
      "dates": "",
      "note": "Figlio di Gennaro Basile e Nunzia Visciano; marito di Rosa Spettro e padre di Alessandra Basile. In vita.",
      "main": false,
      "foto": "foto/luigib.webp"
    },
    {
      "id": "perez",
      "name": "Franco Perez",
      "branch": "Basile",
      "gen": 2,
      "dates": "",
      "note": "Sposato con Lucia Basile; padre di Guglielmo, Isabella e Stefania Perez.",
      "main": false,
      "foto": "foto/perez.webp"
    },
    {
      "id": "guglielmo",
      "name": "Guglielmo Perez",
      "branch": "Basile",
      "gen": 3,
      "dates": "1971 –",
      "note": "Figlio di Lucia Basile e Franco Perez. Non sposato, senza figli.",
      "main": false,
      "birthDate": "1971-01-22",
      "birthDateUncertain": false
    },
    {
      "id": "isabella",
      "name": "Isabella Perez",
      "branch": "Basile",
      "gen": 3,
      "dates": "",
      "main": false,
      "foto": "foto/isabella.webp",
      "birthMonth": 5,
      "birthDay": 3
    },
    {
      "id": "stefania",
      "name": "Stefania Perez",
      "branch": "Basile",
      "gen": 3,
      "dates": "",
      "main": false,
      "birthMonth": 10,
      "birthDay": 5
    },
    {
      "id": "rosa",
      "name": "Rosa Spettro",
      "branch": "Basile",
      "gen": 2,
      "dates": "",
      "note": "Moglie di Luigi Basile e madre di Alessandra Basile.",
      "main": false
    },
    {
      "id": "figliaign",
      "name": "Alessandra Basile",
      "branch": "Basile",
      "gen": 3,
      "dates": "",
      "note": "Figlia di Luigi Basile e Rosa Spettro.",
      "main": false
    },
    {
      "id": "frant",
      "name": "Francesco Correale",
      "branch": "Correale",
      "gen": 1,
      "dates": "1932 – 1978",
      "note": "Fratello di Gaetano.",
      "main": false,
      "birthYear": 1932,
      "deathYear": 1978,
      "deceased": true,
      "foto": "foto/frant.webp",
      "birthDate": "1932-04-02",
      "birthDateUncertain": false
    },
    {
      "id": "annc",
      "name": "Annunziata Correale",
      "branch": "Correale",
      "gen": 1,
      "dates": "1923 –",
      "note": "Sorella di Gaetano. In vita.",
      "main": false,
      "foto": "foto/annc.webp",
      "birthDate": "1923-01-01",
      "birthYear": 1923,
      "birthDateUncertain": false
    },
    {
      "id": "olga",
      "name": "Olga Correale",
      "branch": "Correale",
      "gen": 1,
      "dates": "",
      "note": "Sorella di Gaetano.",
      "main": false,
      "deceased": true,
      "ageAtDeath": 94,
      "foto": "foto/olga.webp"
    },
    {
      "id": "titina",
      "name": "Titina Correale",
      "branch": "Correale",
      "gen": 1,
      "dates": "",
      "note": "Sorella di Gaetano Correale e moglie di Rodolfo Iovino, detto Antonio.",
      "main": false,
      "deceased": true,
      "ageAtDeath": 89,
      "foto": "foto/titina.webp"
    },
    {
      "id": "benedetta",
      "name": "Benedetta Correale",
      "branch": "Correale",
      "gen": 1,
      "dates": "1924 – 2004",
      "note": "Sorella di Gaetano Correale, moglie di Arturo Salvati e madre di Rita Salvati.",
      "main": false,
      "birthYear": 1924,
      "deathYear": 2004,
      "deceased": true,
      "foto": "foto/benedetta.webp",
      "birthDate": "1924-04-01",
      "birthDateUncertain": false
    },
    {
      "id": "coccia",
      "name": "Giuseppina Coccia",
      "branch": "Correale",
      "gen": 1,
      "dates": "1933 –",
      "note": "Nata a ottobre 1933.",
      "main": false,
      "birthYear": 1933,
      "foto": "foto/coccia.webp",
      "birthDate": "1933-10-20",
      "birthDateUncertain": false
    },
    {
      "id": "lucc",
      "name": "Lucia Correale",
      "branch": "Correale",
      "gen": 2,
      "dates": "1960 –",
      "main": false,
      "birthDate": "1960-08-01",
      "birthYear": 1960,
      "birthDateUncertain": false,
      "foto": "foto/lucc.webp"
    },
    {
      "id": "margc",
      "name": "Margherita Correale",
      "branch": "Correale",
      "gen": 2,
      "dates": "1962 –",
      "note": "Moglie di Amedeo Desgro e madre di Marcello, Francesco Paolo e Giorgia Desgro.",
      "main": false,
      "birthDate": "1962-12-21",
      "birthYear": 1962,
      "birthDateUncertain": false,
      "foto": "foto/margc.webp"
    },
    {
      "id": "cut",
      "name": "Giuseppe Cutrupi",
      "branch": "Correale",
      "gen": 1,
      "dates": "",
      "note": "Marito di Annunziata Correale e padre di Alfredo Cutrupi.",
      "main": false,
      "deceased": true,
      "ageAtDeath": 64
    },
    {
      "id": "alfredo",
      "name": "Alfredo Cutrupi",
      "branch": "Correale",
      "gen": 2,
      "dates": "1956 –",
      "main": false,
      "birthDate": "1956-12-11",
      "birthYear": 1956,
      "birthDateUncertain": false,
      "foto": "foto/alfredo.webp"
    },
    {
      "id": "rosanna",
      "name": "Rosanna Medaglia",
      "branch": "Correale",
      "gen": 2,
      "dates": "",
      "note": "Divorziata da Alfredo Cutrupi. In vita.",
      "main": false
    },
    {
      "id": "francesca",
      "name": "Francesca Cutrupi",
      "branch": "Correale",
      "gen": 3,
      "dates": "1995 –",
      "main": false,
      "birthDate": "1995-01-21",
      "birthYear": 1995,
      "birthDateUncertain": false
    },
    {
      "id": "oreste",
      "name": "Oreste Mosca",
      "branch": "Correale",
      "gen": 1,
      "dates": "? – 1975",
      "note": "Marito di Olga Correale e padre di Sergio, Nicola e Katia Mosca.",
      "main": false,
      "deceased": true,
      "deathYear": 1975
    },
    {
      "id": "sergio",
      "name": "Sergio Mosca",
      "branch": "Correale",
      "gen": 2,
      "dates": "1960 –",
      "main": false,
      "birthYear": 1960,
      "deceased": false,
      "birthDate": "1960-02-12",
      "birthDateUncertain": false
    },
    {
      "id": "nicola",
      "name": "Nicola Mosca",
      "branch": "Correale",
      "gen": 2,
      "dates": "1957 –",
      "main": false,
      "birthYear": 1957,
      "deceased": false,
      "birthDate": "1957-01-01",
      "birthDateUncertain": false
    },
    {
      "id": "katia",
      "name": "Katia Mosca",
      "branch": "Correale",
      "gen": 2,
      "dates": "1963 –",
      "main": false,
      "birthYear": 1963,
      "deceased": false,
      "birthDate": "1963-08-19",
      "birthDateUncertain": false
    },
    {
      "id": "teresa",
      "name": "Teresa Guida",
      "branch": "Correale",
      "gen": 2,
      "dates": "",
      "main": false
    },
    {
      "id": "walter",
      "name": "Walter",
      "branch": "Correale",
      "gen": 3,
      "dates": "",
      "note": "Figlio di Sergio Mosca e Teresa.",
      "main": false
    },
    {
      "id": "ivano",
      "name": "Ivano",
      "branch": "Correale",
      "gen": 3,
      "dates": "",
      "note": "Figlio di Sergio Mosca e Teresa.",
      "main": false
    },
    {
      "id": "cettina",
      "name": "Cettina · cognome non noto",
      "branch": "Correale",
      "gen": 2,
      "dates": "",
      "main": false
    },
    {
      "id": "roberto",
      "name": "Roberto",
      "branch": "Correale",
      "gen": 3,
      "dates": "",
      "note": "Figlio di Nicola Mosca e Cettina.",
      "main": false
    },
    {
      "id": "enzo",
      "name": "Enzo Villani",
      "branch": "Correale",
      "gen": 2,
      "dates": "",
      "main": false
    },
    {
      "id": "enzof1",
      "name": "Luca",
      "branch": "Correale",
      "gen": 3,
      "dates": "",
      "note": "Primo figlio di Katia Mosca ed Enzo.",
      "main": false
    },
    {
      "id": "enzof2",
      "name": "Ilaria",
      "branch": "Correale",
      "gen": 3,
      "dates": "",
      "note": "Seconda figlia di Katia Mosca ed Enzo.",
      "main": false
    },
    {
      "id": "arturo",
      "name": "Arturo Salvati",
      "branch": "Correale",
      "gen": 1,
      "dates": "",
      "note": "Marito di Benedetta Correale e padre di Rita Salvati.",
      "main": false,
      "deceased": true,
      "ageAtDeath": 82
    },
    {
      "id": "rita",
      "name": "Rita Salvati",
      "branch": "Correale",
      "gen": 2,
      "dates": "1957 –",
      "note": "Figlia di Benedetta Correale e Arturo Salvati; moglie di Raffaele Santoro e madre di Marco, Maurizio e Claudia Santoro.",
      "main": false,
      "birthDate": "1957-01-13",
      "birthYear": 1957,
      "birthDateUncertain": false,
      "foto": "foto/rita.webp"
    },
    {
      "id": "raff",
      "name": "Raffaele Santoro",
      "branch": "Correale",
      "gen": 2,
      "dates": "1951 –",
      "note": "Marito di Rita Salvati e padre di Marco, Maurizio e Claudia Santoro.",
      "main": false,
      "birthYear": 1951,
      "foto": "foto/raff.webp",
      "birthDate": "1951-03-01",
      "birthDateUncertain": false
    },
    {
      "id": "marco",
      "name": "Marco Santoro",
      "branch": "Correale",
      "gen": 3,
      "dates": "1983 –",
      "main": false,
      "birthDate": "1983-01-14",
      "birthDateUncertain": false,
      "foto": "foto/marco.webp",
      "birthYear": 1983
    },
    {
      "id": "maurizio",
      "name": "Maurizio Santoro",
      "branch": "Correale",
      "gen": 3,
      "dates": "1987 –",
      "note": "Gemello di Claudia. Marito di Caterina e padre di Riccardo e Irene.",
      "main": false,
      "birthDate": "1987-09-22",
      "birthDateUncertain": false
    },
    {
      "id": "claudia",
      "name": "Claudia Santoro",
      "branch": "Correale",
      "gen": 3,
      "dates": "1987 –",
      "note": "Gemella di Maurizio. Moglie di Marco Rago e madre di Emma e Federico.",
      "main": false,
      "birthDate": "1987-09-22",
      "birthDateUncertain": false
    },
    {
      "id": "nobile",
      "name": "Rosanna Nobile",
      "branch": "Correale",
      "gen": 3,
      "dates": "",
      "main": false,
      "foto": "foto/nobile.webp"
    },
    {
      "id": "bens",
      "name": "Benedetta Santoro",
      "branch": "Correale",
      "gen": 4,
      "dates": "",
      "main": false
    },
    {
      "id": "raffs",
      "name": "Raffaele Santoro",
      "branch": "Correale",
      "gen": 4,
      "dates": "",
      "main": false
    },
    {
      "id": "caterina",
      "name": "Caterina · cognome non noto",
      "branch": "Correale",
      "gen": 3,
      "dates": "1987 –",
      "note": "Moglie di Maurizio Santoro e madre di Riccardo e Irene.",
      "main": false
    },
    {
      "id": "riccardo",
      "name": "Riccardo",
      "branch": "Correale",
      "gen": 4,
      "dates": "",
      "main": false
    },
    {
      "id": "irene",
      "name": "Irene",
      "branch": "Correale",
      "gen": 4,
      "dates": "",
      "main": false
    },
    {
      "id": "rago",
      "name": "Marco Rago",
      "branch": "Correale",
      "gen": 3,
      "dates": "",
      "note": "Marito di Claudia Santoro e padre di Emma e Federico.",
      "main": false
    },
    {
      "id": "emma",
      "name": "Emma",
      "branch": "Correale",
      "gen": 4,
      "dates": "",
      "main": false
    },
    {
      "id": "federico",
      "name": "Federico",
      "branch": "Correale",
      "gen": 4,
      "dates": "",
      "main": false
    },
    {
      "id": "amedeo",
      "name": "Amedeo Desgro",
      "branch": "Correale",
      "gen": 2,
      "dates": "1959 – 2025",
      "note": "Marito di Margherita Correale e padre di Marcello, Francesco Paolo e Giorgia Desgro.",
      "main": false,
      "birthDate": "1959-09-02",
      "deathDate": "2025-11-07",
      "birthDateUncertain": false,
      "deceased": true,
      "foto": "foto/amedeo.webp"
    },
    {
      "id": "marcello",
      "name": "Marcello Desgro",
      "branch": "Correale",
      "gen": 3,
      "dates": "1987 –",
      "note": "Non sposato, senza figli.",
      "main": false,
      "birthDate": "1987-07-04",
      "birthDateUncertain": false,
      "foto": "foto/marcello.webp"
    },
    {
      "id": "fp",
      "name": "Francesco Paolo Desgro",
      "branch": "Correale",
      "gen": 3,
      "dates": "1989 –",
      "note": "Non sposato, senza figli.",
      "main": false,
      "birthDate": "1989-02-13",
      "birthDateUncertain": false,
      "foto": "foto/fp.webp"
    },
    {
      "id": "livia0",
      "name": "Livia De Sena",
      "branch": "Langella",
      "gen": 0,
      "dates": "",
      "note": "Moglie di Francesco Langella e madre di Margherita Langella (nonna paterna di Francesco Correale).",
      "main": true,
      "foto": "foto/livia0.webp"
    },
    {
      "id": "lang0",
      "name": "Francesco Langella",
      "branch": "Langella",
      "gen": 0,
      "dates": "? – 1956",
      "note": "Marito di Livia De Sena e padre di Margherita Langella (nonna paterna di Francesco Correale).",
      "main": true,
      "deathDate": "1956-10-24",
      "deathYear": 1956,
      "deathDateUncertain": false,
      "deceased": true,
      "foto": "foto/lang0.webp"
    },
    {
      "id": "giusl",
      "name": "Giuseppe Langella",
      "branch": "Langella",
      "gen": 1,
      "dates": "",
      "note": "Fratello di Margherita Langella.",
      "main": false,
      "deceased": true
    },
    {
      "id": "amelia",
      "name": "Amelia Zamboni",
      "branch": "Langella",
      "gen": 1,
      "dates": "? – 2026",
      "main": false,
      "deceased": true,
      "deathYear": 2026
    },
    {
      "id": "franl",
      "name": "Francesco Langella",
      "branch": "Langella",
      "gen": 2,
      "dates": "1960 –",
      "note": "Marito di Federica Iossa.",
      "main": false,
      "birthDate": "1960-03-22",
      "birthYear": 1960,
      "birthDateUncertain": false
    },
    {
      "id": "gian",
      "name": "Gianluigi Langella",
      "branch": "Langella",
      "gen": 2,
      "dates": "1963 –",
      "note": "Compagno di Silvia Orlandini; padre di Giuseppe Langella, nato da un precedente matrimonio.",
      "main": false,
      "birthDate": "1963-02-17",
      "birthYear": 1963,
      "birthDateUncertain": false
    },
    {
      "id": "margl",
      "name": "Margherita Langella",
      "branch": "Langella",
      "gen": 2,
      "dates": "1965 –",
      "note": "Ha delle figlie, di cui non sono noti i nomi.",
      "main": false,
      "birthDate": "1965-12-03",
      "birthYear": 1965,
      "birthDateUncertain": false
    },
    {
      "id": "livial",
      "name": "Livia Langella",
      "branch": "Langella",
      "gen": 2,
      "dates": "1957 –",
      "note": "Moglie di Franco Guerrera e madre di Artem.",
      "main": false,
      "birthYear": 1957,
      "birthDate": "1957-08-13",
      "birthDateUncertain": false
    },
    {
      "id": "mirella",
      "name": "Mirella Langella",
      "branch": "Langella",
      "gen": 2,
      "dates": "",
      "note": "Divorziata; madre di Mireia.",
      "main": false,
      "birthMonth": 11,
      "birthDay": 6
    },
    {
      "id": "federica",
      "name": "Federica Iossa",
      "branch": "Langella",
      "gen": 2,
      "dates": "",
      "note": "Moglie di Francesco Langella (1960).",
      "main": false
    },
    {
      "id": "silvia",
      "name": "Silvia Orlandini",
      "branch": "Langella",
      "gen": 2,
      "dates": "",
      "note": "Compagna di Gianluigi Langella.",
      "main": false
    },
    {
      "id": "gius2",
      "name": "Giuseppe Langella",
      "branch": "Langella",
      "gen": 3,
      "dates": "",
      "note": "Figlio di Gianluigi Langella, nato da un precedente matrimonio del padre.",
      "main": false
    },
    {
      "id": "guerrera",
      "name": "Franco Guerrera",
      "branch": "Langella",
      "gen": 2,
      "dates": "",
      "note": "Marito di Livia Langella e padre di Artem.",
      "main": false
    },
    {
      "id": "artem",
      "name": "Artem",
      "branch": "Langella",
      "gen": 3,
      "dates": "",
      "note": "Figlio di Livia Langella e Franco Guerrera.",
      "main": false
    },
    {
      "id": "mireia",
      "name": "Mireia",
      "branch": "Langella",
      "gen": 3,
      "dates": "",
      "note": "Figlia di Mirella Langella.",
      "main": false
    },
    {
      "id": "figlie",
      "name": "Figlie · nomi non ricordati",
      "branch": "Langella",
      "gen": 3,
      "dates": "",
      "note": "Figlie di Margherita Langella (1965); nomi e numero non noti.",
      "main": false
    },
    {
      "id": "antonia",
      "name": "Antonia Mortensen",
      "branch": "Mortensen",
      "gen": 3,
      "dates": "1981 –",
      "note": "Moglie di Francesco Correale.",
      "main": true,
      "birthDate": "1981-06-29",
      "birthDateUncertain": false,
      "foto": "foto/antonia.webp"
    },
    {
      "id": "margherita_janina",
      "name": "Margherita Janina Correale Mortensen",
      "branch": "Correale",
      "gen": 4,
      "dates": "2019 –",
      "note": "Figlia di Francesco Correale e Antonia Mortensen.",
      "main": true,
      "foto": "foto/margherita_janina.webp"
    },
    {
      "id": "giuseppe_antenato",
      "name": "Giuseppe Correale",
      "branch": "Correale",
      "gen": 0,
      "dates": "? – 1952",
      "note": "Marito di Lucia Capriglione e padre di Gaetano Correale.",
      "main": true,
      "deathDate": "1952-02-01",
      "deathYear": 1952,
      "deathDateUncertain": false,
      "deceased": true,
      "extraInfo": "Aveva due fratelli, Nunzio e Vincenzo, e una sorella, Benedetta.",
      "profileLinks": [
        {
          "id": "famiglia_capriglione",
          "label": "Benedetta Correale · Famiglia Capriglione",
          "highlight": true
        }
      ],
      "foto": "foto/giuseppe_antenato.webp"
    },
    {
      "id": "lucia_capriglione",
      "name": "Lucia Capriglione",
      "branch": "Correale",
      "gen": 0,
      "dates": "1891 –",
      "note": "Moglie di Giuseppe Correale e madre di Gaetano Correale.",
      "main": true,
      "extraInfo": "Aveva tre fratelli: Salvatore, Giovanni e Giuseppe.",
      "profileLinks": [
        {
          "id": "famiglia_capriglione",
          "label": "Salvatore Capriglione · Famiglia Capriglione",
          "highlight": true
        }
      ],
      "foto": "foto/lucia_capriglione.webp",
      "birthDate": "1891-11-13",
      "birthYear": 1891,
      "birthDateUncertain": false,
      "deceased": true
    },
    {
      "id": "giorgia_desgro",
      "name": "Giorgia Desgro",
      "branch": "Correale",
      "gen": 3,
      "dates": "2000 –",
      "note": "Figlia di Margherita Correale e Amedeo Desgro.",
      "main": false,
      "birthDate": "2000-07-23",
      "birthDateUncertain": false
    },
    {
      "id": "sirya",
      "name": "Sirya",
      "branch": "Basile",
      "gen": 4,
      "dates": "",
      "note": "Figlia di Isabella Perez.",
      "main": false,
      "birthMonth": 8,
      "birthDay": 30
    },
    {
      "id": "saul",
      "name": "Saul",
      "branch": "Basile",
      "gen": 4,
      "dates": "",
      "note": "Figlio di Isabella Perez.",
      "main": false,
      "birthMonth": 9,
      "birthDay": 2
    },
    {
      "id": "alice",
      "name": "Alice",
      "branch": "Basile",
      "gen": 4,
      "dates": "",
      "note": "Figlia di Isabella Perez.",
      "main": false,
      "birthMonth": 8,
      "birthDay": 20
    },
    {
      "id": "pippo",
      "name": "Filippo",
      "branch": "Basile",
      "gen": 4,
      "dates": "",
      "note": "Figlio di Isabella Perez.",
      "main": false,
      "birthMonth": 7,
      "birthDay": 19
    },
    {
      "id": "lara_cristina",
      "name": "Lara Cristina",
      "branch": "Basile",
      "gen": 4,
      "dates": "",
      "note": "Figlio/a di Stefania Perez.",
      "main": false,
      "birthMonth": 8,
      "birthDay": 27
    },
    {
      "id": "giorgia_perez_figlia",
      "name": "Giorgia",
      "branch": "Basile",
      "gen": 4,
      "dates": "",
      "note": "Figlio/a di Stefania Perez.",
      "main": false,
      "birthMonth": 8,
      "birthDay": 10
    },
    {
      "id": "rodolfo_iovino",
      "name": "Rodolfo Iovino",
      "branch": "Correale",
      "gen": 1,
      "dates": "? – 1973",
      "note": "Marito di Titina Correale. Era chiamato Antonio.",
      "main": false,
      "deceased": true,
      "deathYear": 1973,
      "foto": "foto/rodolfo_iovino.webp"
    },
    {
      "id": "giulia_alessandra",
      "name": "Giulia",
      "branch": "Basile",
      "gen": 4,
      "dates": "",
      "note": "Figlio/a di Alessandra Basile.",
      "main": false
    },
    {
      "id": "diego_alessandra",
      "name": "Diego",
      "branch": "Basile",
      "gen": 4,
      "dates": "",
      "note": "Figlio/a di Alessandra Basile.",
      "main": false
    },
    {
      "id": "gabriele_alessandra",
      "name": "Gabriele",
      "branch": "Basile",
      "gen": 4,
      "dates": "",
      "note": "Figlio/a di Alessandra Basile.",
      "main": false
    },
    {
      "id": "carmine_basile",
      "name": "Carmine Basile",
      "branch": "Basile",
      "gen": 0,
      "dates": "",
      "note": "Genitore di Gennaro Basile.",
      "main": false
    },
    {
      "id": "lucia_visciano",
      "name": "Lucia Visciano",
      "branch": "Basile",
      "gen": 0,
      "dates": "",
      "note": "Genitore di Gennaro Basile.",
      "main": false
    },
    {
      "id": "vincenzo_visciano",
      "name": "Vincenzo Visciano",
      "branch": "Basile",
      "gen": 0,
      "dates": "",
      "note": "Genitore di Nunzia Visciano.",
      "main": false
    },
    {
      "id": "rosa_ciavolino",
      "name": "Rosa Ciavolino",
      "branch": "Basile",
      "gen": 0,
      "dates": "",
      "note": "Genitore di Nunzia Visciano.",
      "main": false
    }
  ],
  "edges": [
    {
      "a": "padre",
      "b": "madre",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "padre",
      "b": "io",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "madre",
      "b": "io",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "gaetano",
      "b": "nonna",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "gaetano",
      "b": "padre",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "nonna",
      "b": "padre",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "ziof",
      "b": "elisa",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "gaetano",
      "b": "ziof",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "nonna",
      "b": "ziof",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "gennaro",
      "b": "annb",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "gennaro",
      "b": "madre",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "annb",
      "b": "madre",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "gennaro",
      "b": "lucb",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "annb",
      "b": "lucb",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "gennaro",
      "b": "elenab",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "annb",
      "b": "elenab",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "gennaro",
      "b": "luigib",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "annb",
      "b": "luigib",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "perez",
      "b": "guglielmo",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "perez",
      "b": "isabella",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "perez",
      "b": "stefania",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "luigib",
      "b": "rosa",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "luigib",
      "b": "figliaign",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "rosa",
      "b": "figliaign",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "frant",
      "b": "coccia",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "frant",
      "b": "lucc",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "coccia",
      "b": "lucc",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "frant",
      "b": "margc",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "coccia",
      "b": "margc",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "annc",
      "b": "cut",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "alfredo",
      "b": "rosanna",
      "kind": "ex coniuge",
      "uncertain": false
    },
    {
      "a": "annc",
      "b": "alfredo",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "cut",
      "b": "alfredo",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "alfredo",
      "b": "francesca",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "rosanna",
      "b": "francesca",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "olga",
      "b": "oreste",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "oreste",
      "b": "sergio",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "olga",
      "b": "sergio",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "oreste",
      "b": "nicola",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "olga",
      "b": "nicola",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "oreste",
      "b": "katia",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "olga",
      "b": "katia",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "sergio",
      "b": "teresa",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "teresa",
      "b": "walter",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "sergio",
      "b": "walter",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "teresa",
      "b": "ivano",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "sergio",
      "b": "ivano",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "nicola",
      "b": "cettina",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "cettina",
      "b": "roberto",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "nicola",
      "b": "roberto",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "katia",
      "b": "enzo",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "enzo",
      "b": "enzof1",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "katia",
      "b": "enzof1",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "enzo",
      "b": "enzof2",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "katia",
      "b": "enzof2",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "arturo",
      "b": "rita",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "rita",
      "b": "raff",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "raff",
      "b": "marco",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "rita",
      "b": "marco",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "raff",
      "b": "maurizio",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "rita",
      "b": "maurizio",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "raff",
      "b": "claudia",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "rita",
      "b": "claudia",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "marco",
      "b": "nobile",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "nobile",
      "b": "bens",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "marco",
      "b": "bens",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "nobile",
      "b": "raffs",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "marco",
      "b": "raffs",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "maurizio",
      "b": "caterina",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "caterina",
      "b": "riccardo",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "maurizio",
      "b": "riccardo",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "caterina",
      "b": "irene",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "maurizio",
      "b": "irene",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "claudia",
      "b": "rago",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "rago",
      "b": "emma",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "claudia",
      "b": "emma",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "rago",
      "b": "federico",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "claudia",
      "b": "federico",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "amedeo",
      "b": "marcello",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "amedeo",
      "b": "fp",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "livia0",
      "b": "lang0",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "livia0",
      "b": "nonna",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "lang0",
      "b": "nonna",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "livia0",
      "b": "giusl",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "lang0",
      "b": "giusl",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "giusl",
      "b": "amelia",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "giusl",
      "b": "franl",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "amelia",
      "b": "franl",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "giusl",
      "b": "gian",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "amelia",
      "b": "gian",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "giusl",
      "b": "margl",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "amelia",
      "b": "margl",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "giusl",
      "b": "livial",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "amelia",
      "b": "livial",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "giusl",
      "b": "mirella",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "amelia",
      "b": "mirella",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "franl",
      "b": "federica",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "gian",
      "b": "silvia",
      "kind": "compagna",
      "uncertain": false
    },
    {
      "a": "gian",
      "b": "gius2",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "livial",
      "b": "guerrera",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "guerrera",
      "b": "artem",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "livial",
      "b": "artem",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "mirella",
      "b": "mireia",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "margl",
      "b": "figlie",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "gaetano",
      "b": "frant",
      "kind": "fratello/sorella",
      "uncertain": false
    },
    {
      "a": "gaetano",
      "b": "annc",
      "kind": "fratello/sorella",
      "uncertain": false
    },
    {
      "a": "gaetano",
      "b": "olga",
      "kind": "fratello/sorella",
      "uncertain": false
    },
    {
      "a": "gaetano",
      "b": "titina",
      "kind": "fratello/sorella",
      "uncertain": false
    },
    {
      "a": "gaetano",
      "b": "benedetta",
      "kind": "fratello/sorella",
      "uncertain": false
    },
    {
      "a": "io",
      "b": "antonia",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "io",
      "b": "margherita_janina",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "antonia",
      "b": "margherita_janina",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "giuseppe_antenato",
      "b": "gaetano",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "lucia_capriglione",
      "b": "gaetano",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "margc",
      "b": "amedeo",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "margc",
      "b": "marcello",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "margc",
      "b": "fp",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "margc",
      "b": "giorgia_desgro",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "amedeo",
      "b": "giorgia_desgro",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "giuseppe_antenato",
      "b": "lucia_capriglione",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "isabella",
      "b": "sirya",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "isabella",
      "b": "saul",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "isabella",
      "b": "alice",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "isabella",
      "b": "pippo",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "stefania",
      "b": "lara_cristina",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "stefania",
      "b": "giorgia_perez_figlia",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "lucb",
      "b": "perez",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "lucb",
      "b": "guglielmo",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "lucb",
      "b": "isabella",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "lucb",
      "b": "stefania",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "benedetta",
      "b": "arturo",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "benedetta",
      "b": "rita",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "giuseppe_antenato",
      "b": "frant",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "giuseppe_antenato",
      "b": "annc",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "giuseppe_antenato",
      "b": "benedetta",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "giuseppe_antenato",
      "b": "olga",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "giuseppe_antenato",
      "b": "titina",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "lucia_capriglione",
      "b": "frant",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "lucia_capriglione",
      "b": "annc",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "lucia_capriglione",
      "b": "benedetta",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "lucia_capriglione",
      "b": "olga",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "lucia_capriglione",
      "b": "titina",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "titina",
      "b": "rodolfo_iovino",
      "kind": "coniuge",
      "uncertain": false
    },
    {
      "a": "figliaign",
      "b": "giulia_alessandra",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "figliaign",
      "b": "diego_alessandra",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "figliaign",
      "b": "gabriele_alessandra",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "carmine_basile",
      "b": "gennaro",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "lucia_visciano",
      "b": "gennaro",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "vincenzo_visciano",
      "b": "annb",
      "kind": "figlio",
      "uncertain": false
    },
    {
      "a": "rosa_ciavolino",
      "b": "annb",
      "kind": "figlio",
      "uncertain": false
    }
  ],
  "notes": [
    "Ramo Mortensen: Antonia Mortensen e la figlia Margherita Janina. Gli antenati di Antonia non sono ancora inseriti.",
    "La posizione per generazione dei nuclei non collegati è indicativa e non implica parentela."
  ],
  "profileOnly": [
    {
      "id": "salvatore_capriglione",
      "name": "Salvatore Capriglione",
      "branch": "Correale",
      "dates": "",
      "note": "Fratello di Lucia Capriglione.",
      "profileLinks": [
        {
          "id": "famiglia_capriglione",
          "label": "Apri Famiglia Capriglione",
          "highlight": true
        }
      ]
    }
  ],
  "familyProfiles": [
    {
      "id": "famiglia_capriglione",
      "name": "Famiglia Capriglione",
      "sections": [
        {
          "title": "Coniugi",
          "names": [
            "Salvatore Capriglione",
            "Benedetta Correale"
          ]
        },
        {
          "title": "Figli",
          "names": [
            "Italo Capriglione",
            "Anna Capriglione",
            "Renato Capriglione",
            "Lidia Capriglione",
            "Guido Capriglione",
            "Iole Capriglione"
          ]
        },
        {
          "title": "Nipoti",
          "names": [
            "Benedetta Capriglione (di Italo)",
            "Bruno Capriglione (di Italo)",
            "Gianluigi Ariemma (di Anna)",
            "Aldo Ariemma (di Anna)",
            "Sabrina Capriglione (di Renato)",
            "Mirella Capriglione (di Renato)",
            "Paola Capriglione (di Renato)",
            "Benedetta (di Lidia)",
            "Erminia (di Lidia)",
            "Claudia Capriglione (di Guido)",
            "Maura Capriglione (di Guido)"
          ]
        }
      ]
    }
  ]
};
