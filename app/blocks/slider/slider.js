import Swiper from 'swiper';

export const initialSlider = () => {
	const slider = new Swiper('.swiper-container', {slidesPerColumn: 1, slidesPerGroup: 1, slidesPerView: 1, spaceBetween: 20, loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets'},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'}
	});
	const prevBtn = document.querySelector('.slider__prev');
	prevBtn.addEventListener('click', function () {
		slider.slidePrev();
	});
	const nextBtn = document.querySelector('.slider__next');
	nextBtn.addEventListener('click', function () {
		slider.slideNext();
	});
};
