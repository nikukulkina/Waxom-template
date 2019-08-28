export const burger = () => {
	const menuButton = document.querySelector('.burger-menu');
	menuButton.addEventListener('click', function () {
		const lines = menuButton.children;
		for (const item of lines) {
			item.classList.toggle('burger-menu__line_active');
		}
	});
};
