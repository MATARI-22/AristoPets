// Seleccionar el ícono y el menú
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

// Agregar un evento para mostrar/ocultar el menú
menuIcon.addEventListener("click", () => {
    menu.classList.toggle("show"); // Alterna la clase 'show' en el menú
});
