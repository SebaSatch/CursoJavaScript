// mandamos un poco de data al local storage

localStorage.setItem('rutina1', 'Vas a tener que empezar a entrenar loco')
localStorage.setItem('rutina2', 'No aflojes, segui con los fierros')
localStorage.setItem('rutina3', 'Venis bien, solo te resta aprender a hacer el KaioKen')

// creamos unos guapos arrays vacios

const datospersonales = [];
const datosnutricionales = [];
const datostotales = [];
const mostrar = []

// traemos el los ID del html al JS y les asignamos variables

let formulario = document.getElementById("formulario");
let contenedor = document.getElementById("contenedor");
let contenedor2 = document.getElementById("contenedor2");
let contenedor3 = document.getElementById("contenedor3");
let dieta = document.getElementById("dieta");
let arms = document.getElementById("arms");
let legs = document.getElementById("legs");
let shoulders = document.getElementById("shoulders");
let back = document.getElementById("back");
let chest = document.getElementById("chest");


//creamos un array lleno de informacion que se va a ir en formato JSON al local storage
const workout = [
    {day:"LUNES", grupomuscular:"brazos", ejercicio:"curl alterno", repeticiones:"8", rutina: "A"},
    {day:"LUNES", grupomuscular:"piernas", ejercicio:"extensiones en camilla", repeticiones:"10", rutina: "B" },
    {day:"MARTES", grupomuscular:"espalda", ejercicio:"dorsalera", repeticiones:"12", rutina: "A"},
    {day:"MARTES", grupomuscular:"pecho", ejercicio:"press plano", repeticiones:"6", rutina: "B"},
    {day:"MIERCOLES", grupomuscular:"hombros", ejercicio:"elevaciones laterales", repeticiones:"6", rutina: "A"},
    {day:"MIERCOLES", grupomuscular:"brazos", ejercicio:"extensiones triceps", repeticiones:"14", rutina: "B"},
    {day:"JUEVES", grupomuscular:"piernas", ejercicio:"peso muerto", repeticiones:"12", rutina: "A"},
    {day:"JUEVES", grupomuscular:"espalda", ejercicio:"remo", repeticiones:"15", rutina: "B"},
    {day:"VIERNES", grupomuscular:"pecho", ejercicio:"press declinado", repeticiones:"10", rutina: "A"},
    {day:"VIERNES", grupomuscular:"hombros", ejercicio:"press arnold", repeticiones:"10", rutina: "B"},
    {day:"SABADO", grupomuscular:"brazos", ejercicio:"curl martillo", repeticiones:"6", rutina: "A"},
    {day:"SABADO", grupomuscular:"piernas", ejercicio:"sentadillas", repeticiones:"6", rutina: "B"},
    {day:"LUNES", grupomuscular:"espalda", ejercicio:"remo en barra", repeticiones:"8", rutina: "C"},
    {day:"LUNES", grupomuscular:"pecho", ejercicio:"press inclinado", repeticiones:"8", rutina: "D"},
    {day:"MARTES", grupomuscular:"hombros", ejercicio:"elevaciones frontales", repeticiones:"14", rutina: "C"},
    {day:"MARTES", grupomuscular:"brazos", ejercicio:"curl en barra", repeticiones:"14", rutina: "D"},
    {day:"MIERCOLES", grupomuscular:"piernas", ejercicio:"estocadas bulgaras", repeticiones:"12", rutina: "C"},
    {day:"JUEVES", grupomuscular:"espalda", ejercicio:"dominadas", repeticiones:"10", rutina: "D"},
    {day:"VIERNES", grupomuscular:"pecho", ejercicio:"aperturas con mancuerna", repeticiones:"20", rutina: "C"}]

    let workoutLocal = JSON.stringify(workout)
    localStorage.setItem("ejercicios", workoutLocal)

    // traemos data del local storage y la almacenamos en un nuevo array

    let arrayLocal = JSON.parse(localStorage.getItem("ejercicios"))

    // filtramos la informacion que nos interesa del array
const rutinaA = arrayLocal.filter((grupo)=> grupo.rutina.includes("A"))
const rutinaB = arrayLocal.filter((grupo)=> grupo.rutina.includes("B"))
const rutinaC = arrayLocal.filter((grupo)=> grupo.rutina.includes("C"))
const rutinaD = arrayLocal.filter((grupo)=> grupo.rutina.includes("D"))

//creamos una funcion que va a ejecutarse sobre un array filtrado, mostrandonos la data que necesitamos con un for, el cual lo usamos para recorrer el array

