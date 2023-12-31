// const open_btn = document.querySelector('.fa-circle-info');
// const close_btn = document.querySelector('.fa-circle-xmark');
// const popup = document.querySelector('.popup');
// const popup_content = document.querySelector('.popup-content');
//
// open_btn.addEventListener('click', () => {
//     popup.style.display = 'flex';
//     popup_content.style.cssText = 'animation: slide-in 0.5s ease; animation-fill-mode: forwards;';
// });
//
// close_btn.addEventListener('click', () => {
//     popup_content.style.cssText = 'animation: slide-out 0.5s ease; animation-fill-mode: forwards;';
//     setTimeout(() => {
//         popup.style.display = 'none';
//     }, 500);
// });

'use strict';

const open_btn = document.querySelector('.fa-circle-info');
const close_btn = document.querySelector('.fa-circle-xmark');
const popup = document.querySelector('.popup');
const popup_content = document.querySelector('.popup-content');

open_btn.addEventListener('click', () => {
    popup.style.display = 'flex';
    popup_content.classList.add('slide-in');
    popup_content.classList.remove('slide-out');
});

close_btn.addEventListener('click', () => {
    popup_content.classList.add('slide-out');
    popup_content.classList.remove('slide-in');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 500);
});
