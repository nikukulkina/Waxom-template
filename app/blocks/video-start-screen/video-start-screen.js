export const player = () => {
	const play = document.querySelector('.video-start-screen__play');
	const contain = document.querySelector('.video-start-screen__contain');
	const videoPlayer = document.querySelector('.video-youtube');
	const videoPlayerFrame = document.querySelector('.video-youtube__frame');

	play.addEventListener('click', () => {
		contain.classList.add('video-start-screen__contain_hidden');
		videoPlayer.classList.add('video-youtube_visible');
		videoPlayerFrame.contentWindow.postMessage(JSON.stringify({event: 'command', func: 'playVideo'}), '*');
	});
};
