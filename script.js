const canvas = document.querySelector("canvas");
const button = document.querySelector("h3");
const ctx = canvas.getContext("2d");

const hayRadius = 15;
let points = 0;
const tractorStartingX = 100;
const tractorStartingY = 100;
const startingHays = 4;
let numHays = startingHays;
const img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0);
  // ctx.beginPath();
  // ctx.moveTo(30, 96);
  // ctx.lineTo(70, 66);
  // ctx.lineTo(103, 76);
  // ctx.lineTo(170, 15);
  // ctx.stroke();
};
img.src = "tractor.svg";

const tractor = {
  x: tractorStartingX,
  y: tractorStartingY,
  width: 30,
  height: 30,
  radius: 25,
  draw() {
    //dac586

    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  },
};
let hays = [];
for (let i = 0; i < startingHays; i++) {
  let hay = {
    radius: hayRadius,
    x: Math.random() * (canvas.width - 4 * hayRadius) + 2 * hayRadius,
    y: Math.random() * (canvas.height - 4 * hayRadius) + 2 * hayRadius,
    exists: 1,
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = "#dac586";
      ctx.fill();
      // ctx.strokeStyle = "#dac586";
      // ctx.stroke();
    },
  };
  hays.push(hay);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#9b7653";
  ctx.fillRect(10, 10, canvas.width, canvas.height);
  for (var i = 0; i < hays.length; i++) {
    if (hays[i].exists) hays[i].draw();
  }
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
  for (var i = 0; i < hays.length; i++) {
    if (
      tractor.x >= hays[i].x - 30 &&
      tractor.x <= hays[i].x + 0 &&
      tractor.y >= hays[i].y - 30 &&
      tractor.y <= hays[i].y + 0 &&
      hays[i].exists
    ) {
      hays[i].exists = 0;
      points++;
      document.getElementById("h2").innerHTML = `Points: ${points}`;
    }
  }
  for (var i = 0; i < hays.length; i++) {
    if (hays[i].exists) return;
  }
  hays = [];
  numHays++;
  for (let i = 0; i < numHays; i++) {
    let hay = {
      radius: hayRadius,
      x: Math.random() * (canvas.width - 4 * hayRadius) + 2 * hayRadius,
      y: Math.random() * (canvas.height - 4 * hayRadius) + 2 * hayRadius,
      exists: 1,
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "#dac586";
        ctx.fill();
        // ctx.strokeStyle = "#dac586";
        // ctx.stroke();
      },
    };
    hays.push(hay);
  }
});

button.addEventListener("click", function (event) {
  points = 0;
  document.getElementById("h2").innerHTML = `Points: ${points}`;
  tractor.x = tractorStartingX;
  tractor.y = tractorStartingY;
  tractor.draw();
  hays = [];
  for (let i = 0; i < startingHays; i++) {
    let hay = {
      radius: hayRadius,
      x: Math.random() * (canvas.width - 4 * hayRadius) + 2 * hayRadius,
      y: Math.random() * (canvas.height - 4 * hayRadius) + 2 * hayRadius,
      exists: 1,
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "#dac586";
        ctx.fill();
        // ctx.strokeStyle = "#dac586";
        // ctx.stroke();
      },
    };
    hays.push(hay);
  }
  numHays = startingHays;
});

console.log(hays);
console.log(Math.random() * (canvas.width - hays[0].radius) + hays[0].radius);
