const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.beginPath()
const centerX = canvas.width/2;
const centerY = canvas.height/2;
ctx.moveTo(100, 350);
ctx.lineTo(500, 200);

ctx.fillStyle = 'white';

ctx.lineTo(100, 70)
ctx.fill();
