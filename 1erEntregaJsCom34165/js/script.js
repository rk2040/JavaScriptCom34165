const PI = 3.141592;

function ingresaValor(mensaje1, mensaje2){
    
    let valor = prompt("Ingrese el "+ mensaje1 +" a calcular.");
    do{   
        if(valor == "esc") break;
        else if(isNaN(valor) || valor < 1){
            valor = prompt("Error ingrese solo numeros y un valor mayor a 0. \nIngrese el " + mensaje2 + " nuevamente. \n\nesc para salir");
        } 
        
    }while(isNaN(valor) || valor < 1);
    parseFloat(valor);
    return valor;
}

// ------------------------------------------------------------------------
function ingresaLargo(){
    let valor = ingresaValor("LARGO en metros" ,"LARGO en metros");

    if(valor != NaN && valor != "esc") document.getElementById("largo").value = valor;
}

// ------------------------------------------------------------------------
function ingresaAncho(){
    let valor = ingresaValor("ANCHO en metros" ,"ANCHO en metros");

    if(valor != NaN && valor != "esc") document.getElementById("ancho").value = valor;
}

// ------------------------------------------------------------------------
function ingresaValorMetro(){

    let valor = ingresaValor("valor del METRO en dolares", "VALOR del metro en dolares");

        if(valor != NaN && valor != "esc") document.getElementById("valorMetro").value = valor;
}

// ------------------------------------------------------------------------
function ingresaRadio(){
    let valor = ingresaValor("RADIO en metros" ,"RADIO en metros");

    if(valor != NaN && valor != "esc") document.getElementById("radio").value = valor;
}

// ------------------------------------------------------------------------

function calcularSuperficie() {
    let medida1 = parseFloat (document.getElementById("largo").value);

    let medida2 = parseFloat (document.getElementById("ancho").value);

    let areaRectangulo = medida1*medida2;

    
    if( areaRectangulo < 1 || areaRectangulo == null || isNaN(areaRectangulo)) alert("No se pudo calcular porque falta alguno de los valores.");

    else {
        alert("Los metros cuadrados totales son: " + areaRectangulo);
        document.getElementById("metrosRectangulo").value = areaRectangulo;
        
    }
}

// ------------------------------------------------------------------------
function calcularSuperficieCirculo() {
    let medida1 = parseFloat (document.getElementById("radio").value);

    let areaCirculo = PI* (medida1*medida1);

    if( areaCirculo < 1 || areaCirculo == null || isNaN(areaCirculo)) alert("No se pudo calcular porque falta alguno de los valores.");

    else {
        alert("Los metros cuadrados totales son: " + areaCirculo);
        document.getElementById("metrosCirculo").value = areaCirculo;
    }
}

// ------------------------------------------------------------------------
function calcularValorTotal() {
    let num1 = parseFloat (document.getElementById("metrosRectangulo").value);

    let num2 = parseFloat (document.getElementById("valorMetro").value);

    let resultadoRectangulo = num1*num2;
        
    if( resultadoRectangulo < 1 || resultadoRectangulo == null || isNaN(resultadoRectangulo)) alert("No se pudo calcular porque falta alguno de los valores.");

    else {
        resultadoRectangulo = num1 * num2;
        alert("El valor total es de us$ " + resultadoRectangulo);
        document.getElementById("valorTotal").value = resultadoRectangulo;
    }
}

// ------------------------------------------------------------------------
function calcularValorTotalcirculo() {
    let num1 = parseFloat (document.getElementById("metrosCirculo").value);
    
    let num2 = parseFloat (document.getElementById("valorMetro").value);

    let resultadoCirculo = num1*num2;
        
    if( resultadoCirculo < 1 || resultadoCirculo == null || isNaN(resultadoCirculo)) alert("No se pudo calcular porque falta alguno de los valores.");

    else {
        alert("El valor total es de us$ " + resultadoCirculo);
        document.getElementById("valorTotalCirculo").value = resultadoCirculo;
    }
}