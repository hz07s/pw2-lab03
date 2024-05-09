function calcular() {
  var operand1 = parseFloat(document.getElementById("operand1").value);
  var operand2 = parseFloat(document.getElementById("operand2").value);
  var operator = document.getElementById("operator").value;
  var resultado;

  switch (operator) {
    case 'sum':
      resultado = operand1 + operand2;
      break;
    case 'subtract':
      resultado = operand1 - operand2;
      break;
    case 'multiply':
      resultado = operand1 * operand2;
      break;
    case 'divide':
      resultado = operand1 / operand2;
      break;
    case 'and':
      resultado = operand1 && operand2;
      break;
    case 'or':
      resultado = operand1 || operand2;
      break;
    case 'xor':
      resultado = operand1 !== operand2;
      break;
    case 'bitAnd':
      resultado = operand1 & operand2;
      break;
    case 'bitOr':
      resultado = operand1 | operand2;
      break;
    case 'bitXor':
      resultado = operand1 ^ operand2;
      break;
    default:
      resultado = "Operador no válido";
  }

  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
