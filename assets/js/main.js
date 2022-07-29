


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';


$(document).ready(function ($) {
	$body = $('body');

	if (devStatus) {
		pageWidget(['contacts']);
		pageWidget(['events']);
		pageWidget(['finance-map']);
		pageWidget(['finance']);
		pageWidget(['help']);
		pageWidget(['events']);
		pageWidget(['index']);
		pageWidget(['log']);
		pageWidget(['material']);
		pageWidget(['news']);
		pageWidget(['normal']);
		pageWidget(['password']);
		pageWidget(['person']);
		pageWidget(['policy']);
		pageWidget(['register']);
		pageWidget(['report']);
		pageWidget(['single-events']);
		pageWidget(['single-finance']);
		pageWidget(['single-material']);
		pageWidget(['single-news-default']);
		pageWidget(['single-events-default']);
		pageWidget(['single-news']);
		getAllClasses('html', '.elements_list');
	}
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	initSelect();
	if($('#maps')[0]) {
		maps();
	}
	if($('#map')[0]) {
		map();
	}
	if(windowWidth < mediaPoint1) {
		// burgerMobile();
	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		// var vh2 = document.documentElement.clientHeight * 0.01;

		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: transparent'].join(';');
var message = 'Developed by KotoFeelGood https://api.whatsapp.com/send?phone=79615311386&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0';
console.info('%c%s', styles, message);



$(document).ready(function() {
	const calendars = Array.from(document.querySelectorAll('.calendar ')).map(item => jsCalendar.new(item, "30/01/2022", {
		navigator : true,
		navigatorPosition : "left",
		zeroFill : false,
		monthFormat : "month ‘22",
		dayFormat : "DD",
		language : "ru",
		onDateRender: ((date, element, info) => {
			if (!info.isCurrent && (date.getDay() == 0 || date.getDay() == 6)) {
				element.classList.add('active_events')
			}
		})
	}))

	// console.log(calendars)
	// calendars.onDayRender(function(index, element, info) {
	// 	// If weekend, make it red
	// 	if (index == 0 || index == 6) {
	// 		element.style.color = '#c32525';
	// 	}
	// });
})

   // Get the element




	 function map() {

		var Placemark = {};

		ymaps.ready(function() {
			// console.log('2');
			var myMap = new ymaps.Map('map', {
				center: [55.751574, 37.573856],
				zoom: 11,
				controls: ['zoomControl']
			}, {
				suppressMapOpenBlock: true,
			});
			// console.log('3');
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
				'<div class="map_marker"  style="color: #2B2D41; font-weight: bold;" ><p>$[properties.iconContent]</p></div>'
		),
			myMap.behaviors.disable('scrollZoom');
		
			$('.finance_item').each(function() {
				var obj = $(this).attr("data-coord");
				var num = $(this).attr("data-number");
				obj = JSON.parse(obj); //преобразовываем в объект
				console.log(num)
		
				myMap.geoObjects
					.add(new ymaps.Placemark(obj, { 
            iconContent: num,
					}, {
            iconLayout: 'default#imageWithContent',
						iconImageHref: '',
						// iconImageSize: [75, 98],
						iconImageOffset: [-5, -38],
						iconContentLayout: MyIconContentLayout
					}));
		
			}); //each

		});
	// 	ymaps.ready(function () {
	// 		var myMap = new ymaps.Map('map', {
	// 						center: [55.751574, 37.573856],
	// 						zoom: 11
	// 				}, {
	// 						searchControlProvider: 'yandex#search'
	// 				}),

	// 				MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
	// 						'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
	// 				),
	
	// 				myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
	// 						hintContent: 'Северная улица, 273',
	// 						balloonContent: 'Северная улица, 273'
	// 				}, {
	// 						iconLayout: 'default#image',
	// 						iconImageHref: '/i/global/map_1.svg',
	// 						iconImageSize: [75, 98],
	// 						iconImageOffset: [-5, -38],
	// 				}),
	
	// 				myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
	// 						hintContent: 'ул. Петровская, 53 Санкт-Петербург, Россия',
	// 						balloonContent: 'ул. Петровская, 53 Санкт-Петербург, Россия',
	// 				}, {
	// 						iconLayout: 'default#imageWithContent',
	// 						iconImageHref: '/i/global/map_2.svg',
	// 						iconImageSize: [75, 98],
	// 						iconImageOffset: [-5, -38],
	// 						iconContentOffset: [15, 15],
	// 						iconContentLayout: MyIconContentLayout
	// 				});
	
	// 		myMap.geoObjects
	// 				.add(myPlacemark)
	// 				.add(myPlacemarkWithContent);
	// });
}


var heroSlider = new Swiper('.hero_slider', {
	pagination: '.swiper-pagination',
	slidesPerView: 'auto',
	paginationClickable: true,
	spaceBetween: 0,
	speed: 600,
	pagination: {
		el: '.hero_pug'
	},
	navigation: {
		nextEl: '.hero_right',
		prevEl: '.hero_left'
	}
});


var serviceSlider = new Swiper('.service_slider ', {
	pagination: '.swiper-pagination',
	slidesPerView: 'auto',
	paginationClickable: true,
	spaceBetween: 0,
	speed: 600,
	loop: true,
	centeredSlides: true,
	breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 14
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3.5,
      spaceBetween: 56
    }
  }
});





