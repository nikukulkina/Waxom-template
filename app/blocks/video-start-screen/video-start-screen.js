export const player = () => {
	const play = document.querySelector('.video-start-screen__play');
	const contain = document.querySelector('.video-start-screen__contain');
	const videoPlayer = document.querySelector('.video-youtube');
	play.addEventListener('click', () => {
		contain.classList.add('video-start-screen__contain_hidden');
		videoPlayer.classList.add('video-youtube_visible');
	});
};
