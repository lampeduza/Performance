let button = document.querySelector('.header__toggle');
let header = document.querySelector('.header');

button.addEventListener('click', function () {
	header.classList.toggle('header--opened');
});