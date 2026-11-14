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
const context=vm.createContext({console,Intl,Number,location:{hash:""},crypto:require('node:crypto').webcrypto,localStorage:{getItem:()=>null,setItem(){}},document:{getElementById:id=>{assert.ok(els[id],`Missing element ${id}`);return els[id]},createElement:()=>new Element(),querySelectorAll:()=>[]}});
vm.runInContext(fs.readFileSync('cambiointavola/cooking-data.js','utf8'),context);
vm.runInContext(fs.readFileSync('cambiointavola/app.js','utf8'),context);

const run=s=>vm.runInContext(s,context);
assert.equal(run('convertWeight(100,cookingFoods.find(f=>f.id==="ceci"))'),290);
assert.equal(run('convertWeight(290,cookingFoods.find(f=>f.id==="ceci"),false)'),100);
assert.equal(run('convertWeight(50,cookingFoods.find(f=>f.id==="ceci"))'),145);
assert.equal(run('convertWeight(100,cookingFoods.find(f=>f.id==="pollo-forno"))'),67);
els.manage2.onclick();assert.equal(els.cookingFood.value,'ceci');assert.equal(els.rawWeight.textContent,'100 g');assert.equal(els.cookedWeight.textContent,'≈ 290 g');
els.cookingDirection.value='toRaw';els.cookingWeight.value=290;els.cookingDirection.handlers.change();assert.equal(els.rawWeight.textContent,'100 g');
els.cookingWeight.value=0;els.cookingWeight.handlers.input();assert.equal(els.cookingValidation.hidden,false);assert.equal(els.cookedWeight.textContent,'—');
console.log('OK: conversione ceci 100→290, inversa 290→100, porzioni decimali, perdita di peso pollo e input non validi.');

assert.ok(!html.includes('class="sun"'));assert.ok(html.includes("Da 🌱 crudo a 🍲 cotto"));assert.ok(html.includes("Da 🍲 cotto a 🌱 crudo"));
