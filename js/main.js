console.log("App cargada correctamente");

// Helpers globales (más adelante)
export function createElement(tag, text) {
  const el = document.createElement(tag);
  el.textContent = text;
  return el;
}
