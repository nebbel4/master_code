let frutas = ["Manzanas", "Naranja"];
frutas.push("Pera");
console.log(frutas);

function eliminarUltimo(){
    frutas.splice();
    let indice = frutas.length-1;
    frutas.splice(indice, 1);
}
