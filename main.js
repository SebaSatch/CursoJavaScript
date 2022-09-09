alert("Bienvenido a la Calculadora Nutricional")
const datospersonales = [];
const datosnutricionales = [];

    var saludo = prompt("Empezamos?? (digite NO para salir)");    
    while (saludo.toUpperCase() != "NO"){
        var preguntadatos = prompt("Desea cargar sus datos personales?");
        if (preguntadatos.toUpperCase() != "NO"){

            var nombre = prompt('Ingrese su nombre completo');
            var domicilio = prompt('Ingrese su domicilio');
            var DNI = prompt ('Ingrese su nro. de documento');
            var obrasocial = prompt('Tiene obra social?, responder por si o no.');
            var obrasocial = obrasocial.toUpperCase()
            if (obrasocial == 'SI'){
                var nombreobrasocial = prompt('cual?')}
            else
            var nombreobrasocial = "No posee obra social";
            var estadocivil = prompt('Ingrese su estado civil');
            datospersonales.push({nombre:nombre, domicilio:domicilio, DNI:DNI, nombreobrasocial:nombreobrasocial, estadocivil:estadocivil});
            
        };



        var peso = prompt('Cual es tu peso?');
        var altura = prompt('Cual es tu altura en cm?');
        var muñeca = prompt('Cual es la circunferencia de tu muñeca en cm?');
        var edad = prompt('Cuantos años tenés?');
        var sexo = prompt('Sexo femenino o masculino?');
        var actividadFisica = prompt('Actividad Fisica nula/leve, moderada o intensa?');



        var actividadFisica = actividadFisica.toUpperCase()
        var sexo = sexo.toUpperCase ()
        
        if (sexo == "FEMENINO"){
            if (edad > 0 && edad < 3){ var primercalculo = (58.317*peso)-31.11;}
            else if (edad >= 3 && edad < 10){ var primercalculo = (20.315*peso)+485.9;}
            else if (edad >= 10 && edad < 18){ var primercalculo = (13.384*peso)+692.6;}
            else if (edad >= 18 && edad < 30){ var primercalculo = (14.818*peso)+486.6;}
            else if (edad >= 30 && edad < 60){ var primercalculo = (8.126*peso)+845.6;}
            else if (edad >=60){ let primercalculo = (9.082*peso)+658.5;}
            if ((altura/muñeca) > 11) { alert(`tu contextura es pequeña`)}
            if ((altura/muñeca) >= 10.1 && (altura/muñeca) <= 11) { alert(`tu contextura es mediana`)}
            if ((altura/muñeca) < 10.1) { alert(`tu contextura es grande`)}
        }else if (sexo == "MASCULINO"){
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

        if (actividadFisica == "NULA" || actividadFisica == "LEVE") {
            var calculofinal = primercalculo*1.30}
        else if (actividadFisica == "MODERADA") {    
            var calculofinal = primercalculo*1.50}
        else if (actividadFisica == "INTENSA") {    
            var calculofinal = primercalculo*1.75}      
        alert(`tu VCT - Valor Calorico Total es de ${calculofinal} Kcal.`)
    var saludo = prompt("Cargamos otra persona?");
    var saludo = saludo.toUpperCase();

    datosnutricionales.push({peso:peso, altura:altura, muñeca: muñeca, edad:edad, sexo:sexo, actividad_fisica:actividadFisica});
    }

    const generoFEM = datosnutricionales.filter((el) => el.sexo.includes('FEMENINO'));
    const generoMASC = datosnutricionales.filter((el) => el.sexo.includes('MASCULINO'));
    console.log(generoFEM)
    console.log(generoMASC)
    console.log(datospersonales)    
    console.log(datosnutricionales)
alert("Gracias por usar la Calculadora Nutricional")




