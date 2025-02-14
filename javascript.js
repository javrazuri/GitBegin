document.addEventListener('DOMContentLoaded', () => {
    console.log('¡Hola, Mundo! Proyecto de aprendizaje activo.');

    const boton = document.getElementById('miBoton');
    boton.addEventListener('click', () => {
        alert('¡Has hecho clic en el botón!');
    });
});
