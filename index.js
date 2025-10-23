// index.js

// Insertar header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML("afterbegin", data);
  });

// Insertar footer
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.body.insertAdjacentHTML("beforeend", data);
  });

// Fade-in mágico al cargar secciones con clase .fade-in
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
      el.style.opacity = 1;
    }, 300);
  });
});
if (x.img) {
  th.style.setProperty(
    "background",
    `#e9dfc3 url('${x.img}') center/cover no-repeat`,
    "important"
  );
}
const th = document.createElement('div');
th.className = 'cr-thumb';
if (x.img) th.style.backgroundImage = `url('${x.img}')`;
if (x.img) th.style.backgroundImage = `url('${x.img}')`;

function render(){
  elCards.innerHTML = '';
  const list = DATA.filter(x=>{
    const byEl = (filtro==='todos') || x.elemento===filtro;
    const byQ  = !query || x.nombre.toLowerCase().includes(query);
    return byEl && byQ;
  });
  elEmpty.hidden = list.length>0;

  list.forEach(x=>{
    const card = document.createElement('article');
    card.className='card';

    const th = document.createElement('div');
    th.className='thumb';
    const img = document.createElement('img');
    img.src = x.img; img.alt = x.nombre; img.loading = 'lazy';
    th.append(img);

    const meta = document.createElement('div'); meta.className='meta';
    const n = document.createElement('div'); n.className='name'; n.textContent=x.nombre;
    const p = document.createElement('span'); p.className='pill'; p.textContent=x.elemento;
    const b = document.createElement('button'); b.className='btn'; b.textContent='Ver mensaje';
    b.onclick=()=>{ dlgName.textContent=x.nombre; dlgEl.textContent=x.elemento; dlgMsg.textContent='“'+x.mensaje+'”'; dlg.showModal(); };

    meta.append(n,p,b);
    card.append(th,meta);
    elCards.append(card);
  });

  // 🔸 revelar con animación en cascada
  revealCards();
}

// Aplica .reveal con un pequeño delay escalonado
function revealCards(){
  const cards = [...document.querySelectorAll('.grid .card')];
  stagger(cards, 45, (el)=> {
    // limpiamos por si veníamos de otra animación
    el.classList.remove('reveal');
    // fuerza reflow para reiniciar animación si re-filtrás rápido
    void el.offsetWidth;
    el.classList.add('reveal');
  });
}

// utilitario de “cascada”: cada N ms ejecuta la acción en el siguiente elemento
function stagger(els, ms, fn){
  els.forEach((el, i)=> setTimeout(()=> fn(el), i * ms));
}
