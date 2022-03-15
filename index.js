var n = 100;
var bars = [];
var s = 0;
var barWidth;
var sound;
function setup() {
    sound = loadSound('bo.mp3');
    barWidth = windowWidth / n;
    resizeCanvas(windowWidth, windowHeight);
    for (var i = 0; i < n; i++) {
        bars.push(i);
    }
    bars.sort(function (a, b) { return random() - 0.5; });
    colorMode(HSB);
    stroke(255, 0, 255);
}
function draw() {
    background(255);
    bars.forEach(function (h, i) {
        i === s
            ? fill(color(0, 0, 0))
            : fill(color(map(h, 0, n, 10, 205), 255, 235));
        var barHeight = map(h, 0, n, 0, windowHeight);
        rect(i * barWidth, barHeight, barWidth, windowHeight - barHeight, 5);
    });
    bubbleSort(1);
}
var passes = 0;
function bubbleSort(steps) {
    var _a;
    if (steps === void 0) { steps = 1; }
    for (var i = 0; i < steps; i++) {
        if (s > n - passes) {
            if (passes === n)
                noLoop();
            s = 0;
            passes++;
            sound.play();
        }
        if (bars[s] > bars[s + 1]) {
            _a = [bars[s + 1], bars[s]], bars[s] = _a[0], bars[s + 1] = _a[1];
        }
        s++;
    }
}
