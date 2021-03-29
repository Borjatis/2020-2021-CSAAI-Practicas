console.log("Ejecutando JS de Borjatis...");

display = document.getElementById("display")
delet = document.getElementById("delet")
reset = document.getElementById("reset")
sqrt = document.getElementById('sqrt')
igual = document.getElementById("igual")

//Array de numeros
let digitos = document.getElementsByClassName("num");
//Array de operadores
let operacion = document.getElementsByClassName("operacion");

//-- Estados de la calculadora
const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2: 3,
  COMA: false,
}
 
//-- Variable de estado de la calculadora
//-- Al comenzar estamos en el estado incial
let estado = ESTADO.INIT;   

//--Bucle que lee cada digito que se pulsa, del 0 al 9
for(i=0; i<digitos.length; i++){
  digitos[i].onclick=(ev)=>{
      digito(ev.target.value);
  }
}
  
//--Bucle que lee cada operador que se pulsa, son
//suma, resta, multiplicación, división, exponencial
for (i=0; i<operacion.length; i++){
  operacion[i].onclick = (ev)=> {
    if(estado == ESTADO.OP1){
      operaciones(ev.target.value);
      console.log(`ESTADO ${estado}`);
      ESTADO.COMA = true;
    }
  }
}

//-- Poner coma y que no se repitan
coma.onclick = (ev) => {
  if(ESTADO.COMA){
  }else{
    display.innerHTML += ev.target.value;
    ESTADO.COMA = true;
  }
}

//-- Resolver raiz cuadrada
sqrt.onclick = () => {
  display.innerHTML = Math.sqrt(display.innerHTML);
}

//-- Resolver operaciones
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
  estado = ESTADO.OP1;
  console.log(`ESTADO ${estado}`);
  ESTADO.COMA = true;
}

//-- Borrar el ultimo digito o operador
delet.onclick = () => {
  if((display.innerHTML == '0')||(display.innerHTML == '')){
    display.innerHTML = '0';
  }else {
    display.innerHTML = display.innerHTML.slice(0,-1);
  }
}

//-- Poner a cero la expresion
//-- Y volver al estado inicial
reset.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
  console.log(`ESTADO ${estado}`);
  ESTADO.COMA = false;
}

//-- Función de retrollamada de los digitos (estados)
function digito(botones)
{
  //-- Se ha recibido un dígito
  //-- Según en qué estado se encuentre la calculadora
  //-- se hará una cosa u otra

  //--Mostramos directamente digito en el display
  if (estado == ESTADO.INIT) {
    display.innerHTML = botones;
    //-- Pasar al siguiente estado
    estado = ESTADO.OP1;
    console.log(`ESTADO ${estado}`);
  } else if (estado==ESTADO.OP1) {       
    //--En cualquier otro estado lo añadimos
     display.innerHTML += botones;
  } else if (estado==ESTADO.OPERATION) {       
    display.innerHTML += botones;
    ESTADO.COMA = false;
    //--Cuando hay operador añadimos y pasamos
    estado = ESTADO.OP2;
    console.log(`ESTADO ${estado}`);
  } else if (estado==ESTADO.OP2) {       
    display.innerHTML += botones;
  }    
}

//--Función de retrollamada de los operandos (estados)
function operaciones(operacion){
  if (estado != ESTADO.OPERATION) {
    display.innerHTML += operacion;
    estado = ESTADO.OPERATION;
  }
}
