console.log("Ejecutando js...")

//-- Leer el párrafo identificado como test
const test = document.getElementById('test')

//-- Configurar el manejador para el evento de
//-- pulsación de botón
test.onclick = () => {
  console.log("Click sobre el párrafo...")
}
/* Todavia mas compactos que los anteriores
en este no se pone ni function */