export const player = () => {
	const play = document.querySelector('.video-player__play');
	const contain = document.querySelector('.video-player__contain');
	const video = document.querySelector('.video-player__window');
	const progressBar = document.querySelector('.video-player__scroll-bar_progress');
	progressBar.value = 0;
	progressBar.min = 0;
	progressBar.max = video.duration;
	function initDuration() {
		progressBar.value = video.currentTime;
	}
	let startDuration;

	function playPauseVideo(){
		if (video.paused) {
			video.play();
			startDuration = setInterval(initDuration, 1000 / 66);
		}
		else {
			video.pause();
			contain.classList.toggle('hidden');
			clearInterval(startDuration);
		}
	}
	play.addEventListener('click', function () {
		contain.classList.add('hidden');
		video.classList.add('video-player__window_visible');
		playPauseVideo();
	});
	// const videoVisible = document.querySelector('.video-player__window_visible');
	video.addEventListener('click', playPauseVideo);
};
