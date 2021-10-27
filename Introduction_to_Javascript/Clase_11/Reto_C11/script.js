function pedirDatos(){
    let color = prompt("Ingrese el color del vehiculo");
    let marca = prompt("Ingrese la marca del vehiculo");
    let modelo = prompt("Ingrese el modelo del vehiculo");
    let tipoCombustible = prompt("Ingrese el tipo de combustible del vehiculo");
    let tipoTransmision = prompt("Ingrese el tipo de transmision del vehiculo");
    let tipoVehiculo = prompt("Ingrese el tipo de vehiculo");

    if(tipoVehiculo == "automovil"){
        let tipoAutomovil = prompt("Ingrese el tipo de automovil(sedan, camioneta, SUV, etc)");
        let numeroAsientos = prompt("Ingrese el número de asientos del automovil");
        let automovil = new Automovil(color, marca, modelo, tipoCombustible, tipoTransmision, tipoVehiculo);
        automovil.registrarAutomovil(tipoAutomovil, numeroAsientos);
    }
    else if(tipoVehiculo == "motocicleta"){
        let tipoMotocicleta = prompt("Ingrese el tipo de automovil(enduro, turismo, scooter, deportiva)");
        let motocicleta = new Motocicleta(color, marca, modelo, tipoCombustible, tipoTransmision, tipoVehiculo);
        motocicleta.registrarMotocicleta(tipoMotocicleta);
    }
}

let btnRegistrar = document.getElementById("registrar");
btnRegistrar.addEventListener('click', pedirDatos, false);


