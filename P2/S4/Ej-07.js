console.log("Ejecutando js...")

//-- Leer el párrafo identificado como test
const test = document.getElementById('test')

/* Mucho cuidado porque equivocandote en cualquier 
letrilla aqui, te da error, prueba a quitar
por ejemplo una t del test: tes */

//-- Configurar el manejador para el evento de
//-- pulsación de botón
test.onclick = function () {
  console.log("Click sobre el párrafo...")
}
/*Comportamiento igual que el Ejer anterior
salvo que en este es mas compacto, sin 
tener que llamar a funciones */ 
