console.log("Ejecutando JS...");

//-- Obtener el párrafo
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const test = document.getElementById('test');

//-- Funcion de retrollamada de la pulsación del párrafo
b1.onclick = () => {
    console.log("Click!");

    //-- Añadir 1 al final del párrafo
    //-- cada vez que se pulse el botón
    test.innerHTML+=" 1"
    //if (test.style.backgroundColor == "") {
    //    test.style.backgroundColor = "yellow";
    //}
    //-- Si ya tiene color se lo quitamos
    //else {
    //    test.style.backgroundColor = "";
    //}

}
b2.onclick = () => {
    test.innerHTML+=" 2"
}
test.onclick = () => {
    test.innerHTML="Texto aparecido"
}
