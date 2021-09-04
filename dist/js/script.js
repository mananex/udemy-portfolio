const hamburger = document.querySelector('.hamburger'),
      menu      = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.item__progress__percent'),
      values   = document.querySelectorAll('.item__progress__value');

percents.forEach( (item, i) => {
    values[i].style.width = item.innerHTML;
});