const inputs = document.querySelectorAll('input');


function handleUpdate() {
	const prefix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + prefix);
}

inputs.forEach(input => {input.addEventListener('change', handleUpdate)});
inputs.forEach(input => {input.addEventListener('mousemove', handleUpdate)});