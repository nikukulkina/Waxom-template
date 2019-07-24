import Swiper from 'swiper';

export const initialSlider = () => {
	const slider = new Swiper('.js-slider', {slidesPerColumn: 1, slidesPerGroup: 1, slidesPerView: 1, spaceBetween: 20});
};
