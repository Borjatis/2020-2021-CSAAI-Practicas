const canvas = document.getElementById("canvas");

canvas.width = 760;
canvas.height = 1000;

const ctx = canvas.getContext("2d");

//-- Constantes de los ladrillos
const LADRILLO = {
    F: 3,  // Filas
    C: 3,  // Columnas
    w: 30,
    h: 20,
    origen_x: 5,
    origen_y: 170,
    padding: 5,
    visible: true
};

//-- Estructura de los ladrillos
const ladrillos = [];

for (let i = 0; i < LADRILLO.F; i++) {
    ladrillos[i] = [];
    for (let j = 0; j < LADRILLO.C; j++) {
      ladrillos[i][j] = {
          x: ((LADRILLO.w + LADRILLO.padding) * j) + LADRILLO.origen_x,
          y: ((LADRILLO.h + LADRILLO.padding) * i) + LADRILLO.origen_y,
          w: LADRILLO.w,
          h: LADRILLO.h,
          padding: LADRILLO.padding,
          visible: LADRILLO.visible
        };
    }
}

ladrillos[0][1].visible = false;


//-- Dibujar ladrillos
for (let i = 0; i < LADRILLO.F; i++) {
    for (let j = 0; j < LADRILLO.C; j++) {

      //-- Si el ladrillo es visible se pinta
      if (ladrillos[i][j].visible) {
        ctx.beginPath();
        ctx.rect(ladrillos[0][j].x, ladrillos[0][j].y, LADRILLO.w, LADRILLO.h);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.rect(ladrillos[1][j].x, ladrillos[1][j].y, LADRILLO.w, LADRILLO.h);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
        ctx.beginPath();
        ctx.rect(ladrillos[2][j].x, ladrillos[2][j].y, LADRILLO.w, LADRILLO.h);
        ctx.fillStyle = 'green';
        ctx.fill();
        ctx.closePath();
      }
    }
}