const header__change = document.getElementById('header__change');

const price = document.querySelectorAll('.card__item--price');

header__change.addEventListener('click', () => {
    header__change.classList.toggle('header__change--active');
})

