// swiper.js
export function initializeSwiper() {
  document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper-slider", {
      centeredSlides: true,
      speed: 800,
      slidesPerView: 1,
      grabCursor: true,
      freeMode: false,
      loop: true,
      touchRatio: 1.5,
      spaceBetween: 0.0,
      mousewheel: false,
      keyboard: {
        enabled: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    });
  });
}
