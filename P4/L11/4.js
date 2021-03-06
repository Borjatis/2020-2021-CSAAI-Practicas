//imagen original
  const img = document.getElementById('imagesrc')

  //imagen a filtar
  const canvas = document.getElementById('display');
  
  const ctx = canvas.getContext("2d");
  

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

  //botones

  var filtro_colores = true;
  var filtro_grises = false;
  var boton_filtro_grises = document.getElementById('blancoynegro');
  var boton_filtro_colores = document.getElementById('colores');

  //filtro blanco y blancoynegro

  boton_filtro_grises.onclick = () => {
    filtro_colores = false;
    filtro_grises = true;
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
    if(filtro_grises){
      for (var i = 0; i < data.length; i+=4) {
        brillo = (3 * data[i] + 4 * data[i+1] + data[i+2])/8
        data[i] = brillo;
        data[i+1] = brillo;
        data[i+2] = brillo;
      }
    }
    ctx.putImageData(imgData, 0, 0);
  }

  //filtro colores

  boton_filtro_colores.onclick = () => {
    filtro_colores = true;
    filtro_grises = false;
  }


  //deslizador rojo
  deslizador_rojo = document.getElementById('deslizador_rojo')
  display_rojo = document.getElementById('display_rojo')
  deslizador_rojo.oninput = () => {
    display_rojo.innerHTML = deslizador_rojo.value
    if(filtro_colores){
    ctx.drawImage(img, 0,0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
      for (var i = 0; i < data.length; i+=4) {
        if (data[i] > deslizador_rojo.value)
          data[i] = deslizador_rojo.value;

        if (data[i+1] > deslizador_verde.value)
          data[i+1] = deslizador_verde.value;

        if (data[i+2] > deslizador_azul.value)
          data[i+2] = deslizador_azul.value;
      }
    }
    ctx.putImageData(imgData, 0, 0);
  }

  //deslizador verde
  deslizador_verde = document.getElementById('deslizador_verde')
  display_verde = document.getElementById('display_verde')
  deslizador_verde.oninput = () => {
    display_verde.innerHTML = deslizador_verde.value
    if(filtro_colores){
    ctx.drawImage(img, 0,0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
      for (var i = 0; i < data.length; i+=4) {
        if (data[i+1] > deslizador_verde.value)
          data[i+1] = deslizador_verde.value;

        if (data[i] > deslizador_rojo.value)
          data[i] = deslizador_rojo.value;

        if (data[i+2] > deslizador_azul.value)
          data[i+2] = deslizador_azul.value;
      }
    }
    ctx.putImageData(imgData, 0, 0);
  }

  //deslizador azul
  deslizador_azul = document.getElementById('deslizador_azul')
  display_azul = document.getElementById('display_azul')
  deslizador_azul.oninput = () => {
    display_azul.innerHTML = deslizador_azul.value
    if(filtro_colores){
    ctx.drawImage(img, 0,0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data
      for (var i = 0; i < data.length; i+=4) {
        if (data[i+1] > deslizador_verde.value)
          data[i+1] = deslizador_verde.value;

        if (data[i] > deslizador_rojo.value)
          data[i] = deslizador_rojo.value;

        if (data[i+2] > deslizador_azul.value)
          data[i+2] = deslizador_azul.value;
      }
    }
    ctx.putImageData(imgData, 0, 0);
}