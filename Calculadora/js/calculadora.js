

var txt1 = input.txt1;
var txt2 = input.txt2;
var primerNumero = null;
var segonNumero = null;
var op = false;
var operador;

function escribir (n){

//   if (n == "C") {
//   input.txt1 = "";
//   input.txt2 = "";
// }
// txt1 = text1 + n;
//
// document.getElementById("1").value = "1";


if (primerNumero != null)
  {
  primerNumero=primerNumero+n;

  document.getElementById("textinput1").value = primerNumero;
  }


  if (segonNumero == null && primerNumero != null && op == true){
    op = false;
    segonNumero = n;
    document.getElementById("parrafoNumeroDos").innerHTML = segonNumero;
  }

  if (primerNumero == null){ //&& op == false){
    primerNumero = n;
    document.getElementById("parrafoNumeroUno").innerHTML = primerNumero;
  }


}
