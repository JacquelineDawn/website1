const body = document.querySelector('body');
body.onload = () => {
    body.classList.toggle('bodyOpacityBefore');
    body.classList.add('bodyOpacityAfter');
}




const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');

const scrollFunk = () => {

    console.log(window.scrollY);

    if (document.documentElement.scrollTop >= 50) {
        one.classList.toggle('opacityBefore');
        one.classList.add('opacityAfter');
    }
    if (document.documentElement.scrollTop >= 654) {
        two.classList.toggle('opacityBefore');
        two.classList.add('opacityAfter');
    }
    if (document.documentElement.scrollTop >= 1200) {
        three.classList.toggle('opacityBefore');
        three.classList.add('opacityAfter');
    }
    if (document.documentElement.scrollTop >= 1800) {
        four.classList.toggle('opacityBefore');
        four.classList.add('opacityAfter');
    }

}

window.addEventListener('scroll', scrollFunk);




const primaryNav = document.querySelector('.prim-nav');
const navToggle = document.querySelector('.menu-btn');

navToggle.addEventListener('click', () => {

    const visibility = primaryNav.getAttribute('data-visible');

    console.log(visibility);

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
