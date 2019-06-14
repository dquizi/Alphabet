/* Окно благодарности "Перезвоните мне" */
/* Окно благодарности на отправку форм (основной код в all.js) */
var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
const openModal = () => modal.addClass('modal_active');
const closeModal = () => modal.removeClass('modal_active');

button.addEventListener('click', () => {
	openModal();
	setTimeout(() => closeModal(), 5000)
});

close.addEventListener('click', closeModal);

/* Вызов модального окна "Цен" */
$('.card__link').click(function() {
	modal.addClass('modal_active'),
	setTimeout(() => closeModal(), 5000)
})
