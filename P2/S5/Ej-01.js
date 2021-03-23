//-- Contador de clicks de boton

///Poner esto de momento para saber si se ejecuta 
console.log("Ejecutando JS...");

//-- Acceder a los elementos del DOM
///Cte de solo lectura
const display = document.getElementById("display");
const boton = document.getElementById("boton");

//-- Contador de clicks
///Objeto o variable para leer y escribir
let cont = 0;

//-- Configurar retrollamada del boton
boton.onclick = () => {
  console.log("Click!");

  //-- Incrementar contador
  cont += 1;

  //-- Actualizar el display
  display.innerHTML = cont;
}