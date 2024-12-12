// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  // Change the button icon based on the current state
  if (body.classList.contains('dark-theme')) {
    themeToggle.textContent = '🌙';
  } else {
    themeToggle.textContent = '🌞';
  }
});