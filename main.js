alert("Bienvenido a la Calculadora Nutricional")
var saludo = prompt("Empezamos?? (digite NO para salir)");   
while (saludo.toUpperCase() != "NO"){
        var peso = prompt('Cual es tu peso?');
        var altura = prompt('Cual es tu altura en cm?');
        var muñeca = prompt('Cual es la circunferencia de tu muñeca en cm?');
        var edad = prompt('Cuantos años tenés?');
        var sexo = prompt('Sexo femenino o masculino?');
        var actividadFisica = prompt('Actividad Fisica nula/leve, moderada o intensa?');

        var sexo = sexo.toUpperCase ()
        var actividadFisica = actividadFisica.toUpperCase()

        if (sexo == "FEMENINO"){
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
        }else if (sexo == "MASCULINO"){
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

        var saludo = prompt("Sacamos otro calculo?");
        var saludo = saludo.toUpperCase();
}

alert("Gracias por usar la Calculadora Nutricional")
