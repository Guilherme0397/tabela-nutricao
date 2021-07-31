var titulo = document.querySelector(".titulo");
titulo.textContent = "Ana C. Andrelino Nutrição";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length ; i++) {

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdimc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido){
    console.log("Peso inválido");
    pesoEhValido = false;
    tdimc.textContent = ("Peso inválido");
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida){
    console.log("Altura invalida");
    alturaEhValida = false;
    tdimc.textContent = ("Altura inválida");
    paciente.classList.add("paciente-invalido");//puxando a class dentro do CSS
    //paciente.style.color = "blue"; #altera letra
    //paciente.style.backgroundColor = "gree"; #altera fundo
  }

  if (pesoEhValido && alturaEhValida){
    var imc = calculaImc(peso,altura);
    tdimc.textContent = imc

  }

function validaPeso(peso){
  if (peso >= 0 && peso <= 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura){
  if (altura >= 0 && altura <= 3.00) {
    return true;
  } else {
    return false;
  }
}

  function calculaImc(peso,altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
  }
}
