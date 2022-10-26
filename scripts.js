let gridSize = 16;

function drawCanvas() {
    let canvas = document.getElementById('canvas');
    for(i = 0; i < gridSize ** 2; i++) {
		canvas.style.gridTemplateColumns = 'repeat( ' + gridSize + ', 1fr)';
        let box = document.createElement('div');
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
    tempBox.style.backgroundColor = '#000000';
}

function resizeCanvas() {
    const inputSize = Number(window.prompt("Type a number", ""));
    gridSize = inputSize;
	drawCanvas();
}
