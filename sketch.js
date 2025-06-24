let input;
let texto = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Handlee');
  textSize(28);
  noStroke();

  input = select('#diarioInput');
  input.position(60, 60);
  input.size(windowWidth - 120, windowHeight - 120);
  input.input(() => texto = input.value());

  // Mostrar input al hacer clic
  canvas.mousePressed(() => {
    input.style('display', 'block');
    input.elt.focus();
  });
}

function draw() {
  background(255, 250, 240);
  dibujarLineas();

  // Encabezado
  textAlign(LEFT, TOP);
  textSize(20);
  fill(120, 70);
  text("Escribe tu diario personal...", 60, 20);
}

function dibujarLineas() {
  // Línea rosada vertical
  stroke(255, 160, 180, 150);
  strokeWeight(2);
  line(50, 0, 50, height);

  // Líneas horizontales
  stroke(220, 180);
  strokeWeight(1);
  for (let y = 60; y < height; y += 40) {
    line(60, y, width - 40, y);
  }

  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  input.position(60, 60);
  input.size(windowWidth - 120, windowHeight - 120);
}
