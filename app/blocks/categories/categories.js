export const category = () => {
	const categories = document.querySelectorAll('.categories__item');

	for (let i = 0; i < categories.length; i++) {
		categories[i].addEventListener('click', function () {
			const activCategory = document.querySelector('.categories__item_active');
			activCategory.classList.remove('categories__item_active');
			categories[i].classList.add('categories__item_active');
		});
	}
	// for (const el of categories) {
	// 	el.addEventListener('click', function () {
	// 		const activCategory = document.querySelector('.categories__item_active');
	// 		activCategory.classList.remove('categories__item_active');
	// 		el.classList.add('categories__item_active');
	// 	});
	// }
};
