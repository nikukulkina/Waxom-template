import Swiper from 'swiper';

export const initialSlider = () => {
	const slider = new Swiper('.swiper-container', {slidesPerColumn: 1, slidesPerGroup: 1, slidesPerView: 1, spaceBetween: 20, loop: true,
		navigation: {
			nextEl: '.slider__next',
			prevEl: '.slider__prev'}
	});

	const dots = document.querySelectorAll('.slider__dot');
	let i = 0;
	const prevBtn = document.querySelector('.slider__prev');
	const nextBtn = document.querySelector('.slider__next');
	console.log(dots[i]);

	prevBtn.addEventListener('click', function () {
		dots[i].classList.remove('dot-active');
		i--;

		if (i < 0) {
			i = dots.length - 1;
		}
		dots[i].classList.add('dot-active');

	});

	nextBtn.addEventListener('click', function () {
		dots[i].classList.remove('dot-active');
		i++;

		if (i >= dots.length) {
			i = 0;
		}
		dots[i].classList.add('dot-active');

	});
};
