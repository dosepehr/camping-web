const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');

const toggleMenu = () => {
    ham.classList.toggle('open');
    menu.classList.toggle('show');
    overlay.classList.toggle('overlay-active');
};

ham.onclick = () => {
    toggleMenu();
};

overlay.onclick = () => {
    toggleMenu();
};
