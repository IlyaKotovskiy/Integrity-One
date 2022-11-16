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
