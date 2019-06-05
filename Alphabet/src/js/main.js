var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
const openModal = () => modal.classList.add('modal_active');
const closeModal = () => modal.classList.remove('modal_active');

button.addEventListener('click', () => {
	openModal();
	setTimeout(() => closeModal(), 5000)
});

close.addEventListener('click', closeModal);

/* Анимация при скролле */
var anim = document.querySelector('.offer__input');
$(document).ready(function () {
	$(document).bind("scroll", function () {
		$(".scroll-appear").each(function () {
			var position = $(this).offset().top;
			var classToBeAdded = document.querySelector('.box');

			if (position + 150 < $(window).scrollTop() + $(window).height()) {
				$(this).addClass(classToBeAdded);
			}


			if (position + $(this).height() + 600 < $(window).scrollTop() + $(window).height()) {
				$(this).removeClass(classToBeAdded);
			}


		});
	});
});