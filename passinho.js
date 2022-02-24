
let texto = document.getElementById("texto")
let base = document.getElementById("base64")
let cesar = document.getElementById("cesar")
let quant = document.getElementById("quantidade")
let botao = document.getElementById("botao")
let codificar = document.getElementById("codificar")
let decodificar = document.getElementById("decodificar")



cesar.addEventListener("click", function(){
  quant.style.display= "block"
  
})

base.addEventListener("click", function(){
  quant.style.display= "none"

})

botao.addEventListener("click", function(elemento){
 elemento.preventDefault()
if(base.checked){
  base64()
} else if(cesar.checked){


}

})

function base64 (){
  let txt = texto.value
  if(decodificar.checked){
    let de=atob(txt)
    alert(de)

  }else if(codificar.checked){
    let co = btoa(txt)
    alert (co)

  }

}