export function MainComponent() {
  const main = document.createElement("main");
  main.setAttribute("data-scroll-container", "");
  main.classList.add("content");
  main.id = "top";

  main.innerHTML = `
    <div class="top-bar">        
      <div>
        <a class="go arrow" href="#top">&uarr;</a>
      </div>
      <div id="dark-mode-toggle" class="toggle-button-cover">
        <div class="button r" id="toggle-button">
          <input type="checkbox" class="checkbox" />
          <div class="knobs"></div>
          <div class="layer"></div>
        </div>
      </div>
    </div>

    <div class="header" data-scroll-section>
      <header><h1>Web Agency</h1></header>
      <input type="checkbox" id="menu-toggle" class="menu-toggle">
      <label for="menu-toggle" class="hamburger">&#9776;</label>
      <nav class="nav-bar">
        <ul>
          <li><a href="#home" data-scroll>Home</a></li>
          <li><a href="#about" data-scroll>About</a></li>
          <li><a href="#case-studies" data-scroll>Case Studies</a></li>
          <li><a href="#portfolio" data-scroll>Portfolio</a></li>
          <li><a href="#team" data-scroll>Team</a></li>
          <li><a href="#contact" data-scroll>Contact</a></li>
        </ul>
      </nav>
    </div>

    <section id="home" class="main-section" data-scroll-section>
      <h2 class="title-section" data-scroll data-scroll-speed="1">Welcome to Our Studio</h2>
      <p class="subtitle-section" data-scroll data-scroll-speed="2">We create ergonomic spaces with individual designs.</p>
      <div class="swiper-container slider-column">
        <div class="swiper swiper-slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <h1 class="slide-title"></h1>
              <img src="https://dummyimage.com/780x400/000/fff&text=Slide+1" alt="Swiper">
            </div>
            <div class="swiper-slide">
              <h1 class="slide-title"></h1>
              <img src="https://dummyimage.com/780x400/000/fff&text=Slide+2" alt="Swiper">
            </div>
            <div class="swiper-slide">
              <h1 class="slide-title"></h1>
              <img src="https://dummyimage.com/780x400/000/fff&text=Slide+3" alt="Swiper">
            </div>
            <div class="swiper-slide">
              <h1 class="slide-title"></h1>
              <img src="https://dummyimage.com/780x400/000/fff&text=Slide+4" alt="Swiper">
            </div>
            <div class="swiper-slide">
              <h1 class="slide-title"></h1>
              <img src="https://dummyimage.com/780x400/000/fff&text=Slide+5" alt="Swiper">
            </div>
          </div>
        </div>
        <span class="progressbar"></span>
      </div>
    </section>

   <section id="about" class="main-section about" data-scroll-section>
        <h2 class="title-section" data-scroll data-scroll-speed="1">About Us</h2>
        <p class="subtitle-section" data-scroll data-scroll-speed="2">We are a creative agency specializing in modern, responsive design.</p>
      </section>


    <section id="case-studies" class="main-section" data-scroll-section>
      <h2 class="title-section" data-scroll data-scroll-speed="1">Case Studies</h2>
      <p class="subtitle-section" data-scroll data-scroll-speed="2">Explore our latest case studies showcasing our work.</p>
    </section>

    <section id="portfolio" class="main-section" data-scroll-section>
      <h2 class="title-section" data-scroll data-scroll-speed="1">Portfolio</h2>
      <p class="subtitle-section" data-scroll data-scroll-speed="2">Check out our portfolio of recent projects.</p>
    </section>

    <section id="team" class="main-section" data-scroll-section>
      <h2 class="title-section" data-scroll data-scroll-speed="1">Our Team</h2>
      <p class="subtitle-section" data-scroll data-scroll-speed="2" class="team">old but gold</p>
      <div class="team-member" data-scroll data-scroll-speed="2">
        <img src="https://via.placeholder.com/150" alt="Team Member">
        <h3>John Doe</h3>
        <p>Designer</p>
      </div>
      <div class="team-member" data-scroll data-scroll-speed="3">
        <img src="https://via.placeholder.com/150" alt="Team Member">
        <h3>Jane Smith</h3>
        <p>Developer</p>
      </div>
    </section>

    <section id="contact" class="main-section" data-scroll-section>
      <h2 class="title-section" data-scroll data-scroll-speed="1">Contact Us</h2>
      <p class="subtitle-section" data-scroll data-scroll-speed="2">Get in touch with us for your next project.</p>
    </section>

    <footer data-scroll-section>
      <div>
        <h2>Company</h2>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
        </ul>
      </div>
      <div>
        <h2>Resources</h2>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Contact Support</a></li>
        </ul>
      </div>
      <div>
        <h2>Legal</h2>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Cookie Policy</a></li>
        </ul>
      </div>
      <div>
        <h2>Social</h2>
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Facebook</a></li>
        </ul>
      </div>
    </footer>
  `;

  return main;
}
