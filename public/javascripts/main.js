
// Función para mostrar un mensaje en la consola cuando se hace clic en el botón "Contactame YA"
document.querySelector('#final button').addEventListener('click', function() {
    console.log('¡Gracias por tu interés! Te contactaremos pronto.');
});




// Selecciona el encabezado
const header = document.querySelector('header');

// Agrega un evento de desplazamiento para detectar cuándo se ha desplazado
window.addEventListener('scroll', () => {
  // Verifica si el usuario ha desplazado más allá de la altura del encabezado
  if (window.scrollY > header.offsetHeight) {
    // Si se ha desplazado, agrega la clase 'header-white' al encabezado
    header.classList.add('header-white');
  } else {
    // Si está en la parte superior, quita la clase 'header-white' (vuelve al color original)
    header.classList.remove('header-white');
  }
});

header.classList.add('white'); // Agrega la clase 'white' para cambiar el color y ancho

// Selecciona el elemento de encabezado
const mainheader = document.querySelector('header');

// Función para manejar el cambio de clase
function handleHeaderColor() {
  if (window.scrollY === 0) {
    // Estás en la parte superior de la página
    header.classList.add('white');
  } else {
    // No estás en la parte superior de la página
    header.classList.remove('white');
  }
}

// Agrega un controlador de eventos para el evento de desplazamiento
window.addEventListener('scroll', handleHeaderColor);

// Llama a la función para configurar el estado inicial
handleHeaderColor();









