const datospersonales = [];
const datosnutricionales = [];
const datostotales = [];
const mostrar = []

let formulario = document.getElementById("formulario");
let contenedor = document.getElementById("contenedor");

formulario.addEventListener("submit", (e) => {
    const datostotales = [];
    e.preventDefault ()
    contenedor.innerHTML = ""
    let casilleros = e.target.children;
    datostotales.push(casilleros[0].value)
    datostotales.push(casilleros[1].value)
    datostotales.push(casilleros[2].value)
    datostotales.push(casilleros[3].value)
    datostotales.push(casilleros[4].value)
    datostotales.push(casilleros[5].value)
    datostotales.push(casilleros[6].value)
    datostotales.push(casilleros[7].value)
    datostotales.push(casilleros[8].value)
    datostotales.push(casilleros[9].value)
    datostotales.push(casilleros[10].value)
    datostotales.push(casilleros[11].value)

    
    console.log(datostotales)

    let nombre = datostotales[0]
    let email = datostotales[1]
    let domicilio = datostotales[2]
    let DNI = datostotales[3]
    let obrasocial = datostotales[4]
    let estadocivil = datostotales[5]
    let peso = datostotales[6]
    let altura = datostotales[7]
    let muñeca = datostotales[8]
    let edad = datostotales[9]
    let sexo = datostotales[10]
    let actividadFisica = datostotales[11]

    

    datospersonales.push({nombre:nombre, domicilio:domicilio, DNI:DNI, obrasocial:obrasocial, estadocivil:estadocivil});
    console.log(datospersonales)
    console.log(sexo)
    console.log(edad)


    if (sexo.toUpperCase() == "FEMENINO"){
        if (edad > 0 && edad < 3){ var primercalculo = (58.317*peso)-31.11;}
        else if (edad >= 3 && edad < 10){ var primercalculo = (20.315*peso)+485.9;}
        else if (edad >= 10 && edad < 18){ var primercalculo = (13.384*peso)+692.6;}
        else if (edad >= 18 && edad < 30){ var primercalculo = (14.818*peso)+486.6;}
        else if (edad >= 30 && edad < 60){ var primercalculo = (8.126*peso)+845.6;}
        else if (edad >=60){ var primercalculo = (9.082*peso)+658.5;}
        if ((altura/muñeca) > 11) { alert(`tu contextura es pequeña`)}
        if ((altura/muñeca) >= 10.1 && (altura/muñeca) <= 11) { alert(`tu contextura es mediana`)}
        if ((altura/muñeca) < 10.1) { alert(`tu contextura es grande`)}
    }else if (sexo.toUpperCase() == "MASCULINO"){
        if (edad > 0 && edad < 3){ var primercalculo = (59.512*peso)-30.4;}
        else if (edad >= 3 && edad < 10){ var primercalculo = (22.706*peso)+504.3;}
        else if (edad >= 10 && edad < 18){ var primercalculo = (17.686*peso)+658.2;1}
        else if (edad >= 18 && edad < 30){ var primercalculo = (15.057*peso)+692.2;}  
        else if (edad >= 30 && edad < 60){ var primercalculo = (11.472*peso)+873.1;}
        else if (edad >=60){ var primercalculo = (11.711*peso)+587.7;}
        if ((altura/muñeca) > 10.4) { alert(`Tu contextura es pequeña`)}
        if ((altura/muñeca) >= 9.6 && (altura/muñeca) <= 10.4) { alert(`Tu contextura es mediana`)}
        if ((altura/muñeca) < 9.6) { alert(`Tu contextura es grande`)}
    alert(`Tu MB - Metabolismo Basal es de ${primercalculo}`)
    }

    
    if (actividadFisica.toUpperCase() == "NULA" || actividadFisica.toUpperCase() == "LEVE") {
        var calculofinal = primercalculo*1.30}
    else if (actividadFisica.toUpperCase() == "MODERADA") {    
        var calculofinal = primercalculo*1.50}
    else if (actividadFisica.toUpperCase() == "INTENSA") {    
        var calculofinal = primercalculo*1.75}      
    alert(`tu VCT - Valor Calorico Total es de ${calculofinal} Kcal.`)

const mostrar = []
mostrar.push({Nombre:nombre, DNI:DNI, MB:primercalculo, VCT:calculofinal});
console.log(mostrar)

/////// COMO TODAS MIS VARIABLES SON INGRESADAS POR EL USUARIO, NO TENIA UNA TABLA PARA TENER PRECARGADA EN EL LOCAL, ASI QUE LO QUE HICE FUE SUBIR EL OBJETO CREADO CON LA DATA INGRESADA POR EL USUARIO AL LOCAL, Y TRAERLA DESDE AHI PARA MOSTRARLA EN PANTALLA.

// ACA AGARRO LOS RESULTADOS DEL USUARIO Y LOS SUBO AL LOCAL EN FORMATO JSON
let localdata = JSON.stringify({Nombre:nombre, DNI:DNI, MB:primercalculo, VCT:calculofinal});
localStorage.setItem("datos", localdata);

// ACA CREO UNA VARIABLE PARA PODER TRAER EL OBJETO DESDE EL LOCAL 
let dataparseada = JSON.parse(localStorage.getItem("datos"))
console.log(dataparseada)

// A LA DATA QUE TRAJE DESDE EL LOCAL LA METO ADENTRO DE UN ARRAY

const mostrarlocal = []
mostrarlocal.push(dataparseada)
console.log(mostrarlocal)

// FINALMENTE, HAGO UN FOR  PARA QUE ME MUESTRE LA DATA CONTENIDA EN EL OBJETO CARGADO EN EL ARRAY. 

for (dato of mostrarlocal) {  
    let div = document.createElement("div")  
    div.innerHTML = 
    `<h2> Nombre:${dato.Nombre}</h2> <br>
    <h2> DNI:${dato.DNI}</h2><br>
    <h2> MB:${dato.MB}</h2> <br>
    <h2> VST:${dato.VCT}</h2>`    
    contenedor.append(div) ; 
    }
}













)
