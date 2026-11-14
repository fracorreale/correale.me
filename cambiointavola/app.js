const categories=[['Latticini','🥛'],['Carne','🍗'],['Pesce','🐟'],['Legumi','🫘'],['Farinacei e cereali','🌾'],['Ortaggi','🥬'],['Frutta','🍎']];
const groups=[
[['Ricotta vaccina',146],['Mozzarella vaccina',253],['Fiocchi di latte',98],['Yogurt bianco intero',66],['Yogurt greco 0%',59],['Latte parzialmente scremato',46],['Parmigiano',387],['Stracchino',300]],
[['Petto di pollo, crudo',100],['Petto di tacchino, crudo',107],['Vitello magro, crudo',107],['Manzo magro, crudo',129],['Lonza di maiale, cruda',146],['Coniglio, crudo',118],['Bresaola',151],['Prosciutto cotto',215]],
[['Merluzzo, crudo',71],['Tonno al naturale, sgocciolato',103],['Tonno sott’olio, sgocciolato',192],['Salmone fresco, crudo',185],['Orata, cruda',121],['Sogliola, cruda',83],['Sgombro, crudo',170],['Gamberi, crudi',71]],
[['Ceci, lessati e scolati',120],['Lenticchie, lessate e scolate',92],['Fagioli borlotti, lessati',102],['Fagioli cannellini, lessati',91],['Piselli, lessati',64],['Fave, lessate',49],['Fagioli rossi, lessati',100],['Soia, lessata',172]],
[['Pasta di semola, secca',353],['Pasta integrale, secca',330],['Riso brillato, crudo',332],['Riso integrale, crudo',337],['Pane comune',275],['Fiocchi di avena',367],['Cous cous, secco',356],['Farro, secco',335]],
[['Zucchine, crude',15],['Carote, crude',35],['Pomodori, crudi',19],['Finocchi, crudi',15],['Broccoli, crudi',39],['Spinaci, crudi',31],['Melanzane, crude',18],['Peperoni, crudi',22]],
[['Mela, senza torsolo',44],['Pera, senza torsolo',35],['Banana, senza buccia',76],['Arancia, senza buccia',34],['Kiwi, senza buccia',44],['Mandarino, senza buccia',72],['Fragole',30],['Uva',61]]
];
const base=groups.flatMap((items,c)=>items.map(([name,kcal],i)=>({id:`${c}-${i}`,name,kcal,cat:categories[c][0]})));
let custom=[];let storageOK=true;try{const saved=JSON.parse(localStorage.getItem('cambio-foods-v1')||'[]');if(Array.isArray(saved))custom=saved.filter(f=>f&&typeof f.id==='string'&&typeof f.name==='string'&&f.name.length<=80&&categories.some(c=>c[0]===f.cat)&&Number.isFinite(f.kcal)&&f.kcal>0&&f.kcal<=900)}catch{storageOK=false}
const $=id=>document.getElementById(id);const fmt=n=>new Intl.NumberFormat('it-IT',{maximumFractionDigits:1}).format(n);const all=()=>[...base,...custom];
const alphabetic=(a,b)=>a.name.localeCompare(b.name,'it',{sensitivity:'base'});
for(const id of ['category','newCat'])[...categories].sort((a,b)=>a[0].localeCompare(b[0],'it')).forEach(([name,icon])=>{const o=document.createElement('option');o.value=name;o.textContent=`${icon}  ${name}`;$(id).append(o)});
$('category').value='Latticini';
function foods(selected){$('food').replaceChildren();all().filter(f=>f.cat===$('category').value).sort(alphabetic).forEach(f=>{const o=document.createElement('option');o.value=f.id;o.textContent=f.name;$('food').append(o)});if(selected)$('food').value=selected;render()}
function render(){const food=all().find(f=>f.id===$('food').value);const weight=Number($('weight').value);const valid=Number.isFinite(weight)&&weight>0&&weight<=10000;const energy=valid?weight*food.kcal/100:0;$('energy').textContent=valid?`${fmt(energy)} kcal`:'—';$('state').textContent=valid?`${food.kcal} kcal per 100 g · Peso riferito all’alimento come descritto, senza condimenti.`:'Inserisci un peso tra 1 e 10.000 grammi.';document.querySelectorAll('[data-weight]').forEach(b=>b.classList.toggle('active',Number(b.dataset.weight)===weight));const others=all().filter(f=>f.cat===food.cat&&f.id!==food.id).sort(alphabetic);$('count').textContent=`${others.length} alternative`;$('summary').textContent=valid?`Al posto di ${fmt(weight)} g di ${food.name.toLowerCase()}, circa ${fmt(energy)} kcal.`:'Le alternative appariranno quando inserisci un peso valido.';$('alternatives').replaceChildren();if(!valid)return;others.forEach(f=>{const row=document.createElement('div');row.className='alternative';const icon=document.createElement('div');icon.className='food-icon';icon.textContent=categories.find(c=>c[0]===f.cat)[1];const content=document.createElement('div');content.className='food-text';const name=document.createElement('strong');name.textContent=f.name;const small=document.createElement('small');small.textContent=`${f.kcal} kcal / 100 g${f.custom?' · Il tuo alimento':''}`;content.append(name,small);const grams=document.createElement('div');grams.className='grams';grams.textContent=new Intl.NumberFormat('it-IT').format(Math.round(energy*100/f.kcal));const unit=document.createElement('small');unit.textContent=' g';grams.append(unit);row.append(icon,content,grams);$('alternatives').append(row)})}
$('category').addEventListener('change',()=>foods());$('food').addEventListener('change',render);$('weight').addEventListener('input',render);document.querySelectorAll('[data-weight]').forEach(b=>b.onclick=()=>{$('weight').value=b.dataset.weight;render()});
function save(){try{localStorage.setItem('cambio-foods-v1',JSON.stringify(custom));storageOK=true}catch{storageOK=false}return storageOK}
function list(){ $('customList').replaceChildren();[...custom].sort(alphabetic).forEach(f=>{const row=document.createElement('div');row.className='custom-row';const name=document.createElement('span');name.textContent=`${f.name} · ${f.kcal} kcal/100 g`;const del=document.createElement('button');del.type='button';del.textContent='Elimina';del.setAttribute('aria-label',`Elimina ${f.name}`);del.onclick=()=>{custom=custom.filter(x=>x.id!==f.id);save();list();foods()};row.append(name,del);$('customList').append(row)});$('storageStatus').textContent=storageOK?'':'Il browser non consente il salvataggio: le aggiunte restano solo per questa sessione.'}
$('manage').onclick=()=>{$('newCat').value=$('category').value;list();$('dialog').showModal()};$('close').onclick=()=>$('dialog').close();$('sources').onclick=e=>{e.preventDefault();$('info').showModal()};$('closeInfo').onclick=()=>$('info').close();
$('addForm').onsubmit=e=>{e.preventDefault();const name=$('newName').value.trim();if(!name){$('newName').setCustomValidity('Inserisci un nome.');$('newName').reportValidity();return}const f={id:crypto.randomUUID(),name,kcal:Number($('newKcal').value),cat:$('newCat').value,custom:true};custom.push(f);save();$('category').value=f.cat;foods(f.id);$('newName').value='';$('newKcal').value='';list();$('storageStatus').textContent=storageOK?'Alimento aggiunto e salvato in questo browser.':'Alimento aggiunto solo per questa sessione: salvataggio non disponibile.'};$('newName').oninput=()=>$('newName').setCustomValidity('');foods();

