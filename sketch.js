let texto = ""; // Lo que el usuario escribe

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Handlee');
  textSize(28);
  fill(50, 90);
  noStroke();
}

function draw() {
  background(255, 250, 240); // Fondo cálido, tipo papel

  drawLines(); // Líneas de cuaderno

  // Encabezado
  textAlign(LEFT, TOP);
  textSize(20);
  fill(120, 70);
  text("Escribe tu diario personal...", 60, 20);

  // Texto del diario
  textSize(28);
  fill(50, 90);
  textLeading(38);
  text(texto, 60, 60, width - 100, height - 100);
}

function keyTyped() {
  if (key === 'Backspace') {
    texto = texto.substring(0, max(0, texto.length - 1));
  } else if (key !== CODED) {
    texto += key;
  }
}

function drawLines() {
  // Línea de margen rosado (como en cuaderno)
  stroke(255, 160, 180, 150); // rosado suave
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
