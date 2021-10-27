//Numeros
let numeros = [9,3,1,6,5,88,-1,2,7];

const ordernamientoBurbuja = (arreglo) => {
    let length = arreglo.length;
    for (let uno = 0; uno < length; uno++) {
        //console.log("ciclo 1: " + uno);
        for (let dos = 0; dos < length - 1 - uno; dos++) {
            //let posicionActual = length - 1 - uno;
            //console.log("ciclo 2: " + posicionActual);
            if(arreglo[dos] < arreglo[dos + 1]){
                [arreglo[dos], arreglo[dos + 1]] = [arreglo[dos + 1], arreglo[dos]];
            }
        }
    }

    return arreglo
}

let arregloOrdenado = ordernamientoBurbuja(numeros);
console.log(arregloOrdenado);

//Letras
let letras =  ["b","h","w","e","a"];

const ordernamientoBurbujaL = (arreglo_letras) => {
    let length = arreglo_letras.length;
    for (let uno = 0; uno < length; uno++) {
        for (let dos = 0; dos < length - 1 - uno; dos++) {
            if(arreglo_letras[dos].charCodeAt(0) > arreglo_letras[dos + 1].charCodeAt(0)){
                [arreglo_letras[dos], arreglo_letras[dos + 1]] = [arreglo_letras[dos + 1], arreglo_letras[dos]];
            }
        }
    }

    return arreglo_letras
}

let arregloOrdenado_letras = ordernamientoBurbujaL(letras);
console.log(arregloOrdenado_letras);