// Confronto a parità di peso: valori CREA misurati, senza fattori di conversione.
function caloriesForWeight(weight,kcalPer100){return weight*kcalPer100/100}
[...cookingFoods].sort(alphabetic).forEach(food=>{const option=document.createElement('option');option.value=food.id;option.textContent=food.name;$('cookingFood').append(option)});
function renderCooking(){
 const food=cookingFoods.find(f=>f.id===$('cookingFood').value);
 const weight=Number($('cookingWeight').value);
 const valid=Number.isFinite(weight)&&weight>0&&weight<=10000;
 $('cookingValidation').hidden=valid;
 $('cookingValidation').textContent=valid?'':'Inserisci un peso tra 1 e 10.000 grammi.';
 $('cookingWeight').setAttribute('aria-invalid',String(!valid));
 $('rawLabel').textContent=food.cat==='Legumi'||food.cat==='Farinacei e cereali'?'Crudo / secco':'Crudo';
 for(const [state,prefix] of [['raw','raw'],['cooked','cooked']]){
  $(prefix+'Weight').textContent=valid?fmt(weight)+' g':'—';
  $(prefix+'Energy').textContent=valid?fmt(caloriesForWeight(weight,food[state].kcal))+' kcal':'—';
  $(prefix+'Density').textContent=fmt(food[state].kcal)+' kcal / 100 g';
  $(prefix+'Source').href=food[state].url;
  $(prefix+'Source').title=food[state].title;
 }
 $('cookingMethod').textContent='Cottura di riferimento: '+food.method+'.';
}
$('manage2').onclick=()=>{
 const selected=cookingFoods.find(f=>f.baseId===$('food').value);
 $('cookingFood').value=selected?selected.id:'000800';
 const weight=Number($('weight').value);
 $('cookingWeight').value=Number.isFinite(weight)&&weight>0&&weight<=10000?weight:100;
 renderCooking();$('cookingDialog').showModal();
};
$('closeCooking').onclick=()=>$('cookingDialog').close();
$('cookingFood').addEventListener('change',renderCooking);
$('cookingWeight').addEventListener('input',renderCooking);
