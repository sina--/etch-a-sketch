const defaultGridSize = 16;
const defaultPenColor = [0,0,0,1];
const modes = ['pen', 'eraser', 'rainbow',];

let gridSize = defaultGridSize;
let penColor = `rgba(${defaultPenColor.join()})`;
let activeMode = modes[0];
document.getElementById('pen').classList.add('activeButton');

function drawCanvas() {
    let canvas = document.getElementById('canvas');
    for(i = 0; i < gridSize ** 2; i++) {
        let box = document.createElement('div');
		canvas.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        box.className = 'box';
        box.setAttribute('id', i);
		box.addEventListener('mouseover', pen);
		canvas.appendChild(box); 
	}
}

function resizeCanvas() {
	let inputSize = document.getElementById('canvasSize').value;
	canvasSizePrint.textContent = `${inputSize} x ${inputSize}`;
    gridSize = inputSize;
	canvas.textContent = '';
	drawCanvas();
}

function modeSelector(event) {
	activeMode = event.target.id;
	let toolBox = document.getElementById('toolBox');
	for(let i = 0; i < modes.length; i++) {
		if(activeMode === toolBox.children[i].id) {
			toolBox.children[i].classList.add('activeButton');
		}
		else {
			toolBox.children[i].classList.remove('activeButton');
		}
	}
}

function pen(event) {
    let boxId = event.target.id;
    let tempBox = document.getElementById(boxId);
	if (activeMode === modes[0]) {
		penColor = changePenColor();
	}
	if (activeMode === modes[1]) {
		penColor = '#ffffff';
	}
	if (activeMode === modes[2]) {
		penColor = rainbow();
	}
	tempBox.style.backgroundColor = penColor; 
}

function changePenColor() {
	const setRGB = defaultPenColor;
	let printColorValues = document.querySelectorAll('[id^=printColor]')
	let colorValues = document.querySelectorAll('[id^=penColor]');
	for(let i = 0; i < setRGB.length; i++) {
		setRGB[i] = colorValues[i].value; 
		printColorValues[i].textContent = setRGB[i];
		let rgbBuffer = [0,0,0]
		rgbBuffer[i] = setRGB[i];
		colorValues[i].style.setProperty('--SliderColor', `rgb(${rgbBuffer})`);
		colorValues[i].value = setRGB[i];
	}
	penColor = `rgb(${setRGB.join()})`;
	document.getElementById('canvasSize').style.setProperty('--SliderColor', penColor);
	document.getElementById('header').style.setProperty('--red', 'red');
	document.getElementById('header').style.setProperty('--cyan', 'cyan');
	return(penColor);
}

function rainbow() {
	const randomRGB = defaultPenColor;
	let printColorValues = document.querySelectorAll('[id^=printColor]');
	let colorValues = document.querySelectorAll('[id^=penColor]');
	for(let i = 0; i < randomRGB.length; i++) {
		randomRGB[i] = Math.floor(Math.random() * 255);
		printColorValues[i].textContent = randomRGB[i];
		let rgbBuffer = [0,0,0]
		rgbBuffer[i] = randomRGB[i];
		colorValues[i].style.setProperty('--SliderColor', `rgb(${rgbBuffer})`);
		colorValues[i].value = randomRGB[i];
	}
	penColor = `rgb(${randomRGB.join()})`;
	document.getElementById('header').style.setProperty('--red',`rgb(${randomRGB[0]}, 0, 0)`);
	document.getElementById('header').style.setProperty('--cyan',`rgb(0,${randomRGB.slice(-2).join()})`);
	document.getElementById('canvasSize').style.setProperty('--SliderColor', penColor);
	return(penColor);
}

drawCanvas();
changePenColor();
