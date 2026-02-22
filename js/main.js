document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "/header.html");
  loadComponent("footer", "/footer.html");
});

function loadComponent(id, file) {
  const container = document.getElementById(id);
  if (!container) return;

  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error(`No se pudo cargar ${file}`);
      }
      return response.text();
    })
    .then(html => {
      container.innerHTML = html;
    })
    .catch(error => {
      console.error(error);
    });
}
