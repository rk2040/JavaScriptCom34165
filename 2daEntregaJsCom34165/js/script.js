
class Barrio {
    constructor(nombre, zona, comuna, precio)
    {
        this.nombre = nombre;
        this.zona = zona;
        this.comuna = comuna;
        this.precio = precio;
    }
}
// creo los objetos
const barrio1 = new Barrio("Agronomia", "Centro", "Comuna 15", 1597);
const barrio2 = new Barrio("Almagro", "Centro", "Comuna 5", 1685);
const barrio3 = new Barrio("Balvanera", "Sur", "Comuna 4", 1478);
const barrio4 = new Barrio("Barracas", "Centro", "Comuna 15", 1597);
const barrio5 = new Barrio("Belgrano", "Norte", "Comuna 13", 2138);
const barrio6 = new Barrio("Boedo", "Centro", "Comuna 5", 1570);
const barrio7 = new Barrio("Caballito", "Centro", "Comuna 6", 1861);
const barrio8 = new Barrio("Chacarita", "Centro", "Comuna 15", 1658);
const barrio9 = new Barrio("Coghlan", "Norte", "Comuna 13", 1803);
const barrio10 = new Barrio("Colegiales", "Norte", "Comuna 13", 1912);
const barrio11 = new Barrio("Constitucion", "Este", "Comuna 1", 1161);
const barrio12 = new Barrio("Flores", "Centro", "Comuna 7", 1542);
const barrio13 = new Barrio("Floresta", "Oeste", "Comuna 10", 1449);
const barrio14 = new Barrio("La Boca", "Sur", "Comuna 4", 1150);
const barrio15 = new Barrio("La Paternal", "Centro", "Comuna 15", 1456);
const barrio16 = new Barrio("Liniers", "Oeste", "Comuna 9", 1502);
const barrio17 = new Barrio("Mataderos", "Oeste", "Comuna 9", 1416);
const barrio18 = new Barrio("Monserrat", "Este", "Comuna 1", 1448);
const barrio19 = new Barrio("Monte Castro", "Oeste", "Comuna 10", 1574);
const barrio20 = new Barrio("Nueva Pompeya", "Sur", "Comuna 4", 1097);
const barrio21 = new Barrio("Nuñez", "Norte", "Comuna 13", 2020);
const barrio22 = new Barrio("Palermo", "Norte", "Comuna 14", 2079);
const barrio23 = new Barrio("Parque Avellaneda", "Oeste", "Comuna 9", 1262);
const barrio24 = new Barrio("Parque Chacabuco", "Centro", "Comuna 7", 1560);
const barrio25 = new Barrio("Parque Chas", "Centro", "Comuna 15", 1640);
const barrio26 = new Barrio("Parque Patricios", "Sur", "Comuna 4", 1337);
const barrio27 = new Barrio("Puerto Madero", "Este", "Comuna 1", 3993);
const barrio28 = new Barrio("Recoleta", "Norte", "Comuna 2", 1978);
const barrio29 = new Barrio("Retiro", "Este", "Comuna 1", 1682);
const barrio30 = new Barrio("Saavedra", "Norte", "Comuna 12", 1803);
const barrio31 = new Barrio("San Cristobal", "Este", "Comuna 3", 1443);
const barrio32 = new Barrio("San Nicolas", "Este", "Comuna 1", 1431);
const barrio33 = new Barrio("San Telmo", "Este", "Comuna 1", 1537);
const barrio34 = new Barrio("Versalles", "Oeste", "Comuna 10", 1472);
const barrio35 = new Barrio("Villa Crespo", "Centro", "Comuna 15", 1709);
const barrio36 = new Barrio("Villa Del Parque", "Oeste", "Comuna 11", 1685);
const barrio37 = new Barrio("Villa Devoto", "Oeste", "Comuna 11", 1756);
const barrio38 = new Barrio("Villa General Mitre", "Oeste", "Comuna 11", 1501);
const barrio39 = new Barrio("Villa Lugano", "Sur", "Comuna 8", 1097);
const barrio40 = new Barrio("Villa Luro", "Oeste", "Comuna 10", 1501);
const barrio41 = new Barrio("Villa Ortuzar", "Centro", "Comuna 15", 1617);
const barrio42 = new Barrio("Villa Pueyrredon", "Norte", "Comuna 12", 1677);
const barrio43 = new Barrio("Villa Real", "Oeste", "Comuna 10", 1575);
const barrio44 = new Barrio("Villa Santa Rita", "Oeste", "Comuna 11", 1485);
const barrio45 = new Barrio("Villa Soldati", "Sur", "Comuna 8", 899);
const barrio46 = new Barrio("Villa Urquiza", "Norte", "Comuna 12", 1939);

