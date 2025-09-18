class Snowflake {
  constructor() {
    this.x = random(-width / 2, width / 2); //starter et tilfældigt sted på toppen.
    this.y = random(-height / 2 - 100, -height / 2); // lige over toppen
    this.z = random(-200, 200); // lidt dybde
    this.len = random(4, 12); // længden på "stregen"
    this.speed = random(1.0, 3.0); // faldefart
    this.wind = random(-0.5, 0.5); // lidt sideaffald
    this.twist = random(0.01, 0.03); // lille sway
    this.c = color(random(220, 255), random(230, 255), random(240, 255));
  }

  fall() {
    //vind
    this.x += this.wind + sin(frameCount * this.twist) * 0.3;
    this.y += this.speed;

    if (this.y > height / 2 + 20) {
      this.y = random(-height / 2 - 100, -height / 2);
      this.x = random(-width / 2, width / 2);
      this.z = random(-200, 200);
      this.speed = random(1.0, 3.0);
      this.len = random(4, 12);
      this.wind = random(-0.5, 0.5);
    }
  }

  show() {
    push();
    noStroke();
    fill(this.c);
    translate(this.x, this.y, this.z);
    sphere(1.5);
    pop();
  }
}
