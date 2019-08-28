import $ from 'jquery';

export const accordeon = () => {
	$('.accordeon-item .accordeon-item__title').on('click', function () {
		$('.accordeon-item .accordeon-item__description').not($(this).next()).slideUp();
		$('.accordeon-item__icon').not($(this).prev()).removeClass('accordeon-item__icon_active');
		$(this).prev().toggleClass('accordeon-item__icon_active');
		$(this).next().slideToggle(400);
	});
};
