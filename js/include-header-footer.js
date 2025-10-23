(async function injectIncludes(){
    const incs = document.querySelectorAll('[data-include]');
    await Promise.all([...incs].map(async el=>{
      const file = el.getAttribute('data-include');
      try{
        const res = await fetch(file);
        el.innerHTML = await res.text();
      }catch(e){
        el.innerHTML = `<div style="padding:12px;color:#ffd24a">No se pudo cargar ${file}</div>`;
      }
    }));
  
    // Activar link actual en navbar
    const here = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a[href]').forEach(a=>{
      const href = a.getAttribute('href');
      if (!href) return;
      if (href === here) a.classList.add('active');
    });
  })();
  