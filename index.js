// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// ...existing code...

// const darkModeToggle = document.getElementById('dark-mode-toggle');

// darkModeToggle.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
//   document.querySelector('.header').classList.toggle('dark-mode');
//   document.querySelectorAll('.header__link').forEach(link => link.classList.toggle('dark-mode'));
//   document.querySelector('.header__sm-menu').classList.toggle('dark-mode');
//   document.querySelectorAll('.header__sm-menu-link a').forEach(link => link.classList.toggle('dark-mode'));
//   document.querySelector('.project-cs-hero').classList.toggle('dark-mode');
//   document.querySelector('.main-footer').classList.toggle('dark-mode');
//   document.querySelectorAll('.main-footer__icon').forEach(icon => icon.classList.toggle('dark-mode'));
// });
