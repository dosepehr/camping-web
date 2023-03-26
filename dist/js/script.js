const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
ham.onclick = () => {
    ham.classList.toggle('open');
    menu.classList.toggle('show');
    overlay.classList.toggle('overlay-active');
};

overlay.onclick = () => {
    overlay.classList.toggle('overlay-active');
    ham.classList.toggle('open');
    menu.classList.toggle('show');
};
