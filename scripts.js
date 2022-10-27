let gridSize = 16;
let penColor = "#000000";

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
	let inputColor = document.getElementById("penColor").value; 
	penColor = "#" + inputColor;
}


