const ham = document.querySelector('.ham');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
ham.onclick = () => {
    ham.classList.toggle('open');
    menu.classList.toggle('show');
};
