// Mostrar mensaje al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    console.log("Bienvenido a la página oficial de ACEIG UNSA");
});

// Efecto de hover personalizado para los enlaces de redes
const enlaces = document.querySelectorAll('.iconos a');

enlaces.forEach((enlace) => {
    enlace.addEventListener('mouseover', () => {
        enlace.style.transform = 'scale(1.1)';
        enlace.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    });

    enlace.addEventListener('mouseout', () => {
        enlace.style.transform = 'scale(1)';
        enlace.style.boxShadow = 'none';
    });
});
