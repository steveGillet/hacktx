const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0);
  ctx.beginPath();
  ctx.moveTo(30, 96);
  ctx.lineTo(70, 66);
  ctx.lineTo(103, 76);
  ctx.lineTo(170, 15);
  ctx.stroke();
};
img.src = "tractor.svg";

const tractor = {
  x: 100,
  y: 100,
  width: 30,
  height: 30,
  radius: 25,
  draw() {
    //dac586

    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  },
};
const hay = {
  x: 100,
  y: 75,
  radius: 15,
  exists: 1,
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#dac586";
    ctx.fill();
    ctx.strokeStyle = "#dac586";
    ctx.stroke();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#9b7653";
  ctx.fillRect(10, 10, canvas.width, canvas.height);
  if (hay.exists) hay.draw();
  tractor.draw();
  raf = window.requestAnimationFrame(draw);
}

document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowDown" && tractor.y != canvas.height - tractor.height) {
    tractor.y++;
    raf = window.requestAnimationFrame(draw);
    console.log(tractor.y);
  } else if (event.key == "ArrowUp" && tractor.y != tractor.height / 2) {
    tractor.y--;
    raf = window.requestAnimationFrame(draw);
    console.log(tractor.y);
  } else if (event.key == "ArrowLeft" && tractor.x != tractor.width / 2) {
    tractor.x--;
    raf = window.requestAnimationFrame(draw);
    console.log(tractor.x);
  } else if (
    event.key == "ArrowRight" &&
    tractor.x != canvas.width - tractor.width
  ) {
    tractor.x++;
    raf = window.requestAnimationFrame(draw);
    console.log(tractor.x);
  }
  if (hay.x == tractor.x && hay.y == tractor.y) hay.exists = 0;
});

tractor.draw();
hay.draw();
