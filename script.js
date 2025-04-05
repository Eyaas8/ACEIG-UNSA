// Mostrar mensaje en la consola al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    console.log("Bienvenido a la página oficial de ACEIG UNSA 🌋🪨");
});

// Seleccionar todos los enlaces de redes sociales
const enlaces = document.querySelectorAll('.iconos a');

// Agregar efectos al pasar el mouse
enlaces.forEach((enlace) => {
    enlace.addEventListener('mouseover', () => {
        enlace.style.transform = 'scale(1.1)';
        enlace.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    });

    enlace.addEventListener('mouseout', () => {
        enlace.style.transform = 'scale(1)';
        enlace.style.boxShadow = 'none';
    });
});

