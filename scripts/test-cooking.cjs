const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const html=fs.readFileSync('cambiointavola/index.html','utf8');
class Element{
 constructor(){this.children=[];this.value='';this.textContent='';this.hidden=false;this.handlers={};this.classList={toggle(){}};this.dataset={};}
 append(...els){this.children.push(...els);if(!this.value&&els[0]?.value)this.value=els[0].value;}
 replaceChildren(...els){this.children=[];this.value='';this.append(...els);}
 addEventListener(name,fn){this.handlers[name]=fn;}
 setAttribute(name,value){this[name]=value;}
 setCustomValidity(){} reportValidity(){} showModal(){this.open=true;} close(){this.open=false;}
}
const els=Object.fromEntries([...html.matchAll(/id="([^"]+)"/g)].map(m=>[m[1],new Element()]));
els.weight.value=150;
const context=vm.createContext({console,Intl,Number,crypto:require('node:crypto').webcrypto,localStorage:{getItem:()=>null,setItem(){}},document:{getElementById:id=>{assert.ok(els[id],`Missing element ${id}`);return els[id]},createElement:()=>new Element(),querySelectorAll:()=>[]}});
vm.runInContext(fs.readFileSync('cambiointavola/cooking-data.js','utf8'),context);
vm.runInContext(fs.readFileSync('cambiointavola/app.js','utf8'),context);
const run=s=>vm.runInContext(s,context);
const names=id=>els[id].children.map(o=>o.textContent.replace(/^\S+\s+/u,''));
function sorted(values){assert.deepEqual(values,[...values].sort((a,b)=>a.localeCompare(b,'it',{sensitivity:'base'})));}
sorted(names('category'));sorted(names('newCat'));sorted(els.cookingFood.children.map(o=>o.textContent));
for(const cat of els.category.children){els.category.value=cat.value;els.category.handlers.change();sorted(els.food.children.map(o=>o.textContent));}
assert.equal(run('cookingFoods.length'),16);
assert.equal(run('caloriesForWeight(80,175)'),140);
assert.equal(run('caloriesForWeight(150,341)'),511.5);
assert.ok(run('cookingFoods.every(f=>f.raw.kcal>0&&f.cooked.kcal>0&&f.raw.url.startsWith("https://www.alimentinutrizione.it/")&&f.cooked.url.startsWith("https://www.alimentinutrizione.it/"))'));
els.category.value='Farinacei e cereali';els.category.handlers.change();els.food.value='4-0';els.weight.value=80;
els.manage2.onclick();assert.equal(els.cookingDialog.open,true);assert.equal(els.cookingFood.value,'000800');assert.equal(els.rawEnergy.textContent,'272,8 kcal');assert.equal(els.cookedEnergy.textContent,'140 kcal');
els.cookingWeight.value=150;els.cookingWeight.handlers.input();assert.equal(els.rawEnergy.textContent,'511,5 kcal');assert.equal(els.cookedEnergy.textContent,'262,5 kcal');
for(const w of ['',0,-1,10001,'no']){els.cookingWeight.value=w;els.cookingWeight.handlers.input();assert.equal(els.cookingValidation.hidden,false);assert.equal(els.cookedEnergy.textContent,'—');}
els.cookingWeight.value=100;els.cookingFood.value='106500';els.cookingFood.handlers.change();assert.equal(els.rawEnergy.textContent,'100 kcal');assert.equal(els.cookedEnergy.textContent,'129 kcal');assert.equal(els.cookingValidation.hidden,true);
els.closeCooking.onclick();assert.equal(els.cookingDialog.open,false);
els.category.value='Latticini';els.category.handlers.change();els.manage2.onclick();assert.equal(els.cookingFood.value,'000800');
els.manage.onclick();assert.equal(els.dialog.open,true);assert.equal(els.newCat.value,'Latticini');
assert.ok(!html.includes('Personalizza gli alimenti'));
assert.ok(html.indexOf('src="cooking-data.js"')<html.indexOf('src="app.js"'));
console.log('OK: 16 coppie CREA, ordine alfabetico di tutte le categorie e alimenti, confronto a peso uguale, decimali, input non validi, apertura/chiusura dialoghi e aggiunta alimenti.');
