function mostrarMensaje(event){
    event.preventDefault();

    var mensaje = parseInt(document.getElementById("textoIngresado").value);

    var textoMostrado = "";

    if(mensaje < 2000){
        textoMostrado = ""; 
    }

    document.querySelector("#mensaje").textContent = textoMostrado;

    document.getElementById("combo").innerHTML = `Combo: Logo + Flyer`;

}

var formulario = document.getElementById("formulario");
formulario.addEventListener("submit" , mostrarMensaje); 