//array con los objetos
const listaBarrios = [
    barrio1,barrio2,barrio3,barrio4,barrio5,barrio6,barrio7,barrio8,barrio9,barrio10,
    barrio11,barrio12,barrio13,barrio14,barrio15,barrio16,barrio17,barrio18,barrio19,
    barrio20,barrio21,barrio22,barrio23,barrio24,barrio25,barrio26,barrio27,barrio28,
    barrio29,barrio30,barrio31,barrio32,barrio33,barrio34,barrio35,barrio36,barrio37,
    barrio38,barrio39,barrio40,barrio41,barrio42,barrio43,barrio44,barrio45,barrio46
];
// ------------------------------------------------------------------------
/*  Para siguiente entrega. Funcion para mostrar datos en tabla html "Mejorar"
function mostrarLista(lista){
    let total = listaBarrios.length;
    for(let i=0; i<total; i++)
    {
        document.getElementById("cuerpoTabla").innerHTML += '<td>' + lista[i].nombre + '</td><td>' + lista[i].zona + '</td><td>' + lista[i].comuna + '</td><td>' + lista[i].precio + '</td>';
    }
}
*/
// ------------------------------------------------------------------------
function mostrarComuna(lista, datoComparativo){
    alert("Por el momento solo se mostraran los Barrios seleccionados por consola.");
    listaFiltrada = lista.filter((el) => el.comuna == datoComparativo);
    console.log(listaFiltrada.length);
    console.log(listaFiltrada);
}
// ------------------------------------------------------------------------
function mostrarZona(lista, datoComparativo){
    alert("Por el momento solo se mostraran los Barrios seleccionados por consola.");
    listaFiltrada = lista.filter((el) => el.zona.includes(datoComparativo));
    console.log(listaFiltrada.length);
    console.log(listaFiltrada);
}
// ------------------------------------------------------------------------
function click_button(button_id){
        let listaAux;

        switch  (button_id)
        {
            case "todo az":
                alert("Por el momento solo se mostraran los Barrios seleccionados por consola.");
                listaAux = listaBarrios;
                listaAux.sort( (a,b)=>{
                    if(a.nombre < b.nombre) return  -1;
                    if(a.nombre > b.nombre) return  1;
                    return 0;
                } );
                console.log(listaAux.length);
                console.log(listaAux);
                break;
            case "todo za":
                alert("Por el momento solo se mostraran los Barrios seleccionados por consola.");
                listaAux = listaBarrios;
                listaAux.sort((a,b)=> b.nombre.localeCompare(a.nombre));
                console.log(listaAux.length);
                console.log(listaAux);
                break;
            case "mayor precio":
                alert("Por el momento solo se mostraran los Barrios seleccionados por consola.");
                listaAux = listaBarrios;
                listaAux.sort((a,b) => b.precio - a.precio);
                console.log(listaAux.length);
                console.log(listaAux);
                break;
            case "menor precio":
                alert("Por el momento solo se mostraran los Barrios seleccionados por consola.");
                listaAux = listaBarrios;
                listaAux.sort((a,b) => a.precio - b.precio);
                console.log(listaAux.length);
                console.log(listaAux);
                break;
            case "comuna 1":
                mostrarComuna(listaBarrios, "Comuna 1");
                break;
            case "comuna 2":
                mostrarComuna(listaBarrios, "Comuna 2");
                break;
            case "comuna 3":
                mostrarComuna(listaBarrios, "Comuna 3");
                break;
            case "comuna 4":
                mostrarComuna(listaBarrios, "Comuna 4");
                break;
            case "comuna 5":
                mostrarComuna(listaBarrios, "Comuna 5");
                break;
            case "comuna 6":
                mostrarComuna(listaBarrios, "Comuna 6");
                break;
            case "comuna 7":
                mostrarComuna(listaBarrios, "Comuna 7");
                break;
            case "comuna 8":
                mostrarComuna(listaBarrios, "Comuna 8");
                break;
            case "comuna 9":
                mostrarComuna(listaBarrios, "Comuna 9");
                break;
            case "comuna 10":
                mostrarComuna(listaBarrios, "Comuna 10");
                break;
            case "comuna 11":
                mostrarComuna(listaBarrios, "Comuna 11");
                break;
            case "comuna 12":
                mostrarComuna(listaBarrios, "Comuna 12");
                break;
            case "comuna 13":
                mostrarComuna(listaBarrios, "Comuna 13");
                break;
            case "comuna 14":
                mostrarComuna(listaBarrios, "Comuna 14");
                break;
            case "comuna 15":
                mostrarComuna(listaBarrios, "Comuna 15");
                break;
            case "este":
                mostrarZona(listaBarrios, "Este");
                break;
            case "oeste":
                mostrarZona(listaBarrios, "Oeste");
                break;
            case "norte":
                mostrarZona(listaBarrios, "Norte");
                break;  
            case "sur":
                mostrarZona(listaBarrios, "Sur");
                break;
            //---- Calculos ----
            case "mts2":
                let medida1 = parseFloat (document.getElementById("largo").value);
                let medida2 = parseFloat (document.getElementById("ancho").value);
                calcularSuperficie(medida1, medida2);
                calcularSuperficieCirculo(medida1, medida2);
                break;
            case "valorTotal":
                let metroCirculo = parseFloat (document.getElementById("metrosCirculo").value);
                let metroRectangulo = parseFloat (document.getElementById("metrosRectangulo").value);
                let precio = parseFloat (document.getElementById("valorMetro").value);
                calcularValorTotal(metroRectangulo, precio, "valorRectangulo");
                calcularValorTotal(metroCirculo, precio, "valorCirculo");
                break;
            }
    }
