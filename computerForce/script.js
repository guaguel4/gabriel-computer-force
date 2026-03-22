/* 
   Computer Force - script.js
   Minimal vanilla JS for toggling menus
*/

document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const bagBtn = document.querySelector('.bag-btn');
    const navMenu = document.querySelector('nav');
    const aside = document.querySelector('aside');

    if (burgerBtn) {
        burgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    if (bagBtn) {
        bagBtn.addEventListener('click', () => {
            aside.classList.toggle('active');
        });
    }
});
