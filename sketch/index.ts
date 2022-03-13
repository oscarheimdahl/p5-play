const numComets = 200;
const comets: Comet[] = [];
let bar: Bar;
let y = 0;
function setup() {
  bar = new Bar();
  for (let i = 0; i < numComets; i++) {
    const x = (i * windowWidth) / numComets + windowWidth / (numComets * 2);
    comets.push(new Comet(x, new Color()));
  }
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  bar.move();
  bar.draw();
  comets.forEach((c) => {
    c.move();
    c.draw();
  });
}
