const toggleDarkMode = document.querySelector('.dark-mode-box input');
const toggleHamburger = document.querySelector('.hamburger-menu input');

const htmlTag = document.querySelector('html');
const header = document.querySelector('header');
const ulNavList = document.querySelector('ul.nav-list');
const hamburger = document.querySelector('.hamburger-box');

const iconMoon = document.querySelector('.moon-icon');
const iconSun = document.querySelector('.sun-icon');

// to enable hamburger menu
toggleHamburger.addEventListener('change', function (e) {
  if (e.target.checked) {
    header.classList.add('active');
    ulNavList.classList.add('active');
    hamburger.classList.add('active');
    toggleDarkMode.classList.add('active');
  } else {
    header.classList.remove('active');
    ulNavList.classList.remove('active');
    hamburger.classList.remove('active');
    toggleDarkMode.classList.remove('active');
  }
});
// to enable dark mode
toggleDarkMode.addEventListener('change', function (e) {
  if (e.target.checked) {
    htmlTag.classList.add('darkmode');
    iconMoon.classList.add('hidden');
    iconSun.classList.remove('hidden');

  } else {
    htmlTag.classList.remove('darkmode');
    iconMoon.classList.remove('hidden');
    iconSun.classList.add('hidden');
  }
});
