const hamBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-bar');


hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('show');
});