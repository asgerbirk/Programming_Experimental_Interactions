class Rain {
  constructor() {
    this.x = random(-200, 200); // fordi vi er i WEBGL
    this.y = random(-200, -100);
    this.z = random(-200, 200);
    this.speed = random(1, 3);
    this.len = random(5, 5); // længde på dråben
  }

  fall() {
    this.y += this.speed;

    // hvis den falder forbi bunden, reset til toppen
    if (this.y > 200) {
      this.y = random(-200, -100);
      this.speed = random(2, 5);
    }
  }

  show() {
    stroke(0, 0, 255);
    line(this.x, this.y, this.z, this.x, this.y + this.len, this.z);
  }
}
