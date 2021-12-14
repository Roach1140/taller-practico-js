// Imprimimos una línea horizontal

document.write("<hr>");

// Declaramos las Variables

let i;
let j = 500;
let rep= 0;

// Bucle desde 1 hasta j

for(i = 1; i <= j; i++){

    // Imprimimos el número i

    document.write(i);

    //Si el resto de dividir i/4 es igual a 0

    if(i % 4 == 0){

        document.write(" - Múltiplo de 4");

    }

    // Si el resto de dividir i/9 es igual a 0

    if(i % 9 == 0){

        document.write(" - Múltiplo de 9");
    }

    // Imprimimos un salto de línea

    document.write("<br>");

    // Si es Múltiplo de 5 imprimimos una línea horizontal

    if(i % 5 == 0){

        document.write("<hr>");
    }

}