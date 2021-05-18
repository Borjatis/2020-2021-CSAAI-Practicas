console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso a los deslizadores
const deslizadorR = document.getElementById('deslizadorR');
const deslizadorG = document.getElementById('deslizadorG');
const deslizadorB = document.getElementById('deslizadorB');

//-- Valor de los deslizadores
const range_value_R = document.getElementById('range_value_R');
const range_value_G = document.getElementById('range_value_G');
const range_value_B = document.getElementById('range_value_B');

//--Botones
const boton_grises = document.getElementById('blancoynegro');
const negativo = document.getElementById('negativo');

//--Filtro blanco y negro
boton_grises.onclick = () => {
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data
    for (var i = 0; i < data.length; i+=4) {
        brillo = (3 * data[i] + 4 * data[i+1] + data[i+2])/8
        data[i] = brillo;
        data[i+1] = brillo;
        data[i+2] = brillo;
    }
    ctx.putImageData(imgData, 0, 0);
}

//--Filtro negativo
negativo.onclick = () => {
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data
    for (var i = 0; i < data.length; i+=4) {
        var r = data[i];
        var g = data[i+1];
        var b = data[i+2];

        data[i] = 255 - r;
        data[i+1] = 255 - g;
        data[i+2] = 255 - b;
    }
    ctx.putImageData(imgData, 0, 0);
}

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};

//-- Funcion de retrollamada del deslizador Rojo
deslizadorR.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value_R.innerHTML = deslizadorR.value;

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    let data = imgData.data

    //-- Filtrar la imagen según el nuevo umbral
    for (let i = 0; i < data.length; i+=4) {
        if (data[i] > deslizadorR.value){
             data[i] = deslizadorR.value;
        }if (data[i+1] > deslizadorG.value){
            data[i+1] = deslizadorG.value;
        }if (data[i+2] > deslizadorB.value)
            data[i+2] = deslizadorB.value;
    }
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);   
}

//-- Funcion de retrollamada del deslizador Verde
deslizadorG.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value_G.innerHTML = deslizadorG.value;

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    //-- Obtener el array con todos los píxeles
    let data = imgData.data

    //-- Filtrar la imagen según el nuevo umbral
    for (let i = 0; i < data.length; i+=4) {
        if (data[i] > deslizadorR.value){
             data[i] = deslizadorR.value;
        }if (data[i+1] > deslizadorG.value){
            data[i+1] = deslizadorG.value;
        }if (data[i+2] > deslizadorB.value)
            data[i+2] = deslizadorB.value;
    }
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
}

//-- Funcion de retrollamada del deslizador Azul
deslizadorB.oninput = () => {
    //-- Mostrar el nuevo valor del deslizador
    range_value_B.innerHTML = deslizadorB.value;

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia
    ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    //-- Obtener el array con todos los píxeles
    let data = imgData.data

    //-- Filtrar la imagen según el nuevo umbral
    for (let i = 0; i < data.length; i+=4) {
        if (data[i] > deslizadorR.value){
             data[i] = deslizadorR.value;
        }if (data[i+1] > deslizadorG.value){
            data[i+1] = deslizadorG.value;
        }if (data[i+2] > deslizadorB.value)
            data[i+2] = deslizadorB.value;
    }
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
}

console.log("Fin...");