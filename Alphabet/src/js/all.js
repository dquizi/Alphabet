/* Инициализируем библиотек WOW */
new WOW().init();
/* Валидация формы секции offer*/
$('#offer-form').validate({
	rules: {
		username: {
			required: true,
			minlength: 2,
			maxlength: 15
		},
		phone: {
			required: true,
		},
	},
	errorClass: "invalid-1",
	errorElement: "div",
	messages: {
		username: {
			minlength: jQuery.validator.format("Осталось символов: {0}"),
			maxlength: jQuery.validator.format("Имя слишком длинное. Введите не более 15 символов")
		},
	}
})

/* Валидация формы секции brif*/
$('#brif-form').validate({
	rules: {
		username: {
			required: true,
			minlength: 2,
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
	messages: {
		username: {
			minlength: jQuery.validator.format("Осталось символов: {0}"),
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
			480: {
				items: 2
			},
			768: {
				items: 3
			},
		}
	})
});