let texto = ""; // Lo que el usuario escribe
let escribiendo = true;

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  c.canvas.addEventListener("mousedown", () => {
    // Forzar el foco cuando el usuario haga clic en el canvas
    let fs = fullscreen();
    if (!fs && windowWidth < 600) fullscreen(true);
    c.elt.focus();
  });

  textFont('Handlee');
  textSize(28);
  fill(50, 90);
  noStroke();
}

function draw() {
  background(255, 250, 240); // Fondo cálido, tipo papel
  drawLines();

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

function keyPressed() {
  if (keyCode === BACKSPACE) {
    texto = texto.substring(0, max(0, texto.length - 1));
  }
}

function keyTyped() {
  // Evita que se escriban teclas especiales
  if (key.length === 1) {
    texto += key;
  }
}

function drawLines() {
  stroke(255, 160, 180, 150); // margen rosado
  strokeWeight(2);
  line(50, 0, 50, height);

  stroke(220, 180);
  strokeWeight(1);
  for (let y = 60; y < height; y += 40) {
    line(60, y, width - 40, y);
  }

  noStroke();
}
