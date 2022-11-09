var slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	nav: false,
	controls: false,
	responsive: {
		320: {
			nav: true,
			edgePadding: 10,
			slideBy: 1,
			items: 1
		},
		576: {
			nav: true,
			edgePadding: 10,
			slideBy: 1,
			items: 1
		},
		768: {
			nav: true,
			edgePadding: 20,
			slideBy: 1,
			items: 1
		},
		992: {
			nav: true,
			edgePadding: 20,
			slideBy: 1,
			items: 1
		}
	}
});
document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});


$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
	$(this)
		.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

function toggleSlide(item) {
	$(item).each(function (i) {
		$(this).on('click', function (e) {
			e.preventDefault();
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		});
	});
}
toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

//modal
$('[data-modal=consultation]').on('click', function () {
	$('.overlay, #consultation').fadeIn('slow');
});

$('.modal__close').on('click', function () {
	$('.overlay, #consultation, #order, #thanks').fadeOut('quick');
});

$('.catalog__footer-prices-button').on('click', function () {
	$('.overlay, #order').fadeIn('slow');
});
$('.catalog__footer-prices-button').each(function (i) {
	$(this).on('click', function () {
		$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
	});
});

//validation
function validateForms(form) {
	$(form).validate({
		rules: {
			name: {
				required: true,
				minlength: 2
			},
			phone: 'required',
			email: {
				required: true,
				email: true
			}
		},
		messages: {
			name: {
				required: 'Пожалуйста, введите свое имя',
				minlength: jQuery.validator.format('Минимальное количество символов: {0}')
			},
			phone: 'Пожалуйста, введите свой номер телефона',
			email: {
				required: 'Пожалуйста, введите свой почтовый адрес',
				email: 'Неправильно введен адрес почты'
			}
		}
	});
}
validateForms('#consultation-form');
validateForms('#consultation form');
validateForms('#order form');

//mask
$('input[name=phone]').mask("+7 (999) 999-99-99");

//Smooth scroll and pageup
$(window).scroll(function () {
	if ($(this).scrollTop() > 1600) {
		$('.pageup').fadeIn();
	} else {
		$('.pageup').fadeOut();
	}
});

$("a[href^='#']").click(function () {
	const _href = $(this).attr('href');
	$('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
	return false;
});

//wow animation
new WOW().init();
