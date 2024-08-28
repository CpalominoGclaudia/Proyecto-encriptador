function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");
    let evaluar = document.getElementById("evaluar");
    let copiar = document.getElementById("btn-copiar");
    
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

    if (texto.length |=0) {
        document.getElementById("texto").value = textoCifrado.toLowerCase();
        tituloMensaje.textContent = "Encriptado"
        parrafo.textContent= "";
        evaluar.textContent = textoCifrado;
        muneco= muneco. remove();
        copiar = copiar.style.display="block";
        gif = gif.style.display="block";

    }else{
        muneco.src = "imagenes/Muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
}
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");
    let evaluar = document.getElementById("evaluar");
    let copiar = document.getElementById("btn-copiar");

    let textoCifrado = texto .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")

    if (texto.length |=0) {
        document.getElementById("texto").value = textoCifrado.toLowerCase();
        tituloMensaje.textContent = "Desencriptado"
        parrafo.textContent="";
        evaluar.textContent = textoCifrado;
        muneco= muneco.remove();
        copiar = copiar.style.display="block";
        gif = gif.style.display="block";
        
    } else{
        muneco.src = "imagenes/Muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    }
} 
function copiado(){
    let evaluar = document.getElementById("evaluar");

    navigator.clipboard.writeText(evaluar.value);
} 
