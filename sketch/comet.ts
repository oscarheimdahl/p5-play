class Comet {
  x: number;
  speed: number = random(1.5, 1.8);
  size: number = 10;
  y: number = random(20) * -1;
  noiseX = random(1000);
  noiseDX = 0.001;
  color: Color;
  maxSize = 20;

  immune = true;

  strokeLength = random(50, 150);
  currentStroke = 0;

  toggleDraw = random() > 0.5;

  constructor(x: number = 0, color: Color = new Color()) {
    this.x = x;
    this.color = color;
  }

  draw() {
    noStroke();
    fill(this.color.withOpacity());
    if (this.toggleDraw) circle(this.x, this.y, this.size);
    this.currentStroke++;
    if (this.currentStroke > this.strokeLength) {
      this.strokeLength = random(50, 150);
      this.toggleDraw = !this.toggleDraw;
      this.currentStroke = 0;
    }
  }

  move() {
    this.checkOutsideScreen();
    this.y += this.speed;
    this.noiseX += this.noiseDX;
  }

  checkOutsideScreen() {
    const outBottom = this.y - this.size >= windowHeight;
    const outTop = this.y + this.size < 0;
    if (outBottom) {
      this.color = new Color();
      this.maxSize -= 10;
      this.y = -this.size;
      this.immune = true;
    } else if (outTop && !this.immune) {
      this.speed *= -1;
    } else if (!this.immune && this.y > 0) {
      this.immune = false;
    }
  }
}
