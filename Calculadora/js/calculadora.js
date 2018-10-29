

var numeroIn = null;
var num1 = "";
var num1Int = 0;
var num2 = "";
var num2Int = 0;
var operador = "";
var resultat = 0;


function escriure (n)
{

// if(n == "=")
// {
//   llegirText(numeroIn);
// }
if (numeroIn != null)
  {
    //numeroIn=numeroIn+n;

    if(n == "="){
        llegirText(numeroIn);
      }else{
        numeroIn=numeroIn+n;
        document.getElementById("textinput1").value = numeroIn;
      }
      if(n == "C")
      {
        numeroIn=null;
        document.getElementById("textinput1").value = numeroIn;
      }

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

function llegirText (numeroIn)
{
  var i=0;
  var a, b;

  for (i=0;i<numeroIn.length;i++)
  {
    if(numeroIn.charAt(i)!="/" && numeroIn.charAt(i)!="*" && numeroIn.charAt(i)!="-" &&
       numeroIn.charAt(i)!="+")
    {
      num1 = num1 + numeroIn.charAt(i);
    }
    else {
      operador = numeroIn.charAt(i);
      b = i;
      i = numeroIn.lenght;
    }
  }
    for (a=b;a<numeroIn.length;a++)
    {
      if(numeroIn.charAt(a)!="/" && numeroIn.charAt(a)!="*" && numeroIn.charAt(a)!="-" &&
         numeroIn.charAt(a)!="+" && numeroIn.charAt(a) !="=")
      {
        num2 = num2 + numeroIn.charAt(a);
      }
      else {
        //operador = numeroIn.charAt(a);
      }

  }

  num1Int = parseInt(num1,10);
  num2Int = parseInt(num2,10);

  operacions();

}

function operacions()
{
  //document.getElementById('textinput1').value = operador;
  switch (operador) {
    case "+":
        resultat = num1Int + num2Int;
      break;
    case "-":
        resultat = num1Int - num2Int;
      break;
    case "/":
        resultat = num1Int / num2Int;
      break;
    case "*":
        resultat = num1Int * num2Int;
      break;
    //default:

  }
  document.getElementById('textinput1').value = resultat;
  netejarVariables();
}

function netejarVariables()
{
  numeroIn = null;
  num1 = "";
  num1Int = 0;
  num2 = "";
  num2Int = 0;
  operador = "";
  
}
