const PI = 3.141592


function ingresaDatos(){
    let largo 
    let ancho
    let flagLargo = true;
    let flagAncho = true;
    do{
        if(flagLargo) {
            largo = prompt("Ingrese el largo en metros");
            flagLargo = false;
            
            while(isNaN(largo) || largo < 1){
                largo = prompt("Error ingrese solo numeros. \nIngrese el largo en metros. \n\nesc para salir");
                if(largo == "esc") break;
                
                else parseFloat(largo);
            }
        }

        if(flagAncho) {
            ancho = prompt("Ingrese el ancho en metros");
            flagLargo = false;
            
            while(isNaN(ancho) || ancho < 1){
                ancho = prompt("Error ingrese solo numeros. \nIngrese el ancho en metros. \n\nesc para salir");
                if(ancho == "esc") break;
                
                else parseFloat(ancho);
            }
        }
        
    }while(isNaN(largo) || largo < 1);
    
    let metrosCuadrados = areaCuadrado(largo, ancho);

    alert("El area total calculada es: " + metrosCuadrados);

    document.getElementById("metrosCuadrados").value = metrosCuadrados;

    return metrosCuadrados;
}

function ingresaRadio(){
    let radio = parseFloat(prompt("Ingrese el radio en metros"));
    while(isNaN(radio) || radio < 1){
        radio = parseFloat(prompt("Error ingrese solo numeros. \nIngrese el radio en metros"));
    }

    alert("El area total calculada es: " + areaCirculo(radio));

    document.getElementById("metrosCuadrados").value = metrosCuadrados;

    return metrosCuadrados;
}

function ingresaValorMetro(){
    let dolar = prompt("Ingrese el valor del mt2 en dolares");
    while(dolar != "esc" && ( isNaN(dolar) || dolar < 1) ){
        dolar = parseFloat(prompt("Error ingrese solo numeros. \nIngrese el valor del mt2 en dolares"));
    }

    alert("El valor del Mt2 en dolares es: " + dolar);

    document.getElementById("valorMetro").value = dolar;

    return dolar;
}

function areaCuadrado(num1, num2) {
    let areaTotal;

    return areaTotal = num1*num2;
}

function areaTriangulo(num1, num2) {
    let areaTotal;

    return areaTotal = (num1*num2)/2;
}

function areaCirculo(num1) {
    let areaTotal;

    return areaTotal = PI*(num1*num1);
}



function calcular() {
    let num1 = parseFloat (document.getElementById("metrosCuadrados").value);

    let num2 = parseFloat (document.getElementById("valorMetro").value);
    
    let resultado = num1 * num2

    alert("El valor total es de us$ " + resultado);
    
    document.getElementById("valorTotal").value = resultado;
}