function accordion(title, content) {
	// hide all content	
	let accordionTitle = $(title),
		accordionContent = $(content);
	$(accordionContent).hide();
	
	$(accordionTitle).on('click', function () {
		let $this = $(this);
		$this.parent().toggleClass('active_mod').siblings().removeClass('active_mod');
		$(accordionContent).slideUp(250);

		if (!$this.next().is(":visible")) {
			$this.next().slideDown(250);
		}
	});
};

accordion('.faq_item--head', '.faq_item--body');

// tabs
function tabs(link, block) {
	let linkSelector = $(link),
		blockSelector = $(block);

	$(linkSelector).on('click', function (e) {
		e.preventDefault();

		let $this = $(this),
			currentData = $(this).data('tab');

		$(blockSelector).removeClass('active_tab');
		$(linkSelector).removeClass('active_tab');

		$(block + '[data-tab="' + currentData + '"]').addClass('active_tab');
		$this.addClass('active_tab');
	});
}

tabs('.static_indiHead--list>li', '.static_indiBody--tab');
tabs('.person_tab--head>li', '.person_tab--item');
tabs('.register_form--head>li', '.register_form--item');


$(document).ready(function() {
	$('.header_burger, .burger_close').on('click', () => {
		$('.burger').toggleClass('active');
		$('html').toggleClass('hidden')
	})

	$('.static_indiHead--list>li').first().trigger('click')
	$('.person_tab--head>li').first().trigger('click')
	$('.register_form--head>li').first().trigger('click')
})



function initSelect() {
	const selectFilter = Array.from(document.querySelectorAll('select')).map(item => new Choices(item, {
	
		searchEnabled: false,
		placeholder: false,
		shouldSortItems: true,
		resetScrollPosition: true,
		noChoicesText: '',
		placeholder: true,
		itemSelectText: '',
	}));
}




var galleryTop = new Swiper('.singleMaterial_slider ', {
	spaceBetween: 10,
	speed: 600,
	navigation: {
		nextEl: '.singleMaterial_thumb--next',
		prevEl: '.singleMaterial_thumb--prev',
	},
	loop: true,
	loopedSlides: 12
});
var galleryThumbs = new Swiper('.singleMaterial_thumbslider', {
	spaceBetween: 10,
	centeredSlides: true,
	slidesPerView: 12,
	touchRatio: 0.2,
	slideToClickedSlide: true,
	loop: true,
	loopedSlides: 12,
	breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 14,
			loopedSlides: 12,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
			spaceBetween: 10,
    },
    // when window width is >= 640px
    640: {
			slidesPerView: 12,
			spaceBetween: 10,
    }
  }
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;



function maps() {
	ymaps.ready(function () {
		var myMaps = new ymaps.Map('maps', {
						center: [60.144095, 29.930985],
						zoom: 13,
						scroll: false,
				}, {
						searchControlProvider: 'yandex#search'
				}),
	
				myPlacemark = new ymaps.Placemark(myMaps.getCenter(), {
						balloonContent: 'ул. Петровская, 53 Санкт-Петербург, Россия'
				}, {
						iconLayout: 'default#image',
						iconImageHref: '/i/global/mapping.svg',
						iconImageSize: [60, 70],
						iconImageOffset: [-5, -38]
				});
	
			myMaps.geoObjects
				.add(myPlacemark)
	});
}


// $("form").validate({
//   // errorElement: "span"
// });

$(document).ready(function() {
	validate();
	// if($('.register_form--item').hasClass('active_tab')) {
	// 	validate();
	// }
})

function validate() {
	// $("form").validate({
	// });
	$('#form1').validate({});
	$('#form2').validate({});
	$('#form3').validate({});
}

$(document).ready(function(){
	// alert('Good morning')
	// console.log('Good ')

	

	// console.log(accBtn)

})




































