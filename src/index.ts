const n = 100;
const bars = [];
let s = 0;
let barWidth: number;
let sound;
function setup() {
  sound = loadSound('bo.mp3');
  barWidth = windowWidth / n;
  resizeCanvas(windowWidth, windowHeight);
  for (let i = 0; i < n; i++) {
    bars.push(i);
  }
  bars.sort((a, b) => random() - 0.5);
  colorMode(HSB);
  stroke(255, 0, 255);
}

function draw() {
  background(255);
  bars.forEach((h, i) => {
    i === s
      ? fill(color(0, 0, 0))
      : fill(color(map(h, 0, n, 10, 205), 255, 235));
    const barHeight = map(h, 0, n, 0, windowHeight);
    rect(i * barWidth, barHeight, barWidth, windowHeight - barHeight, 5);
  });
  bubbleSort(1);
}

let passes = 0;

function bubbleSort(steps: number = 1) {
  for (let i = 0; i < steps; i++) {
    if (s > n - passes) {
      if (passes === n) noLoop();
      s = 0;
      passes++;
      sound.play();
    }
    if (bars[s] > bars[s + 1]) {
      [bars[s], bars[s + 1]] = [bars[s + 1], bars[s]];
    }
    s++;
  }
}
