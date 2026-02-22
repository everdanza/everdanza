document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "header.html");
  loadComponent("footer", "footer.html");
});

/* Cargar componentes */
function loadComponent(id, file) {
  const container = document.getElementById(id);
  if (!container) return;

  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error(`No se pudo cargar ${file}`);
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;
    })
    .catch(err => console.error(err));
}

/* MENÚ HAMBURGUESA (event delegation) */
document.addEventListener("click", (e) => {
  const toggle = e.target.closest(".menu-toggle");
  if (!toggle) return;

  const nav = document.querySelector(".nav");
  if (nav) {
    nav.classList.toggle("active");
  }
});
