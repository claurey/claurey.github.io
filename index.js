
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navMenuLink = document.querySelectorAll(".nav-menu-link");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});


navMenuLink.forEach(menuItem=>{
    menuItem.addEventListener("click",()=>{
        navMenu.classList.toggle("nav-menu_visible");
        console.log("hola");
    });

});





