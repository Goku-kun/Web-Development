const canvas = document.querySelector('#sketch-canvas');
console.log(canvas);

const ctx = canvas.getContext('2d');

const shakeButton = document.querySelector('.shake');

const { width, height } = canvas;

//setup canvas
ctx.lineJoin = 'round';
ctx.lineCap = 'round'; // shape of the pointer changes to circle, other value can be square
ctx.lineWidth = 20;

// create random x and y starting points
const x = genRandom(width);
const y = genRandom(height);

function genRandom(upperCap) {
    return Math.floor(Math.random() * upperCap);
}

// make a drawer

ctx.beginPath(); // starts a drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();


// handler for keys
function handleKey(event) {
    if (event.key.includes('Arrow')) {
        event.preventDefault();
        console.log(event.key);
    }
}
window.addEventListener('keydown', handleKey);