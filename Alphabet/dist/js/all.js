/* Инициализируем библиотек WOW */
new WOW().init();
/* Валидация формы секции offer*/
var modal = $('#modal');

$('#offer-form').validate({
	rules: {
		username: {
			required: true,
			minlength: 3,
			maxlength: 15
		},
		phone: {
			required: true,
		},
	},
	errorClass: "invalid-1",
	errorElement: "div",
	submitHandler: function (form) {
		modal.addClass('modal_active');
		setTimeout(() => closeModal(), 5000)
	},
	messages: {
		username: {
			minlength: jQuery.validator.format("Не менее {0} символов"),
			maxlength: jQuery.validator.format("Введите не более 15 символов")
		},
	}
})

/* Валидация формы секции brif*/
$('#brif-form').validate({
	rules: {
		username: {
			required: true,
			minlength: 3,
			maxlength: 15
		},
		phone: {
			required: true,
		},
		email: {
			required: true,
			email: true
		}
	},
	errorClass: "invalid-2",
	errorElement: "div",
	submitHandler: function (form) {
		modal.addClass('modal_active');
		setTimeout(() => closeModal(), 5000)
	},
	messages: {
		username: {
			minlength: jQuery.validator.format("Не менее {0} символов"),
			maxlength: jQuery.validator.format("Имя слишком длинное. Введите не более 15 символов")
		},
	}
})

jQuery.extend(jQuery.validator.messages, {
	required: "Заполните поле",
	email: "Введите корректный email"
});
/* Маски телефона */
$('.phone').mask('8 (999) 999-99-99')

/* Инициализируем Owl */
$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 15,
		nav: true,
		dots: false,
		navText: ["<img src='img/portfolio/left-arrow.png'>", "<img src='img/portfolio/right-arrow.png'>"],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 3
			},
		}
	})
});
