let lang='it',currentArea='unified',showReference=false,currentPlace=0,atlasData;
const $=s=>document.querySelector(s),t=(it,en)=>lang==='it'?it:en;
const artwork={unified:'assets/duino-mappa-unica-calda.webp',centro:'assets/centro-acquerello-v3-caldo.webp',porto:'assets/porto-acquerello-caldo.webp',fore:'assets/fore-acquerello-caldo.webp',agip:'assets/agip-acquerello-caldo.webp'};
const asset=path=>window.bundledAssets?.[path]||path;
function setLang(value){
 lang=value;document.documentElement.lang=value;
 document.title='Duino — '+t('I luoghi di una volta','A Map of Memories')+' (1999–2001) · F. Correale';
 document.querySelectorAll('[data-it]').forEach(el=>el.textContent=el.getAttribute('data-'+lang));
 document.querySelectorAll('.lang button').forEach(el=>{el.classList.toggle('active',el.id===lang);el.setAttribute('aria-pressed',el.id===lang)});
 if(atlasData){renderAreas();renderMap();renderPlaces();if($('#memory').open)renderMemory()}
}
function selectArea(key){currentArea=key;$('.map-viewport').classList.remove('zoomed');$('#zoom').setAttribute('aria-pressed',false);renderAreas();renderMap()}
function renderAreas(){
 const el=$('#areas');el.replaceChildren();
 el.hidden=true;
 $('#reference').textContent=t(showReference?'Mostra gli acquerelli':'Confronta con il satellite',showReference?'Show watercolors':'Compare with satellite');
 $('#reference').setAttribute('aria-pressed',showReference);
 $('#zoom').hidden=false;
}
function areaSize(key){if(key==='unified')return [1536,1024];return showReference&&key==='agip'?[976,1042]:atlasData.areas[key].size}
function areaSource(key){return asset(showReference?'assets/duino-satellite.webp':artwork[key])}
function areaAlt(key){if(key==='unified')return showReference?t('Duino — vista satellitare senza annotazioni','Duino — satellite view without annotations'):t('Duino — mappa unica ad acquerello','Duino — unified watercolor map');return atlasData.areas[key].name[lang==='it'?0:1]+t(showReference?' — satellite annotato':' — acquerello',showReference?' — annotated satellite':' — watercolor')}
let tooltipAnchor=null;
function hidePinName(){const tip=$('#pin-tooltip');tip.hidden=true;if(tooltipAnchor)tooltipAnchor.removeAttribute('aria-describedby');tooltipAnchor=null}
function showPinName(button,name){
 hidePinName();tooltipAnchor=button;const tip=$('#pin-tooltip');tip.textContent=name;tip.hidden=false;button.setAttribute('aria-describedby','pin-tooltip');
 const rect=button.getBoundingClientRect(),box=tip.getBoundingClientRect();
 tip.style.left=Math.max(8,Math.min(innerWidth-box.width-8,rect.left+rect.width/2-box.width/2))+'px';
 tip.style.top=(rect.bottom+box.height+12>innerHeight?Math.max(8,rect.top-box.height-8):rect.bottom+8)+'px';
}
window.addEventListener('scroll',hidePinName,true);window.addEventListener('resize',hidePinName);
document.addEventListener('keydown',e=>{if(e.key==='Escape')hidePinName()});
function populatePins(container,key){
 const size=areaSize(key);container.replaceChildren();
 atlasData.places.forEach((p,i)=>{
  if(key==='unified'?!p.illustration:p.area!==key)return;
  const [x,y]=key==='unified'?p.illustration:[p.x,p.y];
  const b=document.createElement('button');b.type='button';b.className='pin';b.textContent=p.id;b.setAttribute('aria-label',`${p.id}. ${p.name}`);
  b.style.left=`clamp(16px, ${x/size[0]*100}%, calc(100% - 16px))`;
  b.style.top=`clamp(30px, ${y/size[1]*100}%, calc(100% - 8px))`;
  b.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch')showPinName(b,p.name)});
  b.addEventListener('pointerleave',hidePinName);
  b.addEventListener('focus',()=>showPinName(b,p.name));
  b.addEventListener('blur',hidePinName);
  b.onclick=()=>{hidePinName();openPlace(i)};container.append(b);
 });
}
function renderMap(){
 hidePinName();
 const inset=$('#overview'),viewport=$('.map-viewport');viewport.hidden=false;inset.replaceChildren();inset.hidden=currentArea!=='unified';
 const size=areaSize(currentArea);$('#map-stage').style.setProperty('--map-width',`${size[0]/size[1]*900}px`);
 $('#map-art').src=areaSource(currentArea);$('#map-art').alt=areaAlt(currentArea);
 $('#map-caption').hidden=showReference;
 $('#map-caption').textContent='Duino · 1999–2001';
 $('#pins').replaceChildren();if(!showReference)populatePins($('#pins'),currentArea);
 $('#satellite-credit').hidden=!showReference;
 const figure=document.createElement('figure');figure.className='overview-panel agip';
 const caption=document.createElement('figcaption');caption.textContent=t('AGIP · A4 nord','AGIP · north of A4');
 const img=document.createElement('img');img.src=asset(artwork.agip);img.alt=t('AGIP — acquerello','AGIP — watercolor');
 const stage=document.createElement('div');stage.className='overview-stage';const open=document.createElement('button');open.type='button';open.className='agip-photo-button';open.setAttribute('aria-label',t('Apri le foto AGIP','Open AGIP photos'));open.onclick=()=>openPlace(atlasData.places.findIndex(p=>p.key==='agip'));open.append(img);stage.append(open);figure.append(caption,stage);inset.append(figure);
}

