function etchasketch() {
    let board = document.getElementById('board');
    for(i = 0; i < 10; i++) {
        let box = document.createElement('div');
        box.textContent = 'B' + i;
        box.className = 'box';
        box.setAttribute('id', i);
        box.addEventListener('click', changeColor);
        board.appendChild(box); 
    }
}
etchasketch();

function changeColor(event) {
    console.log(event.target.id);
    let boxId = event.target.id;
    let tempBox = document.getElementById(boxId);
    tempBox.style.backgroundColor = 'red';
}
