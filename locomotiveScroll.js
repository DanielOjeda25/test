export function initializeScroller() {
  const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });

  return scroller; // Retorna la instancia del scroller
}
