let valor = document.getElementById("valor");

//detecto el evento cuando se escribe un numero 
valor.addEventListener("keyup", convertir);
numbResultado = document.getElementById("resultado");
unidad1 = document.getElementById("unidad1");

//detecto el evento cuando se selecciona una unidad
unidad1.addEventListener("change", convertir);
nidad2 = document.getElementById("unidad2");

//detecto el evento cuando se selecciona una unidad
unidad2.addEventListener("change", convertir);

//Variable donde se calculara el resultado
let resultado;

// Funcion que realiza el calculo
function convertir() {


    //caso de que no haya nada en el input
    if (valor.value == "") {
        return;
    }


    // Tomo el numero del input y lo convierto a numerico
    numero = valor.value;
    numero = parseFloat(numero);

    // La parte del calculo de Kilometros
    if (unidad1.value == "Kilometro" && unidad2.value == "Kilometro") {
        resultado = numero * 1;
        numbResultado.innerHTML = numero + " Kilometro/s equivale a " + resultado + "Kilometro/s";

    }

    if (unidad1.value == "Kilometro" && unidad2.value == "Milla") {
        resultado = numero / 1.609;
        numbResultado.innerHTML = numero + " Kilometro/s equivale a " + resultado + "Milla/s";
    }


    if (unidad1.value == "Kilometro" && unidad2.value == "Metro") {
        resultado = numero * 1000;
        numbResultado.innerHTML = numero + " Kilometro/s equivale a " + resultado + "Metro/s";
    }

    if (unidad1.value == "Kilometro" && unidad2.value == "Pie") {
        resultado = numero * 3281;
        numbResultado.innerHTML = numero + " Kilometro/s equivale a " + resultado + "Pie/s";
    }



    if (unidad1.value == "Kilometro" && unidad2.value == "Centimetro") {
        resultado = numero * 10000;
        numbResultado.innerHTML = numero + " Kilometro/s equivale a " + resultado + "Centimetro/s";
    }


    if (unidad1.value == "Kilometro" && unidad2.value == "Pulgada") {
        resultado = numero * 39370;
        numbResultado.innerHTML = numero + " Kilometro/s equivale a " + resultado + "Pulgada/s";
    }



    // La parte del calculo de Millas



    if (unidad1.value == "Milla" && unidad2.value == "Kilometro") {
        resultado = numero * 1.609;
        numbResultado.innerHTML = numero + " Milla/s equivale a " + resultado + "Kilometro/s";

    }

    if (unidad1.value == "Milla" && unidad2.value == "Milla") {
        resultado = numero * 1;
        numbResultado.innerHTML = numero + " Milla/s equivale a " + resultado + "Milla/s";
    }


    if (unidad1.value == "Milla" && unidad2.value == "Metro") {
        resultado = numero * 1609.34;
        numbResultado.innerHTML = numero + " Milla/s equivale a " + resultado + "Metro/s";
    }

    if (unidad1.value == "Milla" && unidad2.value == "Pie") {
        resultado = numero * 5280;
        numbResultado.innerHTML = numero + " Milla/s equivale a " + resultado + "Pie/s";
    }



    if (unidad1.value == "Milla" && unidad2.value == "Centimetro") {
        resultado = numero * 160900;
        numbResultado.innerHTML = numero + " Milla/s equivale a " + resultado + "Centimetro/s";
    }


    if (unidad1.value == "Milla" && unidad2.value == "Pulgada") {
        resultado = numero * 63360;
        numbResultado.innerHTML = numero + " Milla/s equivale a " + resultado + "Pulgada/s";
    }


    // La parte del calculo de Metros


    if (unidad1.value == "Metro" && unidad2.value == "Kilometro") {
        resultado = numero / 1000;
        numbResultado.innerHTML = numero + " Metro/s equivale a " + resultado + "Kilometro/s";

    }

    if (unidad1.value == "Metro" && unidad2.value == "Milla") {
        resultado = numero / 1.609;
        numbResultado.innerHTML = numero + " Metro/s equivale a " + resultado + "Milla/s";
    }


    if (unidad1.value == "Metro" && unidad2.value == "Metro") {
        resultado = numero * 1;
        numbResultado.innerHTML = numero + " Metro/s equivale a " + resultado + "Metro/s";
    }

    if (unidad1.value == "Metro" && unidad2.value == "Pie") {
        resultado = numero * 3.281;
        numbResultado.innerHTML = numero + " Metro/s equivale a " + resultado + "Pie/s";
    }



    if (unidad1.value == "Metro" && unidad2.value == "Centimetro") {
        resultado = numero * 100;
        numbResultado.innerHTML = numero + " Metro/s equivale a " + resultado + "Centimetro/s";
    }


    if (unidad1.value == "Metro" && unidad2.value == "Pulgada") {
        resultado = numero * 39.37;
        numbResultado.innerHTML = numero + " Metro/s equivale a " + resultado + "Pulgada/s";
    }



    // La parte del calculo de Pies

    if (unidad1.value == "Pie" && unidad2.value == "Kilometro") {
        resultado = numero / 3281;
        numbResultado.innerHTML = numero + " Pie/s equivale a " + resultado + "Kilometro/s";

    }

    if (unidad1.value == "Pie" && unidad2.value == "Milla") {
        resultado = numero / 5280;
        numbResultado.innerHTML = numero + " Pie/s equivale a " + resultado + "Milla/s";
    }


    if (unidad1.value == "Pie" && unidad2.value == "Metro") {
        resultado = numero / 3.281;
        numbResultado.innerHTML = numero + " Pie/s equivale a " + resultado + "Metro/s";
    }

    if (unidad1.value == "Pie" && unidad2.value == "Pie") {
        resultado = numero * 1;
        numbResultado.innerHTML = numero + " Pie/s equivale a " + resultado + "Pie/s";
    }



    if (unidad1.value == "Pie" && unidad2.value == "Centimetro") {
        resultado = numero * 30.48;

        numbResultado.innerHTML = numero + " Pie/s equivale a " + resultado + "Centimetro/s";
    }


    if (unidad1.value == "Pie" && unidad2.value == "Pulgada") {
        resultado = numero * 12;
        numbResultado.innerHTML = numero + " Pie/s equivale a " + resultado + "Pulgada/s";
    }


    // La parte del calculo de Centimetros


    if (unidad1.value == "Centimetro" && unidad2.value == "Kilometro") {
        resultado = numero / 100000;
        numbResultado.innerHTML = numero + " Centimetro/s equivale a " + resultado + "Kilometro/s";

    }

    if (unidad1.value == "Centimetro" && unidad2.value == "Milla") {
        resultado = numero / 160900;
        numbResultado.innerHTML = numero + " Centimetro/s equivale a " + resultado + "Milla/s";
    }


    if (unidad1.value == "Centimetro" && unidad2.value == "Metro") {
        resultado = numero / 100;
        numbResultado.innerHTML = numero + " Centimetro/s equivale a " + resultado + "Metro/s";
    }

    if (unidad1.value == "Centimetro" && unidad2.value == "Pie") {
        resultado = numero / 30, 48;
        numbResultado.innerHTML = numero + " Centimetro/s equivale a " + resultado + "Pie/s";
    }



    if (unidad1.value == "Centimetro" && unidad2.value == "Centimetro") {
        resultado = numero * 1;
        numbResultado.innerHTML = numero + " Centimetro/s equivale a " + resultado + "Centimetro/s";
    }


    if (unidad1.value == "Centimetro" && unidad2.value == "Pulgada") {
        resultado = numero / 2.54;
        numbResultado.innerHTML = numero + " Centimetro/s equivale a " + resultado + "Pulgada/s";
    }


    // La parte del calculo de Pulgadas

    if (unidad1.value == "Pulgada" && unidad2.value == "Kilometro") {
        resultado = numero / 39370;
        numbResultado.innerHTML = numero + " Pulgada/s equivale a " + resultado + "Kilometro/s";

    }

    if (unidad1.value == "Pulgada" && unidad2.value == "Milla") {
        resultado = numero / 63360;
        numbResultado.innerHTML = numero + " Pulgada/s equivale a " + resultado + "Milla/s";
    }


    if (unidad1.value == "Pulgada" && unidad2.value == "Metro") {
        resultado = numero / 39.37;
        numbResultado.innerHTML = numero + " Pulgada/s equivale a " + resultado + "Metro/s";
    }

    if (unidad1.value == "Pulgada" && unidad2.value == "Pie") {
        resultado = numero / 12;
        numbResultado.innerHTML = numero + " Pulgada/s equivale a " + resultado + "Pie/s";
    }



    if (unidad1.value == "Pulgada" && unidad2.value == "Centimetro") {
        resultado = numero * 2.54;
        numbResultado.innerHTML = numero + " Pulgada/s equivale a " + resultado + "Centimetro/s";
    }


    if (unidad1.value == "Pulgada" && unidad2.value == "Pulgada") {
        resultado = numero + 1;
        numbResultado.innerHTML = numero + " Pulgada/s equivale a " + resultado + "Pulgada/s";
    }

}




