'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');

// navToggle function
const navToggleFunc = () => nav.classList.toggle('active');

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);

// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');

for (let index = 0; index < themeBtn.length; index++) {
  themeBtn[index].addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    for (let index = 0; index < themeBtn.length; index++) {
      themeBtn[index].classList.toggle('light');
      themeBtn[index].classList.toggle('dark');
    }
  });
}