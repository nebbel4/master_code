class Vehiculos{
    constructor(color, marca, modelo, tipoCombustible, tipoTransmision, tipoVehiculo){
        this.color = color,
        this.marca = marca,
        this.modelo = modelo,
        this.tipoCombustible = tipoCombustible,
        this.tipoTransmision = tipoTransmision,
        this.tipoVehiculo = tipoVehiculo
    }

    registrarVehiculo(){
        let html = "";
        html += "<tr>";
        html += "   <td>" + this.color + "</td>";
        html += "   <td>" + this.marca + "</td>";
        html += "   <td>" + this.modelo + "</td>";
        html += "   <td>" + this.tipoCombustible + "</td>";
        html += "   <td>" + this.tipoTransmision + "</td>";
        html += "   <td>" + this.tipoVehiculo + "</td>";
        html += "   <td></td>";
        html += "</tr>";
        document.getElementById("registros").insertAdjacentHTML('beforeend', html);
    }

}

class Automovil extends Vehiculos{
    registrarAutomovil(tipoAutomovil, numeroAsientos){
        let html = "";
        html += "<tr>";
        html += "   <td>" + this.color + "</td>";
        html += "   <td>" + this.marca + "</td>";
        html += "   <td>" + this.modelo + "</td>";
        html += "   <td>" + this.tipoCombustible + "</td>";
        html += "   <td>" + this.tipoTransmision + "</td>";
        html += "   <td>" + this.tipoVehiculo + "</td>";
        html += "   <td>"+ tipoAutomovil +"</td>";
        html += "   <td>"+ numeroAsientos +"</td>";
        html += "</tr>";
        document.getElementById("registros").insertAdjacentHTML('beforeend', html);
    }
}

class Motocicleta extends Vehiculos{
    registrarMotocicleta(tipoMotocicleta){
        let html = "";
        html += "<tr>";
        html += "   <td>" + this.color + "</td>";
        html += "   <td>" + this.marca + "</td>";
        html += "   <td>" + this.modelo + "</td>";
        html += "   <td>" + this.tipoCombustible + "</td>";
        html += "   <td>" + this.tipoTransmision + "</td>";
        html += "   <td>" + this.tipoVehiculo + "</td>";
        html += "   <td>"+ tipoMotocicleta +"</td>";
        html += "</tr>";
        document.getElementById("registros").insertAdjacentHTML('beforeend', html);
    }
}