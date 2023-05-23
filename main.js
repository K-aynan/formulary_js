const form = document.querySelector("form");

form.addEventListener("submit",validarFormulario);

function validarFormulario(e) {
  e.preventDefault();

  var numeroA = parseInt(document.getElementById("numeroA").value);
  var numeroB = parseInt(document.getElementById("numeroB").value);

  if (numeroB > numeroA) {
    document.querySelector(".resultadoB").innerHTML = '<p>Seu formulário é válido! Campo B é maior que Campo A.</p>';
  } else {
    document.querySelector(".resultadoA").innerHTML = '<p>Infelizmente Campo A é maior que Campo B e seu formulário não é válido.</p>';
  }

  document.getElementById("numeroA").value = "";
  document.getElementById("numeroB").value = "";
}