const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.id = 'matrix-bg';
document.body.appendChild(canvas);

// Estilos del canvas para mandarlo al fondo
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '-1';
canvas.style.opacity = '0.10'; // Muy sutil. Súbelo a 0.30 si lo quieres más visible
canvas.style.pointerEvents = 'none';

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// Caracteres (ceros y unos)
const letters = '01';
const fontSize = 16;
const columns = width / fontSize;

const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

// Función que dibuja la animación
function draw() {
    // Fondo semitransparente para dejar "estela"
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, width, height);
    
    // Color de las letras (Usa verde hacker o gris)
    ctx.fillStyle = '#0F0'; 
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Adapta el tamaño si cambias la ventana
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

// Ejecuta la animación
setInterval(draw, 50);
