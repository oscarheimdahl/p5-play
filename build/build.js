var Bar = (function () {
    function Bar() {
        this.x = 0;
        this.y = -200;
        this.height = 10;
    }
    Bar.prototype.draw = function () {
        fill(0);
        rect(this.x, this.y, windowWidth, this.height);
    };
    Bar.prototype.move = function () {
        this.y++;
        if (this.y > windowHeight)
            this.y = -this.height;
    };
    return Bar;
}());
var Color = (function () {
    function Color(r, g, b) {
        if (r === void 0) { r = random(255); }
        if (g === void 0) { g = random(255); }
        if (b === void 0) { b = random(255); }
        this.r = r;
        this.g = g;
        this.b = b;
    }
    Color.prototype.withOpacity = function (alpha) {
        if (alpha === void 0) { alpha = 255; }
        return color(this.r, this.g, this.b, alpha);
    };
    return Color;
}());
var Comet = (function () {
    function Comet(x, color) {
        if (x === void 0) { x = 0; }
        if (color === void 0) { color = new Color(); }
        this.speed = random(1.5, 1.8);
        this.size = 10;
        this.y = random(20) * -1;
        this.noiseX = random(1000);
        this.noiseDX = 0.001;
        this.maxSize = 20;
        this.immune = true;
        this.strokeLength = random(50, 150);
        this.currentStroke = 0;
        this.toggleDraw = random() > 0.5;
        this.x = x;
        this.color = color;
    }
    Comet.prototype.draw = function () {
        noStroke();
        fill(this.color.withOpacity());
        if (this.toggleDraw)
            circle(this.x, this.y, this.size);
        this.currentStroke++;
        if (this.currentStroke > this.strokeLength) {
            this.strokeLength = random(50, 150);
            this.toggleDraw = !this.toggleDraw;
            this.currentStroke = 0;
        }
    };
    Comet.prototype.move = function () {
        this.checkOutsideScreen();
        this.y += this.speed;
        this.noiseX += this.noiseDX;
    };
    Comet.prototype.checkOutsideScreen = function () {
        var outBottom = this.y - this.size >= windowHeight;
        var outTop = this.y + this.size < 0;
        if (outBottom) {
            this.color = new Color();
            this.maxSize -= 10;
            this.y = -this.size;
            this.immune = true;
        }
        else if (outTop && !this.immune) {
            this.speed *= -1;
        }
        else if (!this.immune && this.y > 0) {
            this.immune = false;
        }
    };
    return Comet;
}());
var numComets = 200;
var comets = [];
var bar;
var y = 0;
function setup() {
    bar = new Bar();
    for (var i = 0; i < numComets; i++) {
        var x = (i * windowWidth) / numComets + windowWidth / (numComets * 2);
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
    comets.forEach(function (c) {
        c.move();
        c.draw();
    });
}
//# sourceMappingURL=build.js.map