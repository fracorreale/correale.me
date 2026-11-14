// Valori per 100 g, CREA. Schede consultate il 14 novembre 2026.
const cookingFoods = [
  {
    "id": "000800",
    "name": "Pasta di semola",
    "baseId": "4-0",
    "cat": "Farinacei e cereali",
    "raw": {
      "kcal": 341.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/000800",
      "title": "Pasta di semola"
    },
    "cooked": {
      "kcal": 175.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/000805",
      "title": "Pasta di semola, cotta, bollita"
    },
    "method": "Bollita"
  },
  {
    "id": "000850",
    "name": "Pasta integrale",
    "baseId": "4-1",
    "cat": "Farinacei e cereali",
    "raw": {
      "kcal": 330.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/000850",
      "title": "Pasta di semola, integrale"
    },
    "cooked": {
      "kcal": 182.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/000855",
      "title": "Pasta di semola, integrale, cotta, bollita"
    },
    "method": "Bollita"
  },
  {
    "id": "000100",
    "name": "Riso brillato",
    "baseId": "4-2",
    "cat": "Farinacei e cereali",
    "raw": {
      "kcal": 334.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/000100",
      "title": "Riso, brillato"
    },
    "cooked": {
      "kcal": 100.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/000105",
      "title": "Riso, brillato, cotto, bollito"
    },
    "method": "Bollito"
  },
  {
    "id": "000110",
    "name": "Riso integrale",
    "baseId": "4-3",
    "cat": "Farinacei e cereali",
    "raw": {
      "kcal": 341.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/000110",
      "title": "Riso, integrale"
    },
    "cooked": {
      "kcal": 113.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/000115",
      "title": "Riso, integrale, cotto, bollito"
    },
    "method": "Bollito"
  },
  {
    "id": "000045",
    "name": "Cous cous",
    "baseId": "4-6",
    "cat": "Farinacei e cereali",
    "raw": {
      "kcal": 361.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/000045",
      "title": "Couscous, crudo"
    },
    "cooked": {
      "kcal": 179.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/000046",
      "title": "Couscous, cotto"
    },
    "method": "Cotto in acqua"
  },
  {
    "id": "000020",
    "name": "Farro perlato",
    "baseId": "4-7",
    "cat": "Farinacei e cereali",
    "raw": {
      "kcal": 353.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/000020",
      "title": "Farro perlato, crudo"
    },
    "cooked": {
      "kcal": 178.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/000025",
      "title": "Farro perlato, cotto, bollito"
    },
    "method": "Bollito"
  },
  {
    "id": "106500",
    "name": "Petto di pollo",
    "baseId": "1-0",
    "cat": "Carne",
    "raw": {
      "kcal": 100.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/106500",
      "title": "Pollo, petto, crudo"
    },
    "cooked": {
      "kcal": 129.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/106506",
      "title": "Pollo, petto, cotto, in padella"
    },
    "method": "In padella, senza grassi aggiunti"
  },
  {
    "id": "121420",
    "name": "Merluzzo surgelato",
    "baseId": null,
    "cat": "Pesce",
    "raw": {
      "kcal": 75.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/121420",
      "title": "Merluzzo o nasello, surgelato"
    },
    "cooked": {
      "kcal": 78.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/121423",
      "title": "Merluzzo o nasello, surgelato, cotto, in forno"
    },
    "method": "Al forno, senza grassi aggiunti"
  },
  {
    "id": "004000",
    "name": "Ceci secchi",
    "baseId": "3-0",
    "cat": "Legumi",
    "raw": {
      "kcal": 343.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/004000",
      "title": "Ceci, secchi"
    },
    "cooked": {
      "kcal": 132.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/004005",
      "title": "Ceci, secchi, cotti, bolliti"
    },
    "method": "Lessati e scolati"
  },
  {
    "id": "004500",
    "name": "Lenticchie secche",
    "baseId": "3-1",
    "cat": "Legumi",
    "raw": {
      "kcal": 319.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/004500",
      "title": "Lenticchie, secche"
    },
    "cooked": {
      "kcal": 109.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/004505",
      "title": "Lenticchie, secche, cotte, bollite"
    },
    "method": "Lessate e scolate"
  },
  {
    "id": "004120",
    "name": "Fagioli borlotti secchi",
    "baseId": "3-2",
    "cat": "Legumi",
    "raw": {
      "kcal": 312.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/004120",
      "title": "Fagioli, Borlotti, secchi"
    },
    "cooked": {
      "kcal": 106.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/004125",
      "title": "Fagioli, Borlotti, secchi, cotti, bolliti"
    },
    "method": "Lessati e scolati"
  },
  {
    "id": "005110",
    "name": "Broccoli",
    "baseId": "5-4",
    "cat": "Ortaggi",
    "raw": {
      "kcal": 33.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/005110",
      "title": "Broccolo a testa, crudo"
    },
    "cooked": {
      "kcal": 34.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/005105",
      "title": "Broccolo a testa, cotto, bollito"
    },
    "method": "Bolliti"
  },
  {
    "id": "005150",
    "name": "Carote",
    "baseId": "5-1",
    "cat": "Ortaggi",
    "raw": {
      "kcal": 41.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/005150",
      "title": "Carote, crude"
    },
    "cooked": {
      "kcal": 47.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/005155",
      "title": "Carote, cotte, bollite"
    },
    "method": "Bollite"
  },
  {
    "id": "005320",
    "name": "Finocchi",
    "baseId": "5-3",
    "cat": "Ortaggi",
    "raw": {
      "kcal": 15.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/005320",
      "title": "Finocchi, crudi"
    },
    "cooked": {
      "kcal": 17.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/005325",
      "title": "Finocchi, cotti, bolliti"
    },
    "method": "Bolliti"
  },
  {
    "id": "005700",
    "name": "Spinaci",
    "baseId": "5-5",
    "cat": "Ortaggi",
    "raw": {
      "kcal": 35.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/005700",
      "title": "Spinaci, crudi"
    },
    "cooked": {
      "kcal": 41.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/005705",
      "title": "Spinaci, cotti, bolliti"
    },
    "method": "Bolliti"
  },
  {
    "id": "005730",
    "name": "Zucchine",
    "baseId": "5-0",
    "cat": "Ortaggi",
    "raw": {
      "kcal": 16.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/005730",
      "title": "Zucchine, crude"
    },
    "cooked": {
      "kcal": 30.0,
      "url": "https://www.alimentinutrizione.it/tabelle-nutrizionali/005735",
      "title": "Zucchine, cotte, bollite"
    },
    "method": "Bollite"
  }
];
