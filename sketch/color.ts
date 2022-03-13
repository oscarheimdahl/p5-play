class Color {
  r: number;
  g: number;
  b: number;

  constructor(
    r: number = random(255),
    g: number = random(255),
    b: number = random(255)
  ) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  withOpacity(alpha: number = 255) {
    return color(this.r, this.g, this.b, alpha);
  }
}
