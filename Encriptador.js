function encriptar() {
    var texto = document.getElementById("CajaText").value.toLowerCase();
    var txtcifrado = texto.replace(/e/igm, "enter");
    var txtcifrado = txtcifrado.replace(/i/igm, "imes");
    var txtcifrado = txtcifrado.replace(/a/igm, "ai");
    var txtcifrado = txtcifrado.replace(/o/igm, "ober");
    var txtcifrado = txtcifrado.replace(/u/igm, "ufat");

    document.getElementById("muñeco").style.display = "none";
    document.getElementById("subt").style.display = "none";
    document.getElementById("anuncios").style.top = "15px";
    document.getElementById("resultado").innerHTML = txtcifrado;
    document.getElementById("resultado").style.height = "450px";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("copiar").style.top = "500px";
}


function desencriptar() {
    var texto = document.getElementById("CajaText").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm, "e");
    var txtcifrado = txtcifrado.replace(/imes/igm, "i");
    var txtcifrado = txtcifrado.replace(/ai/igm, "a");
    var txtcifrado = txtcifrado.replace(/ober/igm, "o");
    var txtcifrado = txtcifrado.replace(/ufat/igm, "u");

    document.getElementById("muñeco").style.display = "none";
    document.getElementById("subt").style.display = "none";
    document.getElementById("resultado").innerHTML = txtcifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#resultado");
    contenido.select();
    document.execCommand("copy");
}



