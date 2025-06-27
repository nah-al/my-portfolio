// script.js

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-links a");
  const logo = document.querySelector(".logo");

  // Toggle menu
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu on nav link click (mobile UX)
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // Scroll to top on logo click
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Auto highlight current page link
  const currentPage = window.location.pathname.split("/").pop();
  navItems.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Typewriter effect for hero heading
  const text = "Hi, I'm Aman";
  const typeTarget = document.querySelector(".hero h1");
  if (typeTarget) {
    typeTarget.textContent = "";
    let i = 0;
    const type = () => {
      if (i < text.length) {
        typeTarget.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    };
    type();
  }
});
