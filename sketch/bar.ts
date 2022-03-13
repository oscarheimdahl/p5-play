class Bar {
  x = 0;
  y = -200;
  height = 10;
  constructor() {}

  draw() {
    fill(0);
    rect(this.x, this.y, windowWidth, this.height);
  }
  move() {
    this.y++;
    if (this.y > windowHeight) this.y = -this.height;
  }
}
