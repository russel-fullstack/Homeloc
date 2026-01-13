const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const link = document.getElementById('link');

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("visible");
  const isVisible = menu.classList.contains("visible");
  menuToggle.innerHTML = isVisible
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
  menu.classList.toggle("left-1/4");
});

