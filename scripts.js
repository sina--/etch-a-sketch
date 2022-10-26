let gridSize = 16;

function drawCanvas() {
    let canvas = document.getElementById('canvas');
    for(i = 0; i < gridSize ** 2; i++) {
		canvas.style.gridTemplateColumns = 'repeat( ' + gridSize + ', 1fr)';
        let box = document.createElement('div');
        //box.textContent = 'B' + i;
        box.className = 'box';
        box.setAttribute('id', i);
        box.addEventListener('click', changeColor);
        canvas.appendChild(box); 
    }
}

drawCanvas();

function changeColor(event) {
    let boxId = event.target.id;
    let tempBox = document.getElementById(boxId);
    tempBox.style.backgroundColor = '#000000';
}
