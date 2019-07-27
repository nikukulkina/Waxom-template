import Swiper from 'swiper';

export const initialSlider = () => {
	const slider = new Swiper('.swiper-container', {slidesPerColumn: 1, slidesPerGroup: 1, slidesPerView: 1, spaceBetween: 20, loop: true,
		navigation: {
			nextEl: '.slider__next',
			prevEl: '.slider__prev'}
	});

	const dots = document.querySelectorAll('.slider__dot');

	slider.on('slideChange', function () {
		console.log(slider.realIndex);
		const d = document.querySelector('.dot-active');
		d.classList.remove('dot-active');
		dots[slider.realIndex].classList.add('dot-active');
	});

	for (let i = 0; i < dots.length; i++) {
		dots[i].addEventListener('click', function () {
			slider.slideTo(i + 1);
		});
	}
};
