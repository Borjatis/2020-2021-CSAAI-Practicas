console.log("Ejecutando JS...");

const start = document.getElementById("start")
const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 760;
canvas.height = 1000;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

const ESTADO = {
    INIT: 0,
    SAQUE: 1,
}

//-- Comienza el estado inicial
let estado = ESTADO.INIT;

//-- Coordenadas del objeto
let x = 140;
let y = 885;

//-- Velocidades del objeto
let velx = -9;
let vely = -3;

//-- Funcion principal de animacion
function update() 
{
  console.log("test");
  //-- Algoritmo de animacion:
  //-- 1) Actualizar posicion del  elemento
  //-- (física del movimiento rectilineo uniforme)

  start.onclick = () => {
    estado = ESTADO.SAQUE;
    console.log("Saque");
    //canvas.focus();
  }

   //-- Condicion de rebote en extremos verticales del canvas
   if (x < 10 || x >= (canvas.width - 10) ) {
    velx = -velx;
  }

  //-- Condición de rebote en extremos horizontales del canvas
  if (y <= 10) {
    vely = -vely;
  }

  //-- Condición de rebote en extremos horizontales del canvas
  if ( y > (canvas.height) ) {
    estado = ESTADO.INIT;
    x = 140;
    y = 885;
    vely = -vely;
  }

  //-- Actualizar la posición
  if (estado == ESTADO.SAQUE) {
    x = x + velx;
    y = y + vely;
  }

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  ctx.beginPath();
        //-- Bolita
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 1;
        ctx.fillStyle = 'white';

        //-- Dibujar el trazo
        ctx.stroke()

        //-- Dibujar el relleno
        ctx.fill()
        
  ctx.closePath()

  //-- Texto solido
  ctx.font = "50px Arial Black";
  ctx.fillStyle = 'white'
  ctx.fillText("7 LIVES", 400, 100);

  ctx.font = "50px Arial Black";
  ctx.fillStyle = 'white'
  ctx.fillText("027", 100, 100);

  ctx.beginPath();
      //-- Raqueta
      ctx.moveTo(100, 900);
      ctx.lineTo(180, 900);

      ctx.strokeStyle = 'purple';
      //-- Tamaño
      ctx.lineWidth = 10;
      ctx.stroke()

      //-- Dibujar el trazo
      ctx.stroke()

      //-- Dibujar el relleno
      ctx.fill()
      
  ctx.closePath()

  ctx.beginPath();
      //-- Ladrillos rojos de dimensiones 75x30
      ctx.rect(5,170, 75, 30);
      ctx.rect(80,170, 75, 30);
      ctx.rect(155,170, 75, 30);
      ctx.rect(230,170, 75, 30);
      ctx.rect(305,170, 75, 30);
      ctx.rect(380,170, 75, 30);
      ctx.rect(455,170, 75, 30);
      ctx.rect(530,170, 75, 30);
      ctx.rect(605,170, 75, 30);
      ctx.rect(680,170, 75, 30);
      ctx.strokeStyle = 'black';
      //-- Dibujar
      ctx.fillStyle = 'red';

      //-- Cambiar el tamaño de la linea del trazo
      ctx.lineWidth = 4;

      //-- Rellenar
      ctx.fill();

      //-- Dibujar el trazo
      ctx.stroke()
      
  ctx.closePath()

  ctx.beginPath();
      //-- Ladrillos rojos de dimensiones 75x30
      ctx.rect(5,200, 75, 30);
      ctx.rect(80,200, 75, 30);
      ctx.rect(155,200, 75, 30);
      ctx.rect(230,200, 75, 30);
      ctx.rect(305,200, 75, 30);
      ctx.rect(380,200, 75, 30);
      ctx.rect(455,200, 75, 30);
      ctx.rect(530,200, 75, 30);
      ctx.rect(605,200, 75, 30);
      ctx.rect(680,200, 75, 30);
      ctx.strokeStyle = 'black';
      //-- Dibujar
      ctx.fillStyle = 'hotpink';

      //-- Cambiar el tamaño de la linea del trazo
      ctx.lineWidth = 4;

      //-- Rellenar
      ctx.fill();

      //-- Dibujar el trazo
      ctx.stroke()
      
  ctx.closePath()

  ctx.beginPath();
      //-- Ladrillos rojos de dimensiones 75x30
      ctx.rect(5,230, 75, 30);
      ctx.rect(80,230, 75, 30);
      ctx.rect(155,230, 75, 30);
      ctx.rect(230,230, 75, 30);
      ctx.rect(305,230, 75, 30);
      ctx.rect(380,230, 75, 30);
      ctx.rect(455,230, 75, 30);
      ctx.rect(530,230, 75, 30);
      ctx.rect(605,230, 75, 30);
      ctx.rect(680,230, 75, 30);
      ctx.strokeStyle = 'black';
      //-- Dibujar
      ctx.fillStyle = 'orange';

      //-- Cambiar el tamaño de la linea del trazo
      ctx.lineWidth = 4;

      //-- Rellenar
      ctx.fill();

      //-- Dibujar el trazo
      ctx.stroke()
      
  ctx.closePath()

  ctx.beginPath();
      //-- Ladrillos rojos de dimensiones 75x30
      ctx.rect(5,260, 75, 30);
      ctx.rect(80,260, 75, 30);
      ctx.rect(155,260, 75, 30);
      ctx.rect(230,260, 75, 30);
      ctx.rect(305,260, 75, 30);
      ctx.rect(380,260, 75, 30);
      ctx.rect(455,260, 75, 30);
      ctx.rect(530,260, 75, 30);
      ctx.rect(605,260, 75, 30);
      ctx.rect(680,260, 75, 30);
      ctx.strokeStyle = 'black';
      //-- Dibujar
      ctx.fillStyle = 'yellow';

      //-- Cambiar el tamaño de la linea del trazo
      ctx.lineWidth = 4;

      //-- Rellenar
      ctx.fill();

      //-- Dibujar el trazo
      ctx.stroke()
      
  ctx.closePath()

  ctx.beginPath();
      //-- Ladrillos rojos de dimensiones 75x30
      ctx.rect(5,290, 75, 30);
      ctx.rect(80,290, 75, 30);
      ctx.rect(155,290, 75, 30);
      ctx.rect(230,290, 75, 30);
      ctx.rect(305,290, 75, 30);
      ctx.rect(380,290, 75, 30);
      ctx.rect(455,290, 75, 30);
      ctx.rect(530,290, 75, 30);
      ctx.rect(605,290, 75, 30);
      ctx.rect(680,290, 75, 30);
      ctx.strokeStyle = 'black';
      //-- Dibujar
      ctx.fillStyle = 'green';

      //-- Cambiar el tamaño de la linea del trazo
      ctx.lineWidth = 4;

      //-- Rellenar
      ctx.fill();

      //-- Dibujar el trazo
      ctx.stroke()
      
  ctx.closePath()

  ctx.beginPath();
      //-- Ladrillos rojos de dimensiones 75x30
      ctx.rect(5,320, 75, 30);
      ctx.rect(80,320, 75, 30);
      ctx.rect(155,320, 75, 30);
      ctx.rect(230,320, 75, 30);
      ctx.rect(305,320, 75, 30);
      ctx.rect(380,320, 75, 30);
      ctx.rect(455,320, 75, 30);
      ctx.rect(530,320, 75, 30);
      ctx.rect(605,320, 75, 30);
      ctx.rect(680,320, 75, 30);
      ctx.strokeStyle = 'black';
      //-- Dibujar
      ctx.fillStyle = 'cyan';

      //-- Cambiar el tamaño de la linea del trazo
      ctx.lineWidth = 4;

      //-- Rellenar
      ctx.fill();

      //-- Dibujar el trazo
      ctx.stroke()
      
  ctx.closePath()

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

//-- ¡Que empiece la función!
update();

