document.addEventListener('DOMContentLoaded', () => {
    // 1. Efecto Typewriter (Máquina de escribir) para el Home
    const typeWriterElement = document.querySelector('.typewriter');
    const textToType = typeWriterElement.getAttribute('data-text');
    typeWriterElement.innerHTML = ''; // Limpiamos el div
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            // Reemplaza los saltos de línea \n por <br> de HTML
            if(textToType.charAt(i) === '\\' && textToType.charAt(i+1) === 'n') {
                typeWriterElement.innerHTML += '<br><br>';
                i += 2;
            } else {
                typeWriterElement.innerHTML += textToType.charAt(i);
                i++;
            }
            // Velocidad de tipeo aleatoria para que parezca más real
            setTimeout(typeWriter, Math.random() * 50 + 20);
        } else {
            // Mostrar CLI prompt al terminar de escribir
            const cliPrompt = document.querySelector('.cli-prompt');
            if(cliPrompt) {
                cliPrompt.classList.remove('hidden');
            }
        }
    }
    
    // Iniciar el efecto tras 500ms
    setTimeout(typeWriter, 500);

    // 2. Navegación (SPA)
    const navButtons = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Quitar clase active de todos los botones
            navButtons.forEach(b => b.classList.remove('active'));
            // Añadir clase active al pulsado
            btn.classList.add('active');

            // Ocultar todas las vistas
            views.forEach(view => {
                view.classList.remove('active');
                view.classList.add('hidden');
            });

            // Mostrar la vista objetivo
            const targetId = btn.getAttribute('data-target');
            const targetView = document.getElementById(targetId);
            if (targetView) {
                targetView.classList.remove('hidden');
                targetView.classList.add('active');
            }
        });
    });
});