import urllib.request,json,concurrent.futures
from html.parser import HTMLParser
from pathlib import Path
pairs=[('Pasta di semola','4-0','Farinacei e cereali','000800','000805','Bollita'),('Pasta integrale','4-1','Farinacei e cereali','000850','000855','Bollita'),('Riso brillato','4-2','Farinacei e cereali','000100','000105','Bollito'),('Riso integrale','4-3','Farinacei e cereali','000110','000115','Bollito'),('Cous cous','4-6','Farinacei e cereali','000045','000046','Cotto in acqua'),('Farro perlato','4-7','Farinacei e cereali','000020','000025','Bollito'),('Petto di pollo','1-0','Carne','106500','106506','In padella, senza grassi aggiunti'),('Merluzzo surgelato',None,'Pesce','121420','121423','Al forno, senza grassi aggiunti'),('Ceci secchi','3-0','Legumi','004000','004005','Lessati e scolati'),('Lenticchie secche','3-1','Legumi','004500','004505','Lessate e scolate'),('Fagioli borlotti secchi','3-2','Legumi','004120','004125','Lessati e scolati'),('Broccoli','5-4','Ortaggi','005110','005105','Bolliti'),('Carote','5-1','Ortaggi','005150','005155','Bollite'),('Finocchi','5-3','Ortaggi','005320','005325','Bolliti'),('Spinaci','5-5','Ortaggi','005700','005705','Bolliti'),('Zucchine','5-0','Ortaggi','005730','005735','Bollite')]
class Table(HTMLParser):
 def __init__(self):super().__init__();self.rows=[];self.row=[];self.cell=None;self.heading=False;self.title=''
 def handle_starttag(self,t,a):
  if t=='tr':self.row=[]
  if t in ('td','th'):self.cell=''
  if t=='h1':self.heading=True
 def handle_data(self,d):
  if self.cell is not None:self.cell+=d
  if self.heading:self.title+=d
 def handle_endtag(self,t):
  if t in ('td','th') and self.cell is not None:self.row.append(self.cell.strip());self.cell=None
  if t=='tr':self.rows.append(self.row)
  if t=='h1':self.heading=False

def fetch(code):
 url='https://www.alimentinutrizione.it/tabelle-nutrizionali/'+code
 p=Table();p.feed(urllib.request.urlopen(url,timeout=30).read().decode())
 row=next(r for r in p.rows if r and r[0]=='Energia (kcal)')
 return code,dict(kcal=float(row[2].strip().replace(',','.')),url=url,title=p.title.replace('Tabelle di Composizione degli Alimenti','').strip())
codes={c for p in pairs for c in p[3:5]}
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as ex:data=dict(ex.map(fetch,sorted(codes)))
result=[]
for name,baseId,cat,raw,cooked,method in pairs:
 result.append(dict(id=raw,name=name,baseId=baseId,cat=cat,raw=data[raw],cooked=data[cooked],method=method))
Path('cambiointavola/cooking-data.js').write_text('// Valori per 100 g, CREA. Schede consultate il 14 novembre 2026.\nconst cookingFoods = '+json.dumps(result,ensure_ascii=False,indent=2)+';\n')
for f in result:print(f['name'],f['raw']['kcal'],f['cooked']['kcal'])
