export const category = () => {
	const categories = document.querySelectorAll('.categories__item');
	for (let i = 0; i < categories.length; i++) {
		categories[i].addEventListener('click', function () {
			const activCategory = document.querySelector('.categories__item_active');
			const id = this.getAttribute('data-category');
			let projects = document.querySelectorAll('.project');
			const content = document.querySelectorAll('.project[data-category = "' + id + '"]');
			activCategory.classList.remove('categories__item_active');
			categories[i].classList.add('categories__item_active');
			for (let j = 0; j < projects.length; j++) {
				projects[j].classList.add('project_hidden');
			}
			for (let n = 0; n < content.length; n++) {
				content[n].classList.remove('project_hidden');
			}
			document.querySelector('.all').addEventListener('click', function () {
				for (let q = 0; q < projects.length; q++) {
					projects[q].classList.remove('project_hidden');
				}
			});
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
