/* =========================================================
   MAIN.JS
   Instituto Técnico
   Asociación Escolar María Goretti
========================================================= */

"use strict";


/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  inicializarNavbar();
  inicializarScrollTop();
  inicializarMenuMovil();
  inicializarAnioFooter();

});


/* =========================================================
   NAVBAR
   Cambia su apariencia cuando el usuario hace scroll
========================================================= */

function inicializarNavbar() {

  const navbar = document.getElementById("mainNavbar");

  // Si la página no tiene navbar, no hacemos nada.
  if (!navbar) {
    return;
  }

  const actualizarNavbar = () => {

    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }

  };

  // Estado inicial
  actualizarNavbar();

  // Actualizar mientras se hace scroll
  window.addEventListener("scroll", actualizarNavbar, {
    passive: true
  });

}


/* =========================================================
   BOTÓN VOLVER ARRIBA
========================================================= */

function inicializarScrollTop() {

  const scrollTopButton = document.getElementById("scrollTop");

  // Si no existe el botón en la página, no hacemos nada.
  if (!scrollTopButton) {
    return;
  }

  const actualizarScrollTop = () => {

    if (window.scrollY > 400) {
      scrollTopButton.classList.add("show");
    } else {
      scrollTopButton.classList.remove("show");
    }

  };

  // Estado inicial
  actualizarScrollTop();

  // Mostrar / ocultar durante el scroll
  window.addEventListener("scroll", actualizarScrollTop, {
    passive: true
  });

  // Regresar al inicio
  scrollTopButton.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


/* =========================================================
   MENÚ MÓVIL
   Cierra el menú después de seleccionar un enlace
========================================================= */

function inicializarMenuMovil() {

  const navbar = document.getElementById("mainNavbar");

  if (!navbar) {
    return;
  }

  const navbarCollapse = navbar.querySelector(".navbar-collapse");

  if (!navbarCollapse) {
    return;
  }

  const links = navbarCollapse.querySelectorAll(
    "a.nav-link:not(.dropdown-toggle), .dropdown-item"
  );

  links.forEach(link => {

    link.addEventListener("click", () => {

      // Bootstrap debe estar disponible.
      if (
        typeof bootstrap === "undefined" ||
        !bootstrap.Collapse
      ) {
        return;
      }

      // Solo cerrar el menú si está realmente abierto.
      if (navbarCollapse.classList.contains("show")) {

        const collapseInstance =
          bootstrap.Collapse.getInstance(navbarCollapse) ||
          new bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });

        collapseInstance.hide();
      }

    });

  });

}


/* =========================================================
   AÑO AUTOMÁTICO DEL FOOTER
========================================================= */

function inicializarAnioFooter() {

  const elementoAnio = document.getElementById("currentYear");

  // Si todavía no existe en el HTML, no hacemos nada.
  if (!elementoAnio) {
    return;
  }

  elementoAnio.textContent = new Date().getFullYear();

}