// btn-load
$('.btn-load').on('click', function (e) {
	e.preventDefault();
	$(this).parent('.question-wrapper').find('.question-box:hidden').slice(0, 4).slideDown();

	var onBlock = $(this).parent('.question-wrapper').find('.question-box:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});
// btn-load end

// mobile menu
$('.btn-burger').on('click', function() {
	$('header .nav-menu').fadeToggle();
});

$('.nav-menu__close').on('click', function () {
	$('header .nav-menu').fadeOut();
});
// mobile menu end

// активная ссылка меню
$('header .menu li a').each(function () {
	var location = window.location.href;
	var link = this.href;
	if (location === link) {
		$(this).addClass('active');
	}
});
// активная ссылка меню end