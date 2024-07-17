const canvas = document.getElementById('designCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;
let brushColor = document.getElementById('colorPicker').value;
let brushSize = document.getElementById('brushSize').value;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);
document.getElementById('colorPicker').addEventListener('input', (e) => brushColor = e.target.value);
document.getElementById('brushSize').addEventListener('input', (e) => brushSize = e.target.value);
document.getElementById('clearCanvas').addEventListener('click', clearCanvas);

function startDrawing() {
    drawing = true;
    ctx.beginPath();
}

function stopDrawing() {
    drawing = false;
    ctx.closePath();
}

function draw(event) {
    if (!drawing) return;

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