// ------------------------------------------------------------------------
function precioBarrio(){
    listaAux = listaBarrios;

    listaAux.sort( (a,b)=>{
        if(a.nombre < b.nombre) return  -1;
        if(a.nombre > b.nombre) return  1;
        return 0;
    } );
    let seleccion = document.getElementById("barrio");
    valorMetro = listaAux[seleccion.selectedIndex].precio;

    document.getElementById("valorMetro").value = valorMetro;
}
// ------------------------------------------------------------------------
function borrar(){
    document.getElementById("largo").value = "";
    document.getElementById("ancho").value = "";
    document.getElementById("radio").value = "";
    document.getElementById("metrosRectangulo").value = "";
    document.getElementById("metrosCirculo").value = "";
    document.getElementById("valorMetro").value = "";
    document.getElementById("valorRectangulo").value = "";
    document.getElementById("valorCirculo").value = "";
}
// ------------------------------------------------------------------------
function calcularSuperficie(medida1, medida2) {
    let areaRectangulo = medida1*medida2;
    
    if( areaRectangulo < 1 || areaRectangulo == null || isNaN(areaRectangulo)) alert("No se pudo calcular porque falta alguno de los valores.");

    else document.getElementById("metrosRectangulo").value = areaRectangulo;
}
// ------------------------------------------------------------------------
function calcularSuperficieCirculo(medida1, medida2) {
    let radio;
    let areaCirculo;

    if(medida1 != medida2){
        radio = ( (medida1 /2) * (medida2 /2) ); // Radio de un area ovalada
        areaCirculo = Math.PI * radio;
    }
    else{
        radio = medida1 /2; // Radio de un area circular
        areaCirculo = Math.PI * (radio * radio);
    }
    document.getElementById("radio").value = radio;

    if( areaCirculo < 1 || areaCirculo == null || isNaN(areaCirculo) ) alert("No se pudo calcular porque falta alguno de los valores.");

    else document.getElementById("metrosCirculo").value = areaCirculo;
}
// ------------------------------------------------------------------------
function calcularValorTotal(num1, num2, idInput) {
    let resultado = num1*num2;
        
    if( resultado < 1 || resultado == null || isNaN(resultado)) alert("No se pudo calcular porque falta alguno de los valores.");

    else {
        resultado = num1 * num2;
        document.getElementById(idInput).value = resultado;
    }
}