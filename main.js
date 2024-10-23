import "./style.css";
import { MainComponent } from "./MainComponent.js";
import { initializeDarkMode } from "./darkmode.js";
import { initializeSwiper } from "./swiper.js";
import { initializeSmoothScroll } from "./smoothScroll.js";
import { initializeScroller } from "./locomotiveScroll.js";

initializeDarkMode();

const mainComponent = MainComponent();
document.body.appendChild(mainComponent);
initializeSwiper();

const scroller = initializeScroller();
initializeSmoothScroll(scroller);
