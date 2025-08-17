// script.js

// This runs when the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("Website loaded ✅");

  // Example: toggle a mobile menu
  const menuBtn = document.querySelector("#menu-btn");
  const navMenu = document.querySelector("#nav-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open"); // 'open' is a CSS class you'll define
    });
  }

  // Example: smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
