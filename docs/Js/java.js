const navbarToggle = document.querySelector('.navbar-toggle');
const nav = document.querySelector('nav');
navbarToggle.addEventListener('click', () => {
    nav.classList.toggle('mobile-active');
});