let texto = "";
let input;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Handlee');
  textSize(28);
  noStroke();

  // Referencia al input invisible
  input = select('#inputTexto');
  input.input(actualizarTexto);

  // Activa input al hacer clic
  canvas.mousePressed(() => {
    input.elt.focus();
  });
}

function draw() {
  background(255, 250, 240);
  dibujarLineas();

  // Encabezado
  textSize(20);
  fill(120, 70);
  textAlign(LEFT, TOP);
  text("Escribe tu diario personal...", 60, 20);

  // Texto principal
  textSize(28);
  fill(50, 90);
  textLeading(38);
  text(texto, 60, 60, width - 100, height - 100);
}

function actualizarTexto() {
  texto = this.value();
}

function dibujarLineas() {
  // Línea vertical rosada
  stroke(255, 160, 180, 150);
  strokeWeight(2);
  line(50, 0, 50, height);

  // Líneas horizontales tipo cuaderno
  stroke(220, 180);
  strokeWeight(1);
  for (let y = 60; y < height; y += 40) {
    line(60, y, width - 40, y);
  }
  noStroke();
}
