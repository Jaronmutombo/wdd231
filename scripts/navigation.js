const navbuttton = document.querySelector('.hamburger');

navbuttton.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});