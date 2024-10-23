export function initializeSmoothScroll(scroller) {
  document.addEventListener("DOMContentLoaded", () => {
    // Agregar el event listener a los enlaces de navegación
    document.querySelectorAll(".nav-bar a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          // Verificar que la sección objetivo existe
          scroller.scrollTo(targetSection);
        }
      });
    });

    // Go top
    const goTopButton = document.querySelector(".go");
    if (goTopButton) {
      // Verificar que el botón existe
      goTopButton.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          // Verificar que la sección objetivo existe
          scroller.scrollTo(targetSection);
        }
      });
    }
  });
}