function renderPlaces(){const el=$('#places');el.replaceChildren();atlasData.places.forEach((p,i)=>{const b=document.createElement('button');b.className='place-row'+(!p.area?' pending':'');b.type='button';const number=document.createElement('span');number.textContent=p.id;b.append(number,document.createTextNode(p.name));if(p.key==='agip'){const row=document.createElement('div');row.className='place-row';row.append(...b.childNodes);el.append(row)}else{b.onclick=()=>openPlace(i);el.append(b)}})}
function openPlace(i){currentPlace=i;renderMemory();if(!$('#memory').open)$('#memory').showModal()}
function renderMemory(){
 const p=atlasData.places[currentPlace];$('#memory-title').textContent=p.name;$('#memory-number').textContent=`DUINO · 1999–2001 · ${p.id}`;
 $('#memory-count').textContent=`${currentPlace+1} / ${atlasData.places.length}`;
 $('#previous').setAttribute('aria-label',t('Luogo precedente','Previous place'));$('#next').setAttribute('aria-label',t('Luogo successivo','Next place'));
 const body=$('#memory-body');body.replaceChildren();
 if(p.key==='bocciofila'){
  const quote=document.createElement('blockquote');quote.textContent='Un bicerin de vin e sugo de palle de toro';body.append(quote);
  const gallery=document.createElement('div');gallery.className='polaroid-gallery';
  const photos=[['bocciofila-campo.webp',t('Campo della Bocciofila','Bocciofila court')],['bocciofila-targa.webp',t('Targa della Bocciofila Duinese','Bocciofila Duinese plaque')],['bocciofila-esterno.webp',t('Esterno della Bocciofila','Bocciofila exterior')]];
  photos.forEach(([file,alt])=>{const frame=document.createElement('figure');frame.className='polaroid';const img=document.createElement('img');img.src=asset('assets/'+file);img.alt=alt;img.decoding='async';const label=document.createElement('figcaption');frame.append(img,label);gallery.append(frame)});body.append(gallery);
 }else if(p.key==='agip'){
  const gallery=document.createElement('div');gallery.className='product-gallery';
  [['agip-limoncello.webp','Limoncello Mari Mayans'],['agip-faxe.webp','Faxe Premium'],['agip-graspa.webp','Graspa de casa']].forEach(([file,alt])=>{const img=document.createElement('img');img.src=asset('assets/'+file);img.alt=alt;gallery.append(img)});body.append(gallery);
 }else if(p.key==='mickey-mouse'){
  const gallery=document.createElement('div');gallery.className='polaroid-gallery';
  const photos=[['mickey-mouse-dettaglio.webp',t('Dettaglio del bancone del Mickey Mouse','Detail of the Mickey Mouse counter')],['mickey-mouse-bancone.webp',t('Bancone del Mickey Mouse','Mickey Mouse counter')],['mickey-mouse-bar.webp',t('Interno del bar Mickey Mouse','Inside the Mickey Mouse bar')],['mickey-mouse-sala.webp',t('Sala del Mickey Mouse','Mickey Mouse interior')]];
  photos.forEach(([file,alt])=>{const frame=document.createElement('figure');frame.className='polaroid';const img=document.createElement('img');img.src=asset('assets/'+file);img.alt=alt;img.decoding='async';const label=document.createElement('figcaption');frame.append(img,label);gallery.append(frame)});body.append(gallery);
 }else if(p.key==='al-castel'){
  const gallery=document.createElement('div');gallery.className='polaroid-gallery';
  const photos=[['al-castel-brindisi.webp',t('Brindisi ad Al Castel','A toast at Al Castel')],['al-castel-tavolo.webp',t('Foto al tavolo di Al Castel','At a table at Al Castel')],['al-castel-gruppo.webp',t('Foto di gruppo ad Al Castel','Group photo at Al Castel')]];
  photos.forEach(([file,alt])=>{const frame=document.createElement('figure');frame.className='polaroid';const img=document.createElement('img');img.src=asset('assets/'+file);img.alt=alt;img.decoding='async';const label=document.createElement('figcaption');frame.append(img,label);gallery.append(frame)});body.append(gallery);
 }else if(p.key==='office-building'){
  const gallery=document.createElement('div');gallery.className='polaroid-gallery';
  const frame=document.createElement('figure');frame.className='polaroid';
  const img=document.createElement('img');img.src=asset('assets/office-building-chitarra.webp');img.alt=t('Chitarra davanti all’ingresso dell’Office Building','Guitar outside the Office Building entrance');img.decoding='async';
  const label=document.createElement('figcaption');frame.append(img,label);gallery.append(frame);body.append(gallery);
 }else if(p.key==='fore-lawn'){
  const gallery=document.createElement('div');gallery.className='polaroid-gallery';
  const photos=[['fore-lawn-festa.webp',t('Festa a Fore Lawn','Celebration at Fore Lawn')],['fore-lawn-panorama.webp',t('Tavoli sul prato di Fore Lawn','Tables on Fore Lawn')],['fore-lawn-tavolo.webp',t('Foto di gruppo al tavolo a Fore Lawn','Group at a table on Fore Lawn')],['fore-lawn-ricordo.webp',t('Un momento a Fore Lawn','A moment on Fore Lawn')]];
  photos.forEach(([file,alt])=>{const frame=document.createElement('figure');frame.className='polaroid';const img=document.createElement('img');img.src=asset('assets/'+file);img.alt=alt;img.decoding='async';const label=document.createElement('figcaption');frame.append(img,label);gallery.append(frame)});body.append(gallery);
 }else if(p.key==='fore'){
  const gallery=document.createElement('div');gallery.className='polaroid-gallery';
  const photos=[['fore-frigo.webp',t('Frigorifero a Fore','Refrigerator at Fore')],['fore-panorama.webp',t('Vista sul mare e sul castello','View of the sea and castle')],['fore-interno.webp',t('Interno di Fore','Inside Fore')]];
  photos.forEach(([file,alt])=>{const frame=document.createElement('figure');frame.className='polaroid';const img=document.createElement('img');img.src=asset('assets/'+file);img.alt=alt;img.decoding='async';const label=document.createElement('figcaption');frame.append(img,label);gallery.append(frame)});body.append(gallery);
 }else if(p.key==='school-building'){
  const gallery=document.createElement('div');gallery.className='polaroid-gallery';
  const frame=document.createElement('figure');frame.className='polaroid';
  const img=document.createElement('img');img.src=asset('assets/school-building-targa.webp');img.alt=t('Targa dello School Building','School Building plaque');img.decoding='async';
  const label=document.createElement('figcaption');frame.append(img,label);gallery.append(frame);body.append(gallery);
 }else if(p.key==='porto'){
  const gallery=document.createElement('div');gallery.className='polaroid-gallery';
  const photos=[['porto-giorno.webp',t('Il porto di giorno','The harbour by day')],['porto-amici.webp',t('Foto di gruppo al porto','Group photo at the harbour')],['porto-luna.webp',t('La luna sul mare','Moon over the sea')],['porto-ritoccata.webp',t('Veduta del porto — foto ritoccata','Harbour view — edited photo')]];
  photos.forEach(([file,alt])=>{const frame=document.createElement('figure');frame.className='polaroid';const img=document.createElement('img');img.src=asset('assets/'+file);img.alt=alt;img.decoding='async';const label=document.createElement('figcaption');frame.append(img,label);gallery.append(frame)});body.append(gallery);
 }else if(p.key==='al-barone'){
  const gallery=document.createElement('div');gallery.className='polaroid-gallery';
  const frame=document.createElement('figure');frame.className='polaroid';
  const img=document.createElement('img');img.src=asset('assets/al-barone.webp');img.alt=t('Al Barone — foto dall’archivio','Al Barone — archive photo');img.decoding='async';
  const label=document.createElement('figcaption');frame.append(img,label);gallery.append(frame);body.append(gallery);
 }else if(p.key==='tuttidi'){
  const gallery=document.createElement('div');gallery.className='polaroid-gallery';
  const photos=[['tuttidi-panino.webp',t('Panino con mortadella e peperoncino','Sandwich with mortadella and chili pepper'),'Panino arabo, mortadella e peperoncino'],['tuttidi-ingresso.webp',t('Ingresso del TuttiDi','TuttiDi entrance'),'']];
  photos.forEach(([file,alt,caption])=>{const frame=document.createElement('figure');frame.className='polaroid';const img=document.createElement('img');img.src=asset('assets/'+file);img.alt=alt;img.decoding='async';frame.append(img);const label=document.createElement('figcaption');label.textContent=caption;frame.append(label);gallery.append(frame)});
  body.append(gallery);
 }else if(p.key==='lucchese'){
  const gallery=document.createElement('div');gallery.className='polaroid-gallery';
  const photos=[['lucchese-albero.webp',t('Albero a Lucchese','Tree at Lucchese'),'❤️'],['lucchese-mare.webp',t('Vista sul mare da Lucchese','Sea view from Lucchese'),''],['lucchese-giardino.webp',t('Giardino di Lucchese','Lucchese garden'),'']];
  photos.forEach(([file,alt,caption])=>{const frame=document.createElement('figure');frame.className='polaroid';const img=document.createElement('img');img.src=asset('assets/'+file);img.alt=alt;img.decoding='async';const label=document.createElement('figcaption');label.textContent=caption;frame.append(img,label);gallery.append(frame)});body.append(gallery);
  const link=document.createElement('a');link.className='story-link';link.href=window.chapterBase||'../02-lucchese-1.html';link.textContent=t('Leggi Lucchese #3 →','Read Lucchese #3 →');body.append(link);
 }else{const empty=document.createElement('p');empty.className='empty';empty.textContent=t('Foto e storia da aggiungere dall’archivio.','Photo and story to be added from the archive.');body.append(empty)}
 if(p.key==='agip'){const note=document.createElement('p');note.textContent=t('AGIP, lato nord della A4. Il nome resta quello del 1999–2001.','AGIP, on the north side of the A4. The name remains the one used in 1999–2001.');body.append(note)}
 if(p.area){const note=document.createElement('p');note.textContent=t('Il pin è adattato alla mappa illustrata.','The pin is adapted to the illustrated map.');body.append(note)}
}
$('#close').onclick=()=>$('#memory').close();
$('#memory').addEventListener('click',e=>{if(e.target===$('#memory')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}});
$('#previous').onclick=()=>openPlace((currentPlace+atlasData.places.length-1)%atlasData.places.length);
$('#next').onclick=()=>openPlace((currentPlace+1)%atlasData.places.length);
$('#reference').onclick=()=>{showReference=!showReference;selectArea('unified')};
$('#zoom').onclick=()=>{const active=$('.map-viewport').classList.toggle('zoomed');$('#zoom').setAttribute('aria-pressed',active)};

