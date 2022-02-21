function print(text) {
    var texto = document.getElementById("texto");
    var base64 = document.getElementById("base64");
    var cesar = document.getElementById("cesar");
    console.log(texto.value);
  
    if (document.getElementById("base64").checked) {
          var base64Codificado = btoa(texto.value);
      console.log(base64Codificado);
      var base64Decodificado = atob(base64Codificado);
      console.log(base64Decodificado);
    }
  }