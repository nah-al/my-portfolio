// script.js

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-links a");

  // Scroll reveal animation
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add("reveal");
      } else {
        section.classList.remove("reveal");
      }
    });
  };

  // Active link update
  const setActiveNav = () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", () => {
    revealOnScroll();
    setActiveNav();
  });

  // Trigger both on load
  revealOnScroll();
  setActiveNav();
});
