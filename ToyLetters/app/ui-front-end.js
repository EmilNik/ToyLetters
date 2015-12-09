(function () {
	$('#nav-menu').on('click', function () {
		if ($('#nav-menu-button').hasClass('skrollable-between')) {
			return;
		}

		if ($('.nav-ul').hasClass('is-desktop')) {

			$('#nav-menu').toggleClass('active');
			if ($('#nav-menu').hasClass('active')) {
				$('#nav-bg').css('background-color', 'rgba(0, 0, 0, 0.5)');
				$('#nav-bg').css('opacity', '1');
				$('.nav-ul-li').css('opacity', '1', 'important');
			} else {
				$('#nav-bg').css('background-color', 'transparent');
				$('#nav-bg').css('opacity', '0');
				$('.nav-ul-li').css('opacity', 0);
			}
		} else {
			$('#nav-menu').toggleClass('active');
			if ($('#nav-menu').hasClass('active')) {
				$('ul.nav-ul.is-mobile li>a').css('opacity', 1);
				$('ul.nav-ul.is-mobile li').css('background-color', 'rgba(0, 0, 0, 0.5)');
			} else {
				$('ul.nav-ul.is-mobile li>a').css('opacity', 0);
				$('ul.nav-ul.is-mobile li').css('background-color', 'transparent');
			}
		}
	});

	var removeClassActive = function () {
		for (var i = 0; i < $('.nav-ul-li-active').length; i++) {
			if ($($('.nav-ul-li-active')[i]).hasClass('active')) {
				$($('.nav-ul-li-active')[i]).removeClass('active');
			}
		}
	}

	$('.nav-ul-li').on('click', function () {
		removeClassActive();
	})

	$('.nav-ul-li-active').on('click', function (ev) {
		$(ev.target.parentNode).addClass('active');
	});
} ());