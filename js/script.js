// ====== Interactividad con Tone.js ====== //
const actionBtn = document.getElementById("actionBtn");

// Creamos un player con tu obra
const player = new Tone.Player("audio/demo.mp3").toDestination();

// El botón activa el contexto de audio y reproduce
actionBtn.addEventListener("click", async () => {
  await Tone.start(); // Necesario por políticas de navegador
  if (player.state === "started") {
    player.stop(); // Si ya suena, lo detiene
    actionBtn.textContent = "Escuchar Demo";
  } else {
    player.start(); // Si no suena, lo inicia
    actionBtn.textContent = "Detener Demo";
  }
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0); // Fondo negro, cambia si quieres

  // Crear nuevas partículas
  if (frameCount % 5 === 0) { // cada 5 frames
    particles.push(new Particle(random(width), random(height)));
  }

  // Mostrar y actualizar partículas
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].alpha <= 0) {
      particles.splice(i, 1);
    }
  }
}

// Clase Partícula
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(2, 6);
    this.alpha = 255;
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.alpha -= 2; // Se desvanece
  }

  show() {
    fill(255, 165, 0, this.alpha); // Color naranja con transparencia
    ellipse(this.x, this.y, this.size);
  }
}

// Ajustar canvas al cambiar tamaño de ventana
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}