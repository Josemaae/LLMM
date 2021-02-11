
function cambiarIcono(icono){
	icono.innerHTML='✈';
}

function eliminarIcono(icono){
	icono.remove();
}

function insertarIcono(){

//creamos un nuevo elemento en el documento
const botonParar=document.getElementById("boton");
const icono=document.createElement("div");

//le añado al elemento la clase icono
icono.classList.add("icono");
//añadir el contenido del elemento al icono
icono.innerHTML="🍺";

//le asigno una posicion aleatoria
icono.style.left=Math.random()*100+"vw";
icono.style.animationDuration=Math.random()*2+3+"s";
//insertar el elemento creado dentro de la etiqueta body
document.body.appendChild(icono);
//se va a llamar una sola vez a la funcion eliminarIcono
//a los 4 segundos de crearse 
//y le va a pasar como parametro icono
setTimeout(eliminarIcono,3000,icono);
setInterval(cambiarIcono,600,icono);

}

//llamo a la funcion cada segundo
boton.onclick=empezar;
function empezar(){
	setInterval(insertarIcono,500);
	boton.classList.add("oculta");
}