atlasData={"areas": {"centro": {"size": [1214, 1190], "name": ["Il centro", "The village"], "roads": ["M-30 1015 C180 1010 430 1000 540 1000 S780 1060 1240 1090", "M65 -20 C110 160 258 255 390 430 S510 700 550 900 L620 995", "M490 920 L360 785 L170 680 L-20 530", "M700 765 L1220 620"], "buildings": ["625,645 680,615 714,711 657,737", "273,192 320,170 443,329 402,369", "646,939 789,956 785,998 642,976", "611,1040 787,1068 771,1126 603,1098", "392,1038 505,1050 514,1160 417,1148", "830,15 923,30 906,92 821,74", "821,146 936,168 899,306 782,280", "760,289 897,321 876,425 728,390", "962,210 1050,224 1004,457 920,434", "58,142 99,111 176,236 135,268", "265,425 308,394 390,484 348,522", "394,621 433,609 467,711 421,728", "654,792 700,781 741,885 685,906", "343,764 383,742 483,849 450,879"], "greens": ["M540 100 Q605 62 667 110 L688 218 L608 253 L543 216 Z"]}, "porto": {"size": [2048, 928], "name": ["Lucchese e il porto", "Lucchese & the harbour"], "coast": "M0 0 L2048 0 L2048 928 L1060 928 L980 867 L891 877 L810 846 L741 817 L653 790 L612 746 L541 725 L496 653 L444 650 L402 581 L366 542 L323 490 L264 454 L203 453 L188 476 L268 484 L318 530 L364 603 L405 657 L441 650 L480 608 L562 591 L594 550 L567 476 L532 406 L458 399 L352 397 L351 354 L392 289 L330 200 L275 145 L227 94 L167 60 Z", "roads": ["M2048 429 C1740 445 1430 457 1160 449 C930 440 860 325 690 272 C640 255 622 212 614 184", "M685 275 C627 323 669 395 698 456 L752 526", "M620 250 C602 325 625 420 597 480 L578 570", "M923 350 C953 227 1063 140 1100 -20", "M1290 440 L1560 134 L1830 -20", "M1990 397 C1950 233 1920 120 1850 -20"], "buildings": ["516,139 574,99 653,164 611,211", "492,266 536,246 574,298 533,328", "601,367 641,352 664,409 624,424", "667,294 704,277 748,323 709,344", "1470,47 1530,26 1562,82 1500,109", "1573,0 1619,0 1641,42 1600,61", "1473,248 1531,227 1593,272 1553,313 1493,306", "1900,460 1973,464 1961,545 1892,542", "1740,540 1839,520 1858,559 1754,580", "1617,621 1710,590 1724,629 1643,662"], "greens": []}, "fore": {"size": [1548, 1162], "name": ["Fore e il mare", "Fore & the sea"], "coast": "M0 0 H1548 V819 L1480 811 L1440 838 L1371 862 L1337 900 L1272 915 L1180 902 L1101 924 L1020 933 L948 940 L884 958 L800 967 L719 1009 L620 1026 L559 1085 L497 1090 L437 1162 H0 Z", "roads": ["M-20 139 C220 143 410 130 550 139 S820 204 1040 221 S1360 245 1570 211", "M505 113 L468 230 L420 353 L369 475 L323 650 L340 760"], "buildings": ["690,494 929,501 935,568 732,546 696,630 655,612", "827,460 888,439 913,493 851,509", "342,821 401,805 450,947 399,969", "414,776 455,763 530,964 487,1007 461,936", "338,822 356,1026 478,995 496,1032 346,1083 310,877", "340,168 479,161 477,300 353,330", "555,167 763,203 750,249 551,211", "598,45 792,73 786,124 589,95", "871,241 1018,267 1005,310 860,291", "1221,288 1325,279 1332,326 1228,337"], "greens": ["M1009 429 Q1050 397 1082 433 T1133 490 T1220 541 T1325 559 T1420 480 T1548 458"]}, "agip": {"size": [976, 530], "name": ["AGIP · A4 nord", "AGIP · north of A4"], "roads": ["M-30 285 L1000 548", "M5 217 Q113 222 226 122 T403 81 L720 171 Q810 230 894 350 L970 423"], "buildings": ["352,140 393,150 381,194 340,181", "420,164 534,196 521,230 409,201", "344,234 382,226 397,263 360,275", "479,283 517,273 532,309 494,320"], "greens": []}}, "places": [{"id": 1, "name": "School Building", "area": "centro", "x": 666, "y": 679, "positionStatus": "source-traced", "illustration": [1090, 306], "key": "school-building"}, {"id": 2, "name": "Office Building", "area": "centro", "x": 696, "y": 1083, "positionStatus": "source-traced", "illustration": [1105, 504], "key": "office-building"}, {"id": 3, "name": "Mickey Mouse", "area": "centro", "x": 758, "y": 970, "positionStatus": "source-traced", "illustration": [1137, 450], "key": "mickey-mouse"}, {"id": 4, "name": "Al Castel", "area": "centro", "x": 641, "y": 945, "positionStatus": "source-traced", "illustration": [1090, 442], "key": "al-castel"}, {"id": 5, "name": "TuttiDi", "area": "centro", "x": 458, "y": 1100, "positionStatus": "source-traced", "illustration": [980, 510], "key": "tuttidi"}, {"id": 6, "name": "Lucchese", "area": "porto", "x": 594, "y": 174, "positionStatus": "source-traced", "illustration": [327, 358], "key": "lucchese"}, {"id": 7, "name": "Porto", "area": "porto", "x": 471, "y": 384, "positionStatus": "source-traced", "illustration": [254, 475], "key": "porto"}, {"id": 8, "name": "Ples", "area": "centro", "x": 353, "y": 269, "positionStatus": "source-traced", "illustration": [939, 111], "key": "ples"}, {"id": 9, "name": "Pala", "area": "centro", "x": 869, "y": 57, "positionStatus": "source-traced", "illustration": [1247, 16], "key": "pala"}, {"id": 10, "name": "Bocciofila", "area": "centro", "x": null, "y": null, "positionStatus": "user-confirmed-illustration", "key": "bocciofila", "illustration": [1186, 205]}, {"id": 11, "name": "Fore", "area": "fore", "x": 814, "y": 542, "positionStatus": "source-traced", "illustration": [1185, 684], "key": "fore"}, {"id": 12, "name": "Fore Lawn", "area": "fore", "x": 1040, "y": 523, "positionStatus": "source-traced", "illustration": [1321, 699], "key": "fore-lawn"}, {"id": 13, "name": "Rilke Path", "area": "fore", "x": 1331, "y": 587, "positionStatus": "source-traced", "illustration": [1460, 742], "key": "rilke-path"}, {"id": 14, "name": "Al Barone", "area": "porto", "x": 1506, "y": 77, "positionStatus": "source-traced", "illustration": [777, 313], "key": "al-barone"}, {"id": 15, "name": "Nepentha", "area": "porto", "x": 1605, "y": 34, "positionStatus": "source-traced", "illustration": [818, 291], "key": "nepentha"}, {"id": 16, "name": "AGIP", "area": "agip", "x": 479, "y": 257, "positionStatus": "source-traced", "key": "agip"}]};
setLang(new URLSearchParams(location.search).get("lang")==="en"?"en":"it");
