function aumentarTamano() {
    var texto = document.getElementById("texto");
    var estilo = window.getComputedStyle(texto, null).getPropertyValue('font-size');
    var fontSize = parseFloat(estilo);
    texto.style.fontSize = (fontSize + 2) + 'px';
  }
  
  function disminuirTamano() {
    var texto = document.getElementById("texto");
    var estilo = window.getComputedStyle(texto, null).getPropertyValue('font-size');
    var fontSize = parseFloat(estilo);
    texto.style.fontSize = (fontSize - 2) + 'px';
  }
  
  function cambiarColor(color) {
    var texto = document.getElementById("texto");
    texto.style.color = color;
  }
  