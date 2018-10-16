


var numeroIn = null;
var operador;

function escriure (n)
{

// if(n == "=")
// {
//   llegirText(numeroIn);
// }
if (numeroIn != null)
  {
    numeroIn=numeroIn+n;
    if(n == "C")numeroIn=null;
    document.getElementById("textinput1").value = numeroIn;
  }else {
    if(n == "C")
    {
      numeroIn=null;
    }else{
      numeroIn = n;
      document.getElementById("textinput1").value = numeroIn;
    }
  }
}

function llegirText ()
{
  numeroIn = "hola";
  document.getElementById("textinput1").value = numeroIn;



}
