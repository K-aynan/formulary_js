function validarFormulario() {
  var numeroA = parseInt(document.getElementById("numeroA").value);
  var numeroB = parseInt(document.getElementById("numeroB").value);

  if (numeroB > numeroA) {
    alert("Formulário válido!");
    return true;
  } else {
    alert("Número B deve ser maior que número A!");
    return false;
  }
}