let urlPersonajes = 'https://rickandmortyapi.com/api/character';
let urlUbicaciones = 'https://rickandmortyapi.com/api/location';
let urlEpisodios = 'https://rickandmortyapi.com/api/episode';
const selectPersonaje = document.getElementById('personaje');
const selectUbicacion = document.getElementById('ubicacion');
const selectEpisodio = document.getElementById('episodio');
const cuerpo = document.getElementById('cuerpo');
const divPersonaje= document.getElementById('divPersonaje');
const botonPersonaje = document.getElementById('bPersonaje');
const botonUbicacion = document.getElementById('bUbicacion');
const botonEpisodio = document.getElementById('bCapitulo');

async function obtenerJSON(url){
  const respuesta = await fetch(url);
  const json = await respuesta.json();
  return json;
}
	

//__________________________________________________PERSONAJES_____________________________________

/*añadirEvento();

function añadirEvento(json){
	divPersonaje.addEventListener ("click", () =>{        
	       recargarTodosLosPersonajes(json);     
	});
}*/

function recargarTodosLosPersonajes(){

	cuerpo.innerHTML = "";

obtenerJSON(urlPersonajes).then(json => { 
	console.log(json)
	for(var i=0; i<json.results.length; i++){

		const personajeElement = document.createElement("div");
		personajeElement.classList.add("dentro");

		personajeElement.innerHTML = `
			<div class="foto">
				<img id="imgDentro" src=${json.results[i].image}></img>
			</div>
			<div class="descripcion">
				<h1>${json.results[i].name}</h1>
				<h3>${json.results[i].species}</h3>
			</div>
		`;

		cuerpo.appendChild(personajeElement);

	
}
});
}

botonPersonaje.addEventListener ("click", () =>{        
	       recargarTodosLosPersonajes();     
	});

	
function recargarPersonajes(personajes){
	cuerpo.innerHTML = "";

		const personajeElement = document.createElement("div");
		personajeElement.classList.add("dentro");

		//Forma 1
		personajeElement.innerHTML = `
			<div class="foto">
				<img id="imgDentro" src=${personajes.image}></img>
			</div>
			<div class="descripcion">
				<h1>${personajes.name}</h1>
				<h3>${personajes.species}</h3>
			</div>
		`;

		cuerpo.appendChild(personajeElement);

	
	}

function filtrarPorPersonaje(){

	var personaje = selectPersonaje.value;
	
	obtenerJSON(urlPersonajes+'/'+personaje).then(json => { 
		
		recargarPersonajes(json);
		});
}

obtenerJSON(urlPersonajes).then(json => { 
	
	for(var i=0; i<json.results.length; i++){

		var valor = json.results[i].name;
		var opcion = document.createElement('option');
		opcion.appendChild( document.createTextNode(valor) );
		opcion.value = json.results[i].id;
		selectPersonaje.appendChild(opcion);

	}
	//añadirEvento(json);
	filtrarPorPersonaje();

});

//_______________________________________________UBICACIONES______________________________________



function recargarTodasLasUbicaciones(){

	cuerpo.innerHTML = "";

obtenerJSON(urlUbicaciones).then(json => { 
	console.log(json)
	for(var i=0; i<json.results.length; i++){

		const ubicacionElement = document.createElement("div");
		ubicacionElement.classList.add("dentro");

		ubicacionElement.innerHTML = `
			<div class="descripcion">
				<h2>${json.results[i].name}</h1>
				<br>
				<h3>${json.results[i].type}</h3>
				<br>
				<h3>${json.results[i].dimension}</h3>
				<br>
				<h3>${json.results[i].created}</h3>
			</div>
		`;

		cuerpo.appendChild(ubicacionElement);
	
}
});
}

botonUbicacion.addEventListener ("click", () =>{        
	       recargarTodasLasUbicaciones();     
	});


function recargarUbicaciones(ubicaciones){
	cuerpo.innerHTML = "";

		const ubicacionElement = document.createElement("div");
		ubicacionElement.classList.add("dentro");

		//Forma 1
		ubicacionElement.innerHTML = `
			<div class="descripcion">
				<h2>${ubicaciones.name}</h1>
				<br>
				<h3>${ubicaciones.type}</h3>
				<br>
				<h3>${ubicaciones.dimension}</h3>
				<br>
				<h3>${ubicaciones.created}</h3>
			</div>
		`;

		cuerpo.appendChild(ubicacionElement);

	
	}

function filtrarPorUbicacion(){

	var ubicacion = selectUbicacion.value;
	
	obtenerJSON(urlUbicaciones+'/'+ubicacion).then(json => { 

		recargarUbicaciones(json);
		});
}

obtenerJSON(urlUbicaciones).then(json => { 
	
	for(var i=0; i<json.results.length; i++){

		var valor = json.results[i].name;
		var opcion = document.createElement('option');
		opcion.appendChild( document.createTextNode(valor) );
		opcion.value = json.results[i].id;
		selectUbicacion.appendChild(opcion);

	}
	/*añadirEvento(json);*/
	filtrarPorUbicacion();

});
	
//________________________________EPISODIOS______________________________________________________


function recargarTodosLosEpisodios(){

	cuerpo.innerHTML = "";

obtenerJSON(urlEpisodios).then(json => { 
	console.log(json)
	for(var i=0; i<json.results.length; i++){

		const episodioElement = document.createElement("div");
		episodioElement.classList.add("dentro");

		episodioElement.innerHTML = `
			<div class="descripcion">
				<p>${json.results[i].name}</p>
				<br>
				<h3>${json.results[i].air_date}</h3>
				<br>
				<h3>${json.results[i].episode}</h3>
				<br>
				
			</div>
		`;

		cuerpo.appendChild(episodioElement);
	
}
});
}

botonEpisodio.addEventListener ("click", () =>{        
	       recargarTodosLosEpisodios();     
	});




function recargarEpisodios(episodios){
	cuerpo.innerHTML = "";

		const episodioElement = document.createElement("div");
		episodioElement.classList.add("dentro");

		//Forma 1
		episodioElement.innerHTML = `
			<div class="descripcion">
				<p>${episodios.name}</p>
				<br>
				<h3>${episodios.air_date}</h3>
				<br>
				<h3>${episodios.episode}</h3>
				<br>
				
			</div>
		`;

		cuerpo.appendChild(episodioElement);

	
	}

function filtrarPorEpisodio(){

	var episodio = selectEpisodio.value;
	
	obtenerJSON(urlEpisodios+'/'+episodio).then(json => { 
		
		recargarEpisodios(json);
		});
}

obtenerJSON(urlEpisodios).then(json => { 
	
	for(var i=0; i<json.results.length; i++){

		var valor = json.results[i].name;
		var opcion = document.createElement('option');
		opcion.appendChild( document.createTextNode(valor) );
		opcion.value = json.results[i].id;
		selectEpisodio.appendChild(opcion);

	}
	/*añadirEvento(json);*/
	filtrarPorEpisodio();

});