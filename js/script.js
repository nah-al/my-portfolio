// script.js

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
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
