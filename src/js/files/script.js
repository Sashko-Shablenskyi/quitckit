// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header'),
    scrollPosition = window.scrollY;

  scrollPosition > 0
    ? header.classList.add('header--scrolled')
    : header.classList.remove('header--scrolled');
});
