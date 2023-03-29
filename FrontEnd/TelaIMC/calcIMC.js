let btnCalc = document.getElementById(btn_calc);
function calculaIMC(){
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let imc = (peso/(altura*altura));

    if((altura =="") || (peso=="")){
        window.alert("Insira caracteres válidos");
        document.getElementById("altura").value="";
        document.getElementById("peso").value="";
    }
    else{
        const total = imc.toFixed(1);
        document.getElementById("resultado").value= total +"   "+"Agora confira a tabela abaixo";
    }
  
}
