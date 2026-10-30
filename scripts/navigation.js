const hamBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navigation');


hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('show');
    navLinks.classList.toggle('show');
});