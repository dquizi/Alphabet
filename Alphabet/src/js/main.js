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