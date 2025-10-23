// js/layout.js
export async function loadPartials() {
    try {
      const [hRes, fRes] = await Promise.all([
        fetch("./partials/header.html"),
        fetch("./partials/footer.html"),
      ]);
      const [h, f] = await Promise.all([hRes.text(), fRes.text()]);
      document.body.insertAdjacentHTML("afterbegin", h);
      document.body.insertAdjacentHTML("beforeend", f);
    } catch (e) {
      console.error("No pude cargar header/footer:", e);
    }
  }
  
  // auto-ejecutar si se carga con <script type="module">
  loadPartials();
  