export const projects = () => {
	const btn = document.querySelector('.projects__button');

	function generatePost() {
		return `<div data-category="illustration" class="project">
			<div class="project__wrap">
				<img src="/assets/images/phone.png" alt="Project Image" class="project__img" title="" />
				<div class="project__hover-icons">
					<svg class="project__link">
						<use xlink:href="/assets/images/icon.svg#icon_link"></use>
					</svg>
					<svg class="project__lupa">
						<use xlink:href="/assets/images/icon.svg#icon_lupa"></use>
					</svg>
				</div>
				<svg class="project__arrow">
					<use xlink:href="/assets/images/icon.svg#icon_arrow"></use>
				</svg>
			</div>
			<span class="project__title">Claritas Etiam Processus</span>
			<p class="project__description">Photography, Nature</p>
		</div>`;
	}
	btn.addEventListener('click', function (e) {
		e.preventDefault();
		const postContainer = document.querySelector('.projects-js');
		for (let i = 1; i <= 6; i++){
			postContainer.innerHTML += generatePost();
		}
	});
};
