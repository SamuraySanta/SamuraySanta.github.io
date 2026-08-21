---
layout: page
title: /home/yeray
permalink: /
---

<style>
  /* 1. CAMBIAR TIPOGRAFÍA Y TAMAÑO DE LOS TÍTULOS */
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
  
  h1, h2, h3 {
    font-family: 'VT323', monospace !important;
    text-shadow: 0px 0px 8px rgba(0, 255, 0, 0.5); /* Brillo verde estilo neón */
    margin-bottom: 0.5em !important;
  }
  
  /* Tamaños escalonados para los títulos */
  h1 { font-size: 3.5em !important; } /* Título principal muy grande */
  h2 { font-size: 2.8em !important; } /* Subtítulos grandes */
  h3 { font-size: 2.2em !important; } /* Títulos de sección */

  /* 2. AGRANDAR EL TEXTO GENERAL Y MEJORAR LA LECTURA */
  body, p, li, a {
    font-size: 1.15rem !important; /* Aumenta el texto normal un 15% */
    line-height: 1.6 !important; /* Añade un poco de aire entre líneas */
  }

  /* 3. ANIMACIÓN DE FONDO: EFECTO MONITOR CRT */
  body::after {
    content: " ";
    display: block;
    position: fixed;
    top: 0; 
    left: 0; 
    bottom: 0; 
    right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.3) 50%);
    z-index: 999;
    background-size: 100% 4px;
    pointer-events: none; 
    animation: scanlines 10s linear infinite;
  }

  @keyframes scanlines {
    0% { background-position: 0 0; }
    100% { background-position: 0 100vh; }
  }
</style>

# > whoami

Hola, soy **Yeray León**. 

Soy un perfil técnico enfocado en [tu especialidad, ej: ciberseguridad, administración de sistemas, desarrollo]. Me dedico a construir, asegurar y optimizar infraestructura.

Actualmente, dedico mi tiempo a [lo que estés estudiando o trabajando ahora, ej: prepararme certificaciones, automatizar procesos, investigar vulnerabilidades].

Bienvenido a mi terminal. Usa el menú superior para navegar por mi sistema.
