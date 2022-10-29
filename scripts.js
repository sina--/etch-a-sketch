const defaultGridSize = 16;
const defaultPenColor = 'rgb(0, 0, 0)';
const modes = ['pen', 'eraser', 'rainbow'];

let gridSize = defaultGridSize;
let penColor = defaultPenColor;
let activeMode = modes[0];
document.getElementById('pen').classList.add('activeButton');

function drawCanvas() {
    let canvas = document.getElementById('canvas');
    for(i = 0; i < gridSize ** 2; i++) {
        let box = document.createElement('div');
		canvas.style.gridTemplateColumns = 'repeat( ' + gridSize + ', 1fr)';
        box.className = 'box';
        box.setAttribute('id', i);
		box.addEventListener('mouseover', pen);
		canvas.appendChild(box); 
	}
}

function resizeCanvas() {
	let inputSize = document.getElementById('canvasSize').value;
	canvasSizePrint.textContent = inputSize + ' x ' + inputSize;
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

function rainbow() {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	document.getElementById('printColorR').textContent = r;
	document.getElementById('printColorG').textContent = g;
	document.getElementById('printColorB').textContent = b;
	document.getElementById('header').style.setProperty('--red','rgb('+ r + ', 0, 0)');
	document.getElementById('header').style.setProperty('--cyan','rgb(0, ' + g + ', ' + b + ')');
	penColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
	document.getElementById('canvasSize').style.setProperty('--SliderColor', penColor);
	document.getElementById('penColorR').style.setProperty('--SliderColor','rgb('+ r + ', 0, 0)');
	document.getElementById('penColorG').style.setProperty('--SliderColor','rgb(0, ' + g + ', 0)');
	document.getElementById('penColorB').style.setProperty('--SliderColor','rgb(0, 0, ' + b + ')');
	document.getElementById('penColorR').value = r;
	document.getElementById('penColorG').value = g;
	document.getElementById('penColorB').value = b;
	return(penColor);
}

function changePenColor() {
	let inputColorR = document.getElementById('penColorR').value; 
	let inputColorG = document.getElementById('penColorG').value; 
	let inputColorB = document.getElementById('penColorB').value; 
	document.getElementById('printColorR').textContent = inputColorR;
	document.getElementById('printColorG').textContent = inputColorG;
	document.getElementById('printColorB').textContent = inputColorB;
	document.getElementById('header').style.setProperty('--red', 'red');
	document.getElementById('header').style.setProperty('--cyan', 'cyan');
	penColor = 'rgb(' + inputColorR + ',' + inputColorG + ',' + inputColorB + ')';
	document.getElementById('canvasSize').style.setProperty('--SliderColor', penColor);
	document.getElementById('penColorR').style.setProperty('--SliderColor','rgb('+ inputColorR + ', 0, 0)');
	document.getElementById('penColorG').style.setProperty('--SliderColor','rgb(0, ' + inputColorG + ', 0)');
	document.getElementById('penColorB').style.setProperty('--SliderColor','rgb(0, 0, ' + inputColorB + ')');
	return(penColor);
}

drawCanvas();
changePenColor();
