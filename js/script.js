// SMOOTH SCROLL
const menuLinks = document.querySelectorAll('.nav__section'),
  header = document.querySelector('.header');

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function (event) {
    event.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = document.querySelector('.header').offsetHeight;
    // const topOffset = 0; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
}


// BURGER
const burger = document.querySelector('.nav__button');
const menu = document.querySelector('.nav__sections');
const linksBurger = document.querySelectorAll('.nav__section');
const bodyColor = document.querySelector('.body-color')

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  bodyColor.classList.toggle('active');
})

linksBurger.forEach(function (el) {
  el.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
    bodyColor.classList.remove('active');
  })
})


