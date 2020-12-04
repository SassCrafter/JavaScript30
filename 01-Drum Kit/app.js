function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');

	if (recordBtn.classList.contains('active')) recordSound(e);
	if (e.keyCode === )
}

function recordSound(e) {
	soundsArr.push(e.keyCode);
	console.log(soundsArr);
	//return soundsArr;
}



const keys = document.querySelectorAll('.key');
const recordBtn = document.querySelector('.record-btn');
recordBtn.addEventListener('click', () => recordBtn.classList.toggle('active'));
const soundsArr = [];
keys.forEach(key => {
		key.addEventListener('transitionend', removeTransition)});
document.addEventListener('keydown', playSound);