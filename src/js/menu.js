const menuIcon = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active");
});
