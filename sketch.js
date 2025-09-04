let rainDrops = [];

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
  directionalLight(255, 255, 255, -0.5, -1, -0.3); // “sol” retning
  for (let i = 0; i < 200; i++) {
    rainDrops.push(new Rain());
  }
}

function draw() {
  background(175);

  applyRotation();
  //drawAstronaut();
  //drawBallerina();

  drawConnection();
  for (let drop of rainDrops) {
    drop.fall();
    drop.show();
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
  // placer ballerinaen til højre for midten
  translate(90, 30, 0);

  // rolig pirouette
  rotateY(frameCount * 0.012);

  // --- ORIENTERING (prøv disse én ad gangen alt efter model) ---
  // Hvis hun står på hovedet:
  rotateZ(PI);
  // Hvis hun ligger ned (Z-up -> Y-up):
  rotateX(-HALF_PI);
  // Hvis fronten vender bagud:
  // rotateY(PI);

  // evt. justér størrelse hvis normalize gav noget stort/lille
  // scale(1.2);

  // --- MATERIALE ---
  noStroke();

  // Debug: se om lys/materiale er problemet
  // normalMaterial(); return;

  // Standard: ensfarvet der reagerer på lys
  normalMaterial(235, 210, 230);

  // Nødplan (altid synlig):
  // emissiveMaterial(220, 220, 230);

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

function drawConnection() {
  push();
  line(0, 0, 0, 30, 20, -10);
  sphere(10);
  translate(30, 20, -10);
  sphere(10);
  pop();
}
