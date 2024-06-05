const menuIcon = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".fa-xmark");

let menuAberto = false;

menuIcon.addEventListener("click", () => {
  menuAberto = !menuAberto;

  menu.classList.toggle("active");
  menuIcon.classList.remove("fa-bars", "fa-xmark");

  if (menuAberto) {
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.add("fa-bars");
  }
});

if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    menuIcon.click();
  });
}

const menuLinks = menu.querySelectorAll("a");
