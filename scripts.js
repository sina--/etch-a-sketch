let gridSize = 16;

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
    tempBox.style.backgroundColor = '#000000';
}

function resizeCanvas() {
    const inputSize = Number(window.prompt("Type a number", ""));
	let canvas = document.getElementById('canvas');
    gridSize = inputSize;
	canvas.textContent = '';
	drawCanvas();
}


