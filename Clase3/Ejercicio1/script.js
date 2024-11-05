// Selecciona todos los elementos con la clase 'imagen'
const imagenes = document.querySelectorAll(".imagen");

// Itera sobre cada elemento 'imagen' para agregar el evento de mostrar el overlay
imagenes.forEach((imagen) => {
  const overlay = imagen.querySelector(".overlay");

  imagen.addEventListener("mouseover", () => {
    overlay.classList.add("mostrar");
  });

  imagen.addEventListener("mouseout", () => {
    overlay.classList.remove("mostrar");
  });
});

// Seleccionar el dropdown
const dropdown = document.getElementById("actividad");
// Seleccionar todas las tarjetas
const tarjetas = document.querySelectorAll(".tarjeta");

// Mostrar la tarjeta seleccionada y ocultar las demás al cambiar el dropdown
dropdown.addEventListener("change", () => {
  const actividadSeleccionada = dropdown.value;

  tarjetas.forEach((tarjeta) => {
    tarjeta.style.display =
      tarjeta.id === actividadSeleccionada ? "block" : "none";
  });
});

// para ocultar todas las tarjetas al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  tarjetas.forEach((tarjeta) => {
    tarjeta.style.display = "none";
  });
});
