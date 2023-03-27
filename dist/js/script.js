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

// ! animations
const hiddenElements = document.querySelectorAll('.animate');
console.log(hiddenElements);
const observer = new IntersectionObserver(
    (elements) => {
        elements.forEach((element) => {
            if (element.isIntersecting) {
                element.target.classList.add('do-animate');
            } else {
                // element.target.classList.remove('show'); // by removing the else statement, the element will stay visible
            }
        });
    },
    { threshold: 0.5 }
);

hiddenElements.forEach((el) => observer.observe(el));
