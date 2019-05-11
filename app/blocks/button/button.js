import $ from 'jquery';

const hello = () => {
	console.log('Hi');
};
$('.js-button').on('click', hello);
