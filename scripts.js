const defaultGridSize = 16;
const defaultPenColor = 'rgb(0, 0, 0)';
const modes = ['pen', 'eraser', 'rainbow'];

let gridSize = defaultGridSize;
let penColor = defaultPenColor;
let activeMode = modes[0];

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

function modeSelector(selection) {
	if (selection === modes[0]) {
		activeMode = modes[0];
		document.getElementById('penBtn').style.setProperty('background', '#000000');
		document.getElementById('penBtn').style.setProperty('color', '#ffffff');
	}
	if (selection === modes[1]) {
		activeMode = modes[1];
	}
	if (selection === modes[2]) {
		activeMode = modes[2];
	}
	indicateMode();
}

function indicateMode() {
	if (activeMode === modes[0]) {
		document.getElementById('penBtn').style.setProperty('background', '#000000');
		document.getElementById('penBtn').style.setProperty('color', '#ffffff');
		document.getElementById('eraserBtn').style.removeProperty('background');
		document.getElementById('eraserBtn').style.removeProperty('color');
		document.getElementById('rainbowBtn').style.removeProperty('background');
		document.getElementById('rainbowBtn').style.removeProperty('color');
	}
	if (activeMode === modes[1]) {
		document.getElementById('penBtn').style.removeProperty('background');
		document.getElementById('penBtn').style.removeProperty('color');
		document.getElementById('eraserBtn').style.setProperty('background', '#000000');
		document.getElementById('eraserBtn').style.setProperty('color', '#ffffff');
		document.getElementById('rainbowBtn').style.removeProperty('background');
		document.getElementById('rainbowBtn').style.removeProperty('color');
	}
	if (activeMode === modes[2]) {
		document.getElementById('penBtn').style.removeProperty('background');
		document.getElementById('penBtn').style.removeProperty('color');
		document.getElementById('eraserBtn').style.removeProperty('background');
		document.getElementById('eraserBtn').style.removeProperty('color');
		document.getElementById('rainbowBtn').style.setProperty('background', '#000000');
		document.getElementById('rainbowBtn').style.setProperty('color', '#ffffff');
	}
}

function pen(event) {
    let boxId = event.target.id;
    let tempBox = document.getElementById(boxId);
	if (activeMode === modes[0]) {
		penColor = penColor;
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
	document.getElementById('canvasSize').style.setProperty('--SliderColor', penColor);
	document.getElementById('penColorR').style.setProperty('--SliderColor','rgb('+ r + ', 0, 0)');
	document.getElementById('penColorG').style.setProperty('--SliderColor','rgb(0, ' + g + ', 0)');
	document.getElementById('penColorB').style.setProperty('--SliderColor','rgb(0, 0, ' + b + ')');
	document.getElementById('penColorR').value = r;
	document.getElementById('penColorG').value = g;
	document.getElementById('penColorB').value = b;
	return('rgb(' + r + ', ' + g + ', ' + b + ')');
}

function resizeCanvas() {
	let inputSize = document.getElementById('canvasSize').value;
	let canvasSize = document.getElementById('canvasSizePrint');
	canvasSizePrint.textContent = inputSize + ' x ' + inputSize;
    gridSize = inputSize;
	canvas.textContent = '';
	drawCanvas();
}

function changePenColor() {
	let inputColorR = document.getElementById('penColorR').value; 
	let inputColorG = document.getElementById('penColorG').value; 
	let inputColorB = document.getElementById('penColorB').value; 
	penColor = 'rgb(' + inputColorR + ',' + inputColorG + ',' + inputColorB + ')';
	document.getElementById('printColorR').textContent = inputColorR;
	document.getElementById('printColorG').textContent = inputColorG;
	document.getElementById('printColorB').textContent = inputColorB;
	document.getElementById('canvasSize').style.setProperty('--SliderColor', penColor);
	document.getElementById('penColorR').style.setProperty('--SliderColor','rgb('+ inputColorR + ', 0, 0)');
	document.getElementById('penColorG').style.setProperty('--SliderColor','rgb(0, ' + inputColorG + ', 0)');
	document.getElementById('penColorB').style.setProperty('--SliderColor','rgb(0, 0, ' + inputColorB + ')');
}

drawCanvas();
changePenColor();
indicateMode();
