let gridSize = 16;
let penColor = 'rgb(0, 0, 0)';

function drawCanvas() {
    let canvas = document.getElementById('canvas');
    for(i = 0; i < gridSize ** 2; i++) {
        let box = document.createElement('div');
		canvas.style.gridTemplateColumns = 'repeat( ' + gridSize + ', 1fr)';
        box.className = 'box';
        box.setAttribute('id', i);
        box.addEventListener('mouseover', changeColor);
        canvas.appendChild(box); 
    }
}

drawCanvas();

function changeColor(event) {
    let boxId = event.target.id;
    let tempBox = document.getElementById(boxId);
    tempBox.style.backgroundColor = penColor; 
}

function resizeCanvas() {
	let inputSize = document.getElementById('canvasSize').value;
	let canvasSize = document.getElementById("canvasSizePrint");
	canvasSizePrint.textContent = inputSize + " x " + inputSize;
    gridSize = inputSize;
	canvas.textContent = '';
	drawCanvas();
}

function changePenColor() {
	let inputColorR = document.getElementById("penColorR").value; 
	let inputColorG = document.getElementById("penColorG").value; 
	let inputColorB = document.getElementById("penColorB").value; 
	penColor = "rgb(" + inputColorR + "," + inputColorG + "," + inputColorB + ")";
	document.getElementById("printColorR").textContent = inputColorR;
	document.getElementById("printColorG").textContent = inputColorG;
	document.getElementById("printColorB").textContent = inputColorB;
	//document.getElementById("penColorR").style.backgroundColor = "rgb(" + inputColorR + ", 0, 0)";
}


