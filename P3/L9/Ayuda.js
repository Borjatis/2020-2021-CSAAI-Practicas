//-- Retrollamada de las teclas
  window.onkeydown = (e) => {
    if (e.key == 'Enter'){
      estado = ESTADO.SAQUE;
      console.log("SAQUE!");
      canvas.focus();
      myAudio.play();
  }
    //-- En el estado inicial no se
    //-- hace caso de las teclas
    if (estado == ESTADO.INIT)
      return;



    switch (e.key) {
      case "a":
      case "A":
        raqI.v = raqI.v_ini;
        break;
      case "q":
      case "Q":
        raqI.v = raqI.v_ini * -1;
        break;
      case "p":
      case "P":
        raqD.v = raqD.v_ini * -1;
        break;
      case "l":
      case "L":
        raqD.v = raqD.v_ini;
        break;
      case "0":
        if(estado == ESTADO.FIN){
          scoreD = 0;
          scoreI = 0;
          estado=ESTADO.SAQUE;
          document.getElementById('gry_wins').style.display = 'none';
          document.getElementById('sly_wins').style.display = 'none';
          document.getElementById('gry').style.display = 'none';
          document.getElementById('sly').style.display = 'none';
        }
        break;
      case " ":

        //-- El saque solo funciona en el estado de SAQUE
        if (estado == ESTADO.SAQUE) {
          //-- Reproducir sonido
          sonido_raqueta.currentTime = 0;
          sonido_raqueta.play();
          bola.init();
          //-- Llevar bola a su posicion incicial

          //-- Darle velocidad
            bola.vx = bola.vx_ini;
            bola.vy = bola.vy_ini;

          //-- Cambiar al estado de jugando!
          estado = ESTADO.JUGANDO;

          return false;
        }
        if (estado == ESTADO.SAQUE_SL){
          //-- Reproducir sonido
          sonido_raqueta.currentTime = 0;
          sonido_raqueta.play();
          bola.dcha();
          //-- Llevar bola a su posicion incicial

          //-- Darle velocidad
            bola.vx = bola.vx_ini;
            bola.vy = bola.vy_ini;

          //-- Cambiar al estado de jugando!
          estado = ESTADO.JUGANDO;
        }

      default:
    }
  }

