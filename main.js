alert("Bienvenido a la Nutricalculeitor dude")
var saludo = prompt("Empezamos??");   

while (saludo != "no"){
        let peso = prompt('Cual es tu peso chamigo?');

        let altura = prompt('Cual es tu altura en cm maeser?');

        let muñeca = prompt('Cual es la circunferencia de tu muñeca?');

        let edad = prompt('Cuan jovato estas?');

        let sexo = prompt('Tenes pito?');

        let actividadFisica = prompt('Actividad Fisica nula/leve, moderada o intensa?');

        if (sexo == "no"){
                if (edad > 0 && edad < 3){ var primercalculo = (58.317*peso)-31.11;
                }
                else if (edad >= 3 && edad < 10){ var primercalculo = (20.315*peso)+485.9;
                }
                else if (edad >= 10 && edad < 18){ var primercalculo = (13.384*peso)+692.6;
                }
                else if (edad >= 18 && edad < 30){ var primercalculo = (14.818*peso)+486.6;
                }
                else if (edad >= 30 && edad < 60){ var primercalculo = (8.126*peso)+845.6;
                }
                else if (edad >=60){ let primercalculo = (9.082*peso)+658.5;
                }
                if ((altura/muñeca) > 11) { alert(`tu contextura es pequeña`)}
                if ((altura/muñeca) >= 10.1 && (altura/muñeca) <= 11) { alert(`tu contextura es mediana`)}
                if ((altura/muñeca) < 10.1) { alert(`tu contextura es grande`)}
        }else if (sexo == "si"){
                if (edad > 0 && edad < 3){ var primercalculo = (59.512*peso)-30.4;
                }
                else if (edad >= 3 && edad < 10){ var primercalculo = (22.706*peso)+504.3;
                }
                else if (edad >= 10 && edad < 18){ var primercalculo = (17.686*peso)+658.2;1
                }
                else if (edad >= 18 && edad < 30){ var primercalculo = (15.057*peso)+692.2;
                } 
                else if (edad >= 30 && edad < 60){ var primercalculo = (11.472*peso)+873.1;
                }
                else if (edad >=60){ var primercalculo = (11.711*peso)+587.7;
                }
                if ((altura/muñeca) > 10.4) { alert(`tu contextura es pequeña`)}
                if ((altura/muñeca) >= 9.6 && (altura/muñeca) <= 10.4) { alert(`tu contextura es mediana`)}
                if ((altura/muñeca) < 9.6) { alert(`tu contextura es grande`)}
                alert(`tu MB - Metabolismo Basal es de ${primercalculo}`)
        }

        if (actividadFisica == "nula" || actividadFisica == "leve") {
            var calculofinal = primercalculo*1.30}
        else if (actividadFisica == "moderada") {   
            var calculofinal = primercalculo*1.50}
        else if (actividadFisica == "intensa") {   
            var calculofinal = primercalculo*1.75}      

        alert(`tu VCT - Valor Calorico Total es de ${calculofinal} Kcal.`)

        var saludo = prompt("Sacamos otro calculo?");
}

alert("gracias por venir capo")
