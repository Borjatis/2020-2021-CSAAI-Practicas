console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 600;
canvas.height = 1000;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Texto solido
ctx.font = "50px Arial Black";
ctx.fillStyle = 'black'
ctx.fillText("7 LIVES", 300, 100);

ctx.font = "50px Arial Black";
ctx.fillStyle = 'black'
ctx.fillText("027", 100, 100);

ctx.beginPath();
    //-- Raqueta
    ctx.moveTo(100, 900);
    ctx.lineTo(180, 900);

    ctx.strokeStyle = 'red';
    //-- Tamaño
    ctx.lineWidth = 10;
    ctx.stroke()

    //-- Bolita
    ctx.arc(250, 700, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'yellow';

    //-- Dibujar el trazo
    ctx.stroke()

    //-- Dibujar el relleno
    ctx.fill()
    
ctx.closePath()