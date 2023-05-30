let btnEncriptar = document.querySelector(".boton_encriptar");
let btnDesencriptar = document.querySelector(".boton_desencriptar");
let areaMuneco = document.querySelector(".area_muneco");
let areaParrafo = document.querySelector(".area_parrafo");
let textoResultado = document.querySelector(".texto_resultado_parrafo");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function encriptar() {
  ocultarAdelante();
  let cajaTexto = recuperarTexto();
  textoResultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar() {
  ocultarAdelante();
  let cajaTexto = recuperarTexto();
  textoResultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto() {
  let cajaTexto = document.querySelector(".caja_de_texto");
  return cajaTexto.value;

}

function ocultarAdelante() {
  /*areaMuneco.classList.add("ocultar");
  areaParrafo.classList.add("ocultar");*/
  
}

function encriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = "";

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == "a") {
      textoFinal = textoFinal + "ai"
    }
    else if (texto[i] == "e") {
      textoFinal = textoFinal + "enter"
    }
    else if (texto[i] == "i") {
      textoFinal = textoFinal + "imes"
    }
    else if (texto[i] == "o") {
      textoFinal = textoFinal + "ober"
    }
    else if (texto[i] == "u") {
      textoFinal = textoFinal + "ufat"
    }
    else {
      textoFinal = textoFinal + texto[i]
    }
  }
  return textoFinal;
}

function desencriptarTexto(mensaje) {
  let texto = mensaje;
  let textoFinal = "";

  for(let i = 0; i < texto.length; i++){
    if(texto[i] == "a"){
      textoFinal = textoFinal + "a"
      i = i+1;
    }
    else if(texto[i] == "e"){
      textoFinal = textoFinal + "e"
      i = i+4;
    }
    else if(texto[i] == "i"){
      textoFinal = textoFinal + "i"
      i = i+3;
    }
    else if(texto[i] == "o"){
      textoFinal = textoFinal + "o"
      i = i+3;
    }
    else if(texto[i] == "u"){
      textoFinal = textoFinal + "u"
      i = i+3;
    }
    else{
      textoFinal = textoFinal + texto[i]
    }
  }
  return textoFinal;
}

const btnCopiar = document.querySelector(".boton_copiar");
btnCopiar.addEventListener("click", copiar = () => {
  let contenido = document.querySelector(".texto_resultado_parrafo").textContent;
  navigator.clipboard.writeText(contenido);
})

