let players = [
    {
        nombre: "Pedro",
        tipo: {
            tipo1: "Ciudad Mexico",
            direccion2: "San salvador"
        }
    }
];

let escritorio = [
    {
        cajon_izquierdo: "grapadora",
            gabinete: {
                cajon1: {
                    carpetas: {
                        carpeta1: "hojas blancas",
                        carpeta2: "cheques",
                    }
                },
                cajon2: {
                    archivero: "sobre"
                }
        },
        cajon_derecho: "dulces"
    }
]


let tipo_objeto = typeof personas[0].direcciones;
if(tipo_objeto == "object"){
    console.log(personas[0].direcciones);
    let propiedad = prompt("Digita la propiedad que quieres ver!");
    navegadorDeNodo(personas[0].direcciones, propiedad);
}

function navegadorDeNodo(objecto, propiedad){
    console.log(objecto[propiedad]);
}


console.log(tipo_objeto);