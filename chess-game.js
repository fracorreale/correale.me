const english=document.documentElement.lang==='en';
const L=english?{initial:'Starting position',play:'Play the game',pause:'Pause',mate:'Checkmate!',move:'Move',of:'of',white:'White',black:'Black',begins:'White to move',board:'Chessboard'}:{initial:'Posizione iniziale',play:'Riproduci la partita',pause:'Metti in pausa',mate:'Scacco matto!',move:'Mossa',of:'di',white:'Bianco',black:'Nero',begins:'Il Bianco inizia',board:'Scacchiera'};
// The historical score is fixed; explicit coordinates make playback independent of external libraries.
const turns = [
 ['e2e4','e4','e7e5','e5'],['f2f4','f4','e5f4','exf4'],['f1c4','Bc4','d8h4','Qh4+'],
 ['e1f1','Kf1','b7b5','b5'],['c4b5','Bxb5','g8f6','Nf6'],['g1f3','Nf3','h4h6','Qh6'],
 ['d2d3','d3','f6h5','Nh5'],['f3h4','Nh4','h6g5','Qg5'],['h4f5','Nf5','c7c6','c6'],
 ['g2g4','g4','h5f6','Nf6'],['h1g1','Rg1','c6b5','cxb5'],['h2h4','h4','g5g6','Qg6'],
 ['h4h5','h5','g6g5','Qg5'],['d1f3','Qf3','f6g8','Ng8'],['c1f4','Bxf4','g5f6','Qf6'],
 ['b1c3','Nc3','f8c5','Bc5'],['c3d5','Nd5','f6b2','Qxb2'],['f4d6','Bd6','b2a1','Qxa1'],
 ['f1e2','Ke2','c5g1','Bxg1'],['e4e5','e5','b8a6','Na6'],['f5g7','Nxg7+','e8d8','Kd8'],
 ['f3f6','Qf6+','g8f6','Nxf6'],['d6e7','Be7#']
];
const steps=turns.flatMap((t,i)=>[{uci:t[0],san:t[1],turn:i+1,side:'white'},...(t[2]?[{uci:t[2],san:t[3],turn:i+1,side:'black'}]:[])]);
const initial={};
'rnbqkbnr'.split('').forEach((p,i)=>{const f='abcdefgh'[i];initial[f+'8']=p;initial[f+'7']='p';initial[f+'2']='P';initial[f+'1']=p.toUpperCase()});
const positions=[{...initial}];
for(const step of steps){const p={...positions.at(-1)},from=step.uci.slice(0,2),to=step.uci.slice(2);if(!p[from])throw Error('Missing piece at '+from);p[to]=p[from];delete p[from];positions.push(p)}
const symbols={K:'♔',Q:'♕',R:'♖',B:'♗',N:'♘',P:'♙',k:'♚',q:'♛',r:'♜',b:'♝',n:'♞',p:'♟'};
const names=english?{K:'white king',Q:'white queen',R:'white rook',B:'white bishop',N:'white knight',P:'white pawn',k:'black king',q:'black queen',r:'black rook',b:'black bishop',n:'black knight',p:'black pawn'}:{K:'re bianco',Q:'donna bianca',R:'torre bianca',B:'alfiere bianco',N:'cavallo bianco',P:'pedone bianco',k:'re nero',q:'donna nera',r:'torre nera',b:'alfiere nero',n:'cavallo nero',p:'pedone nero'};
const board=document.querySelector('#board'),dialog=document.querySelector('#game'),play=document.querySelector('#play');
let index=0,timer=null;
function stop(){clearInterval(timer);timer=null;play.textContent='▶';play.setAttribute('aria-label',L.play)}
function render(){
 board.replaceChildren();const position=positions[index],last=index?steps[index-1]:null;
 for(let rank=8;rank>=1;rank--)for(let file=0;file<8;file++){
  const square='abcdefgh'[file]+rank,cell=document.createElement('div');cell.className='square'+((file+rank)%2===0?' dark':'');
  if(last&&(last.uci.slice(0,2)===square||last.uci.slice(2)===square))cell.classList.add('last');
  cell.textContent=symbols[position[square]]||'';cell.title=square+(position[square]?': '+names[position[square]]:'');
  if(rank===1||file===0){const coordinate=document.createElement('small');coordinate.textContent=(file===0?rank:'')+(rank===1?'abcdefgh'[file]:'');cell.append(coordinate)}
  board.append(cell);
 }
 const label=last?`${last.turn}${last.side==='white'?'.':'…'} ${last.san}`:L.initial;
 document.querySelector('#move').textContent=index===steps.length?label+' · '+L.mate:label;
 board.setAttribute('aria-label',L.board+': '+label+'. '+Object.entries(position).map(([s,p])=>names[p]+' in '+s).join(', '));
 document.querySelector('#progress').textContent=`${L.move} ${last?last.turn:0} ${L.of} 23 · ${last?(last.side==='white'?L.white:L.black):L.begins}`;
 for(const id of ['start','prev'])document.querySelector('#'+id).disabled=index===0;
 for(const id of ['next','end'])document.querySelector('#'+id).disabled=index===steps.length;
}
function go(n){stop();index=Math.max(0,Math.min(steps.length,n));render()}
document.querySelector('#secret').onclick=()=>dialog.showModal();
document.querySelector('#close').onclick=()=>dialog.close();
dialog.addEventListener('close',stop);
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
document.querySelector('#prev').onclick=()=>go(index-1);
document.querySelector('#next').onclick=()=>go(index+1);
document.querySelector('#start').onclick=()=>go(0);
document.querySelector('#end').onclick=()=>go(steps.length);
play.onclick=()=>{if(timer){stop();return}if(index===steps.length){index=0;render()}play.textContent='Ⅱ';play.setAttribute('aria-label',L.pause);timer=setInterval(()=>{index++;render();if(index===steps.length)stop()},1100)};
dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();go(index+1)}if(e.key==='ArrowLeft'){e.preventDefault();go(index-1)}});
render();
