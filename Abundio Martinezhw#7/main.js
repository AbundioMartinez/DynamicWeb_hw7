

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = `rgb(255, 255, 255)`;
ctx.fillRect(190, 90, 660, 460);
ctx.clearRect(235, 130, 230, 230);
ctx.strokeRect(225, 120, 250, 250);

function draw() {
  if (canvas.getContext) {
    ctx = canvas.getContext("2d");
  } else {
    const para = document.querySelector(".unsupported");
    para.textContent = `Your browser does not support HTML5 Canvas.`;
  }
}

draw();