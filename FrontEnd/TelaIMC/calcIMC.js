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
    else if(imc <18.5){
        document.getElementById("resultado").value="Magreza " +imc;
    }
    else if(imc <25){
        document.getElementById("resultado").value="Normal " +imc;
    }
    else if(imc <30){
        document.getElementById("resultado").value="Sobrepeso " +imc;
    }
    else if(imc <40){
        document.getElementById("resultado").value="Obesidade " +imc;
    }
    else if(imc =40){
        document.getElementById("resultado").value="Obesidade grave " +imc;
    }
}
