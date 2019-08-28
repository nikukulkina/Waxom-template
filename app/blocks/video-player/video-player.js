export const player = () => {
	const play = document.querySelector('.video-player__play');
	const contain = document.querySelector('.video-player__contain');
	const video = document.querySelector('.video-player__window');
	const progressBar = document.querySelector('.video-player__scroll-bar_progress');
	progressBar.value = 0;
	progressBar.min = 0;
	video.onloadedmetadata = function () {
		progressBar.max = video.duration;
		console.log({video});
		console.log(progressBar.min);
		console.log(progressBar.max);
		console.log(video.duration);
	};
	const volumeBar = document.querySelector('.video-player__scroll-bar_volume');
	volumeBar.min = 0;
	volumeBar.max = 100;
	volumeBar.value = 100;
	function initDuration() {
		progressBar.value = video.currentTime;
	}
	let startDuration;
	function playPauseVideo(){
		if (video.paused) {
			contain.classList.add('hidden');
			video.play();
			startDuration = setInterval(initDuration, 1000 / 66);
		}
		else {
			video.pause();
			contain.classList.remove('hidden');
			clearInterval(startDuration);
		}
	}
	function clearDuration() {
		clearInterval(startDuration);
		if (video.paused) {
			console.log(5);// линтер не пропускает пустой блок
		}
		else {
			playPauseVideo();
		}
	}
	function moveRange() {
		video.currentTime = progressBar.value;
		playPauseVideo();
	}
	function volumeChange() {
		video.volume = volumeBar.value / 100;
	}
	const controls = document.querySelector('.video-player__controls');
	play.addEventListener('click', function () {
		video.classList.add('video-player__window_visible');
		controls.classList.add('video-player__controls_visible');
		playPauseVideo();
	});
	video.addEventListener('click', playPauseVideo);
	progressBar.addEventListener('mousedown', clearDuration);
	progressBar.addEventListener('mouseup', moveRange);
	const playBtn = document.querySelector('.video-player__play-btn');
	playBtn.addEventListener('click', playPauseVideo);
	volumeBar.addEventListener('mousemove', volumeChange);
};
