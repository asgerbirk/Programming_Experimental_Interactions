let colorValue = 0;

let rainDrops = [];
let snowFlake = [];

let astronaut;
let ballerina;

function preload() {
  astronaut = loadModel("assets/astronaut.obj", true);
  ballerina = loadModel("assets/ballerina.obj", true);
}
function setup() {
  createCanvas(400, 400, WEBGL);
  // Lys → ellers bliver modellerne let helt mørke
  ambientLight(80); // base-lys

  for (let i = 0; i < 200; i++) {
    rainDrops.push(new Rain());
  }

  for (let i = 0; i < 300; i++) {
    snowFlake.push(new Snowflake());
  }
}

function draw() {
  background(colorValue);

  applyRotation();
  //drawAstronaut();
  //drawBallerina();

  for (let drop of rainDrops) {
    drop.fall();
    drop.show();
  }
  for (let flake of snowFlake) {
    // Update each snowflake position and display
    flake.fall();
    flake.show();
  }
}

function drawAstronaut() {
  push();
  // placer astronauten
  translate(5, 10, 0);

  rotateY(frameCount * 0.01);
  rotateX(sin(frameCount * 0.008) * 0.2);

  rotateZ(PI);

  noStroke();
  normalMaterial(210, 215, 230);
  model(astronaut);
  pop();
}

function drawBallerina() {
  push();
  translate(90, 30, 0);

  rotateY(frameCount * 0.012);

  rotateZ(PI);
  rotateX(-HALF_PI);

  noStroke();

  normalMaterial(235, 210, 230);

  model(ballerina);
  pop();
}

function rotateWithFrameCount() {
  rotateZ(frameCount);
  rotateX(frameCount);
  rotateY(frameCount);
}

function applyRotation() {
  rotateX(map(mouseY, 0, height, -PI / 6, PI / 6));
  rotateY(map(mouseX, 0, width, -PI / 4, PI / 4));
}

function avoidSnowAndRain() {
  const size = drawAstronaut().width;
  const height = drawAstronaut().height;
}

function mouseClicked() {
  if (colorValue === 0) {
    colorValue = 150;
  } else {
    colorValue = 0;
  }
}

/*
function drawConnection() {
  push();
  line(0, 0, 0, 30, 20, -10);
  sphere(10);
  translate(30, 20, -10);
  sphere(10);
  pop();
}
*/
