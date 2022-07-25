import './vendor';

document.addEventListener('DOMContentLoaded', () => {
	let root = document.getElementsByTagName('html')[0];
	setTimeout(() => {
		root.classList.add('is-intro-hide');
	}, 2000);
});

$(document).ready(() => {
	let $window = $(window);
	let menuBtn = $('#menuBtn');
	let menuList = $('.menu');
	let submenu = $('#submenu');
	let clientSlider = $('.client__slider .owl-carousel, .partners__items.owl-carousel');
	let mobileMenu = $('#mobileBtn');
	let header = $('header');
	let mobileCatalogLink = $('.catalogs__link');
	let mobileCatalogBtn = $('.mobile__close');
	let newsCarousel = $('.news__items.owl-carousel');
	let lang = $('.lang');
	let langCurrent = $('.lang-current');
	let subLang = $('.lang__sublang');
	let certficate = $('.certifications__slider.owl-carousel');
	let contactForm = $('#contactForm');
	let inputName = $('#name');
	let inputMail = $('#email');
	let mobileNav = $('.js-trigger');
	let catalogNav = $('.catalog__nav');
	let productTab = $('.product__tab');
	let lastScrollTop = 0;

	productTab.click(function () {
		productTab.removeClass('active').eq($(this).index()).addClass('active');
		$('.product__tabItem').hide().eq($(this).index()).show();
	}).eq(0).addClass('active');

	function validate() {
		contactForm.on('submit', (e) => {
			let nameVal = $('#name').val();
			let emailVal = $('#email').val();

			if (nameVal !== '') {
				inputName.removeClass('empty');
			} else {
				inputName.addClass('empty');
				e.preventDefault();
			}

			if (emailVal !== '') {
				inputMail.removeClass('empty');
			} else {
				inputMail.addClass('empty');
				e.preventDefault();
			}
		});
	}

	function langOpen() {
		langCurrent.on('click', (e) => {
			e.preventDefault();
			subLang.toggleClass('lang__sublang--open');
		});
	}

	function menu() {
		// Меню
		menuBtn.on('click', () => {
			submenu.toggleClass('menu__submenu--show menu__submenu--hide');
		});
	}

	jQuery(($) => {
		$(document).mouseup((e) => {
			if (!menuList.is(e.target)
				&& menuList.has(e.target).length === 0) {
				submenu.addClass('menu__submenu--hide').removeClass('menu__submenu--show');
			}
			if (!lang.is(e.target)
				&& lang.has(e.target).length === 0) {
				subLang.removeClass('lang__sublang--open');
			}
			if (catalogNav.is(e.target)
				&& catalogNav.has(e.target).length === 0) {
				catalogNav.removeClass('active');
			}
		});
	});

	// mobile menu
	function mobileMenuClick() {
		mobileMenu.on('click', () => {
			mobileMenu.toggleClass('mobile__menu-btn--open');
			$('header').toggleClass('header--bg');
			menuList.slideToggle('fast');
		});

		menuBtn.on('click', () => {
			submenu.slideToggle();
		});
	}

	// Конец Меню

	// play the targeted video (and hide the poster frame)
	function videoPlay($wrapper) {
		let $iframe = $wrapper.find('.js-videoIframe');
		let src = $iframe.data('src');
		// hide poster
		$wrapper.addClass('videoWrapperActive');
		// add iframe src in, starting the video
		$iframe.attr('src', `${src}?autoplay=1`);
	}

	// poster frame click event
	$(document).on('click', '.js-videoPoster', function (ev) {
		ev.preventDefault();
		let $poster = $(this);
		let $wrapper = $poster.closest('.js-videoWrapper');
		videoPlay($wrapper);
	});
	// clients & partners slider
	clientSlider.owlCarousel({
		loop: true,
		dots: false,
		nav: true,
		mouseDrag: false,
		margin: 20,
		navText: ['<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 12L2 6.5L7 1"  stroke-width="2"/></svg>', '<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 12L6 6.5L1 1" stroke-width="2"/></svg>'],
		responsive: {
			0: {
				items: 1,
				autoplay: false,
			},
			1025: {
				items: 6,
				autoplay: true,
			},
		},
	});
	function newsSlider() {
		newsCarousel.owlCarousel({
			loop: true,
			dots: false,
			nav: true,
			mouseDrag: false,
			margin: 20,
			autoplay: true,
			items: 1,
			navText: ['<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 12L2 6.5L7 1"  stroke-width="2"/></svg>', '<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 12L6 6.5L1 1" stroke-width="2"/></svg>'],
			responsive: {
				0: {
					items: 1,
				},
				1025: {
					items: 3,
				},
			},
		});
	}
	certficate.owlCarousel({
		loop: true,
		dots: false,
		nav: true,
		mouseDrag: false,
		margin: 20,
		navText: ['<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 12L2 6.5L7 1"  stroke-width="2"/></svg>', '<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 12L6 6.5L1 1" stroke-width="2"/></svg>'],
		responsive: {
			0: {
				items: 1,
				autoplay: false,
			},
			1025: {
				items: 4,
				autoplay: true,
			},
		},
	});
	$('[data-fancybox="certifications"]').fancybox({
		afterLoad(instance, current) {
			let pixelRatio = window.devicePixelRatio || 1;

			if (pixelRatio > 1.5) {
				current.width /= pixelRatio;
				current.height /= pixelRatio;
			}
		},
	});
	// header fixed
	function headerFixed() {
		$(window).scroll(function () {
			let st = $(this).scrollTop();

			if (st > lastScrollTop && !header.hasClass('header--bg')) {
				$('header').addClass('header--scroll');
			} else {
				$('header').removeClass('header--scroll');
			}
			if (st > 100) {
				$('header').addClass('header--fixed');
			} else {
				$('header').removeClass('header--fixed');
			}
			lastScrollTop = st;
		});
	}
	function headerPadding() {
		let headerHeight = header.outerHeight();
		$('.content').css({paddingTop: `${headerHeight}px`});
	}

	function mobileCatalog(a) {
		a.on('click', (e) => {
			e.preventDefault();
			let $this = $(e.currentTarget);
			$this.closest('.catalogs__item').toggleClass('catalogs__item--active').find('.catalogs__info').slideToggle('fast');
		});
	}

	function table() {
		$window.scroll(() => {
			let e = $('table');

			if (e.length === 1) {
				$('.swipe-table').length === 0 &&
                    $('body').append(
                    	'<div class="swipe-table"><span class="swipe_table"></span></div>'
                    );

				let a = e.offset();
				let t = e.innerHeight();
				let i = a.top + t;
				let s = $(window).scrollTop() + $(window).height();

				let l = a.top + (t - 100) / 2;

				i < s &&
                    ($('.swipe-table').css({top: l}),
                    $('.swipe-table').fadeIn('slow'),
                    setTimeout(() => {
                    	$('.swipe-table').fadeOut('slow');
                    }, 2500));
			}
		});
	}

	function mobileNvCatalog() {
		mobileNav.on('click', (e) => {
			let $this = $(e.currentTarget);
			$this.toggleClass('js-trigger--active');
			$this.closest('.catalog__nav-item').toggleClass('active').find('.catalog__nav-sublist').slideToggle('fast');
		});

		$('.catalog__nav-link').each(function () {
			let hBlock = parseInt($(this).outerHeight());
			$(this).closest('.catalog__nav-item').find(mobileNav).css({top: `calc(${hBlock}px - 40px)`});
		});

		$('.catalog__nav-title').on('click', (e) => {
			let $this = $(e.currentTarget);

			$this.closest('nav').toggleClass('active');
		});
	}

	$('.submenu').on('click', (e) => {
		let $this = $(e.currentTarget);

		$this.find('.menu__submenu').slideToggle();
	});

	function catalogLinkStatic() {
		let $catalog = $('.catalogs__item');
		let $catalogListFirst = $catalog.eq(0);
		$catalogListFirst.addClass('active');
		$('.catalogs__item').each(function () {
			$(this).hover(() => {
				$(this).addClass('active').siblings($catalog).removeClass('active');
			});
		});
	}
	catalogLinkStatic();

	if ($window.width() > 1025) {
		// mobile menu run
		menu();
		$('.catalogs__item').each(function () {
			let curHeight = $(this).height();
			let addHeight = curHeight + 25;

			if (curHeight < 50) {
				$(this).children('.catalogs__info').css({top: '-75px'});
			} else {
				$(this).children('.catalogs__info').css({top: `${-addHeight}px`});
			}
		});
	} else {
		mobileMenuClick();
		newsSlider();
		table();
		mobileNvCatalog();
		mobileCatalog(mobileCatalogLink);
		mobileCatalog(mobileCatalogBtn);
	}

	validate();
	headerPadding();
	headerFixed();
	langOpen();
});
