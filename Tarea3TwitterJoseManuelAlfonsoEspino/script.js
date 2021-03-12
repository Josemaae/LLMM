var contenedorTwit = document.getElementById("contenedorTweet");

function openFile(event){
	var input = event.target;
	var reader = new FileReader();

	reader.readAsText(input.files[0])
	reader.onload= function(){
		var text = reader.result;
		var XMLdocument = removeWhiteSpace(text);

		getDocumentXML(XMLdocument);

	}
}
function getDocumentXML(xmlDocument){
	var parser = new DOMParser();
	var xmlDOM = parser.parseFromString(xmlDocument, "text/xml");
	addTuirer(xmlDOM);
}

function addTuirer(xmlDOC){

	var listaTwit = xmlDOC.getElementsByTagName("twit");
	

		for(var twit=0;twit<listaTwit.length;twit++){
			var divTweet=document.createElement("div"); 
			divTweet.classList.add("tweet");
			contenedorTweet.appendChild(divTweet);

			var h2Nombre=document.createElement("h2");
			h2Nombre.innerText=listaTwit[twit].childNodes[0].firstChild.nodeValue;
			divTweet.appendChild(h2Nombre);

			var h4Arroba=document.createElement("h4");
			h4Arroba.innerText=listaTwit[twit].childNodes[1].firstChild.nodeValue;
			divTweet.appendChild(h4Arroba);

			var pTexto=document.createElement("p");
			pTexto.innerText=listaTwit[twit].childNodes[2].firstChild.nodeValue;
			divTweet.appendChild(pTexto);

			var imagen=document.createElement("img");
			imagen.src=listaTwit[twit].childNodes[3].firstChild.nodeValue;
			divTweet.appendChild(imagen);
		}

	var listaSugerencia = xmlDOC.getElementsByTagName("sugerencia");

		for( var sugerencia=0;sugerencia<listaSugerencia.length;sugerencia++){
			var divSugerencia=document.createElement("div");
			divSugerencia.classList.add("sugerencia");
			contenedorSugerencia.appendChild(divSugerencia);

			var imagenSug=document.createElement("img");
			imagenSug.src=listaSugerencia[sugerencia].childNodes[0].firstChild.nodeValue;
			divSugerencia.appendChild(imagenSug);

			var divNombre=document.createElement("div");
			divSugerencia.appendChild(divNombre);

			var user=document.createElement("h2");
			user.innerText=listaSugerencia[sugerencia].childNodes[1].firstChild.nodeValue;
			divNombre.appendChild(user);

			var userArroba=document.createElement("h4");
			userArroba.innerText=listaSugerencia[sugerencia].childNodes[2].firstChild.nodeValue;
			divNombre.appendChild(userArroba);

			var boton=document.createElement("button");
			boton.innerText=listaSugerencia[sugerencia].childNodes[3].firstChild.nodeValue;
			divSugerencia.appendChild(boton);
		}

}

function removeWhiteSpace(xmlDoc){
	xmlDoc = xmlDoc.replace(/>\s*/g, '>');  // Reemplaza el signo y todos los espacios en blanco a continuación "> " por ">" 
	xmlDoc = xmlDoc.replace(/\s*</g, '<');  // Reemplaza lo mismo pero con el otro signo "< " por "<"
	return xmlDoc;
}