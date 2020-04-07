const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 190;
ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
ctx.strokeStyle = 'white'
ctx.lineWidth = '25'
ctx.stroke();
