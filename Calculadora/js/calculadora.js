

var txt1 = input.txt1;
var txt2 = input.txt2;
var primerNumero;
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
if (primerNumero == null){
  primerNumero = n;
  document.getElementById("parrafoNumeroUno").innerHTML = primerNumero;
}else if (primerNumero != null && op == false){
  primerNumero=primerNumero+n;
  document.getElementById("parrafoNumeroUno").innerHTML = primerNumero;
}else if (primerNumero != null && op == true){

}

//controlar longitud maxima 5
   //Concatenaciona


function arit (n){

  op = true;
  operador = n;
  document.getElementById("parrafoOperador").innerHTML = operador;
}

}