function mostrarRutina (filtro) {
        for (i of filtro){
            let div = document.createElement("div")
            div.innerHTML = 
                    `Dia: ${i.day}, 
                    Grupo Muscular: ${i.grupomuscular}, 
                    Ejercicio: ${i.ejercicio}
                    Repeticiones: ${i.repeticiones} <br> <br> ` 
            contenedor3.append(div);  
        }
}

// al evento submit del formulario le ponemos un escuchador (?), y cuando se ejecute ese evento... se van a cargar en el array DATOS TOTALES toda la data q se cargo en los input hijos del formulario. 

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

    // asignamos una variable a cada una de las posiciones del array

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
    let primercalculo

    // creamos un nuevo ARRAY que solo va a contener los datos PERSONALES cargados... asi que lo que hacemos es pushearle las variables que creamos antes 
    
    datospersonales.push({nombre:nombre, domicilio:domicilio, DNI:DNI, obrasocial:obrasocial, estadocivil:estadocivil});
        console.log(datospersonales)
        console.log(sexo)
        console.log(edad)
    
    // a continuacion algunos cuantos condicionales que se utilizan para poder realizar los calculos de los valores caloricos y de metabolismo basal de la persona, utilizando las variables cargadas por el usuario en el formulario, y aplicando las formulas deseadas dependiendo del caso en particular.
    // los dos condicionales mas grandes son masculino y femenino, de ellos derivan otros condicionales y en base a la contextura de la persona, se trae desde el data.json una recomendacion de dieta generica
    
    if (sexo.toUpperCase() == "FEMENINO"){
        contenedor2.innerHTML = ""  
        if (edad > 0 && edad < 3){  primercalculo = (58.317*peso)-31.11;}
        else if (edad >= 3 && edad < 10){  primercalculo = (20.315*peso)+485.9;}
        else if (edad >= 10 && edad < 18){  primercalculo = (13.384*peso)+692.6;}
        else if (edad >= 18 && edad < 30){  primercalculo = (14.818*peso)+486.6;}
        else if (edad >= 30 && edad < 60){  primercalculo = (8.126*peso)+845.6;}
        else if (edad >=60){  primercalculo = (9.082*peso)+658.5;}
        if ((altura/muñeca) > 11) { alert(`tu contextura es pequeña`)
            const div = document.getElementById("contenedor2");
                fetch("./data.json")
                .then(Response => Response.json())
                .then(data => {
                    data.forEach(plan => {
                        const div = document.createElement("div");
                        div.innerHTML = `${plan.A} `;
                        contenedor2.append(div);
                    })
                })
        }
        if ((altura/muñeca) >= 10.1 && (altura/muñeca) <= 11) { alert(`tu contextura es mediana`)
            const div = document.getElementById("contenedor2");
            fetch("./data.json")
            .then(Response => Response.json())
            .then(data => {
                data.forEach(plan => {
                    const div = document.createElement("div");
                    div.innerHTML = `${plan.B}`;
                    contenedor2.append(div);
                })
            })
        }
        if ((altura/muñeca) < 10.1) { alert(`tu contextura es grande`)
            const div = document.getElementById("contenedor2");
            fetch("./data.json")
            .then(Response => Response.json())
            .then(data => {
                data.forEach(plan => {
                    const div = document.createElement("div");
                    div.innerHTML = `${plan.C}`;
                    contenedor2.append(div);
                })
            })
        }
    }
    else if (sexo.toUpperCase() == "MASCULINO"){
        contenedor2.innerHTML = ""  
        if (edad > 0 && edad < 3){  primercalculo = (59.512*peso)-30.4;}
        else if (edad >= 3 && edad < 10){  primercalculo = (22.706*peso)+504.3;}
        else if (edad >= 10 && edad < 18){  primercalculo = (17.686*peso)+658.2;1}
        else if (edad >= 18 && edad < 30){  primercalculo = (15.057*peso)+692.2;}  
        else if (edad >= 30 && edad < 60){  primercalculo = (11.472*peso)+873.1;}
        else if (edad >=60){  primercalculo = (11.711*peso)+587.7;}
        if ((altura/muñeca) > 10.4) { alert(`Tu contextura es pequeña`)
            const div = document.getElementById("contenedor2");
            fetch("./data.json")
            .then(Response => Response.json())
            .then(data => {
                data.forEach(plan => {
                    const div = document.createElement("div");
                    div.innerHTML = `${plan.A} `;
                    contenedor2.append(div);
                })
            })
        }
        if ((altura/muñeca) >= 9.6 && (altura/muñeca) <= 10.4) { alert(`Tu contextura es mediana`)
            const div = document.getElementById("contenedor2");
            fetch("./data.json")
            .then(Response => Response.json())
            .then(data => {
                data.forEach(plan => {
                    const div = document.createElement("div");
                    div.innerHTML = `${plan.B}`;
                    contenedor2.append(div);
                })
            })
        }
        if ((altura/muñeca) < 9.6) { alert(`Tu contextura es grande`)
            const div = document.getElementById("contenedor2");
            fetch("./data.json")
            .then(Response => Response.json())
            .then(data => {
                data.forEach(plan => {
                    const div = document.createElement("div");
                    div.innerHTML = `${plan.C}`;
                    contenedor2.append(div);
                })
            })
        }
        // alert(`Tu MB - Metabolismo Basal es de ${primercalculo}`)
        alert(`Tu MB - Metabolismo Basal es de ${primercalculo}`)
    }
    

    /// en el proximo condicional, dependiendo del valor ingresado por el usuario en el input actividad fisica, se recomendara a traves de la libreria tostify un tipo de rutina, la cual el usuario debera seleccionar en un boton del formulario para poder visualizarla en pantalla.

    if (actividadFisica.toUpperCase() == "NULA" || actividadFisica.toUpperCase() == "LEVE") {
        calculofinal = primercalculo*1.30
        dieta = localStorage.getItem('rutina1');
            Toastify({
            text: ` SE RECOMIENDA RUTINA A`,
            duration: 15000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "left", 
            stopOnFocus: true, 
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",},
            onClick: function(){} 
        }).showToast(); 
    }
    else if (actividadFisica.toUpperCase() == "MODERADA") {    
        calculofinal = primercalculo*1.50
        dieta = localStorage.getItem('rutina2');
        Toastify({
            text: `SE RECOMIENDA RUTINA C`,
            duration: 15000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "left", 
            stopOnFocus: true, 
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",},
            onClick: function(){} 
        }).showToast();
    }
    else if (actividadFisica.toUpperCase() == "INTENSA" || actividadFisica.toUpperCase() == "INTENSIVA") {    
        calculofinal = primercalculo*1.75
        dieta = localStorage.getItem('rutina3');
        Toastify({
            text: `SE RECOMIENDA RUTINA B y D`,
            duration: 15000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "left", 
            stopOnFocus: true, 
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",},
            onClick: function(){} 
        }).showToast();
    }      
        


    // dependiendo del condicional en el que haya caido la seleccion del usuario, se mostrara un alert donde se informara la dieta recomendada
    alert(dieta)    
    
    
    // a traves de la libreria sweet alert, informaremos al usuario cual es el valor calorico total segun los calculos realizados previamente de acuerdo a la informacionn suministrada 
    Swal.fire(`tu VCT - Valor Calorico Total es de ${calculofinal} Kcal.`)
    

    // creamos un array vacio y le pusheamos las variables que contienen informacion cargada por el usuario y los valores nutricionales obtenidos
    const mostrar = []
    mostrar.push({Nombre:nombre, DNI:DNI, MB:primercalculo, VCT:calculofinal});
    console.log(mostrar)

 // creamos un for para recorrer el array creado arriba, y lo recorremos para mostrar la informacion en pantalla

    for (i of mostrar){
        let item = document.createElement("div")
        item.innerHTML = 
            `<strong>Nombre:</strong> ${i.Nombre}, 
            <strong>DNI:</strong> ${i.DNI}, 
            <strong>MB:</strong> ${i.MB},
            <strong>VCT:</strong> ${i.VCT}` 
        contenedor.append(item);  
    }


})

// le asignamos al evento click de cada uno de los botones que corresponden a las rutinas, la funcion mostrar rutina, y en cada uno de los casos, le asignamos como parametro un array distinto, el cual al ejecutarse, muestra en pantalla la rutina seleccionada

arms.addEventListener("click", (e) => {    
    contenedor3.innerHTML = ""
    mostrarRutina(rutinaA)})

shoulders.addEventListener("click", (e) => {    
    contenedor3.innerHTML = ""
    mostrarRutina(rutinaB)})

legs.addEventListener("click", (e) => {  
        contenedor3.innerHTML = ""  
        mostrarRutina(rutinaC)})

back.addEventListener("click", (e) => {    
    contenedor3.innerHTML = ""
    mostrarRutina(rutinaD)})

