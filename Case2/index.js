const botonPorDos = document.querySelector("button");
const valorCasilla = document.querySelector("input");

function multiplicar(event) {
  const resultado = valorCasilla.value * 2;
  valorCasilla.value = resultado;
}

botonPorDos.addEventListener("click", multiplicar);
