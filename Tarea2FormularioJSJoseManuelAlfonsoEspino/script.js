

	const boton = document.getElementById("boton")
	const nombre = document.getElementById("nombre");
	const apellidos = document.getElementById("apellidos");
	const dni = document.getElementById("dni");
	const estado = document.getElementById("estado");
	const hobbys = document.getElementsByName("hobby");
	const nacimiento = document.getElementById("nacimiento");
	const condiciones = document.getElementById("condiciones");
	const resultado = document.getElementById("resultado");

	let hobbyElegido = "";
	let eleccionCondiciones = "No";
	let miArray=[];
	

	boton.onclick=mostrar;

	function mostrarDocumentos(resultado){

			miArray.push(resultado.value);
			console.log(miArray);


		resultado.classList.remove("oculta");
	}

function mostrar(){
	for (var i = 0, length = hobbys.length; i < length; i++) {
		if (hobbys[i].checked) {
		   hobbyElegido = hobbys[i];
		   break;
		}
	}

	if(condiciones.checked){
		eleccionCondiciones = "Sí";
	}

	resultado.value = 
	"Nombre: " + nombre.value + 
	", Apellidos: " + apellidos.value + 
	", Dni: " + dni.value + 
	", Estado actual: " + estado.value + 
	", Fecha de nacimiento: " + nacimiento.value +
	" y Hobby: " + hobbyElegido.value +
	". ¿Ha aceptado las condiciones? " + eleccionCondiciones;

	mostrarDocumentos(resultado);
	

	

		
	return false;
} 