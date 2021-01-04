const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Functions

function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

function updatePlayButton() {
	const icon = this.paused ? '►' : '❚❚';
	toggle.textContent = icon;
}

function skip() {
	const skipTime = this.dataset.skip;
	video.currentTime += parseFloat(skipTime);
}

function handleRangeUpdate() {
	video[this.name] = this.value;
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
	console.log(e);
}


// EventListeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('timeupdate', handleProgress);


toggle.addEventListener('click', togglePlay);

skipButtons.forEach(btn => {
	btn.addEventListener('click', skip);
});

ranges.forEach(range => {
	range.addEventListener('mousemove', handleRangeUpdate);
	range.addEventListener('change', handleRangeUpdate);
})


let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => {mouseDown && scrub(e)})
progress.addEventListener('mousedown', () => { mouseDown = true});
progress.addEventListener('mouseup', () => { mouseDown = false});
