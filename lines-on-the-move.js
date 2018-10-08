function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

var startingX = 100;

function draw() {
  background(255);

  for (var x = startingX; x < width; x = x + 10) {
    line(x, height/2, x+100, height/2-75);
  }
  startingX = startingX + 1;
}
