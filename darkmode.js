export function initializeDarkMode() {
  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    if (toggleButton) {
      toggleButton.addEventListener("click", function () {
        const body = document.body;
        const footer = document.querySelector("footer");
        const isDark = body.classList.toggle("dark-mode");

        gsap.to(body, {
          backgroundColor: isDark ? "#2f2f2f" : "#fbfbf0",
          color: isDark ? "#f6f6dc" : "#2f2f2f",
          duration: 0.25,
        });

        gsap.to(footer, {
          borderColor: isDark ? "#f6f6dc" : "#2f2f2f",
          duration: 0.15,
        });
      });
    }
  });
}
