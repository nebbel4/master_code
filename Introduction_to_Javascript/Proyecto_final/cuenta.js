//var cuenta = localStorage.ctacapturada;
var cuentas = [
    { numerocta: 5579, nombre: "Mali", saldo: 200, password: 'helloworld' },
    { numerocta: 9509, nombre: "Gera", saldo: 290, password: 'l33t' },
    { numerocta: 0100, nombre: "Maui", saldo: 67, password: '123' }
];

var cuenta = localStorage.ctacapturada;

function bienvenida(){
    
     console.log("Bienvenido "+cuenta)
        if (parseInt(cuenta) === 5579) {
            alert("Bienvenido Mali!");
        } else if (parseInt(cuenta) === 9509) {
            alert("Bienvenido Gera!");
        } else if (parseInt(cuenta) === 0100) {
            alert("Bienvenido Maui!");
        }
}

bienvenida();
//Mostrar Consultar saldo y Consultar saldo
function consultarSaldo(event){
    event.preventDefault();
    document.getElementById('consulta').className = "show";
    
    for (let index = 0; index < cuentas.length; index++) {
        if (parseInt(cuenta) === cuentas[index].numerocta) {
            var saldo = document.getElementById('saldo');
            saldo.innerHTML = cuentas[index].saldo+"MXN";
        } else {
        }
    }
  
}
//Mostrar Ingresar saldo
function ingresarSaldo(event){
    event.preventDefault();
    document.getElementById('ingreso').className = "show";
}

//Ingresar monto
function ingresarMonto(event){
    event.preventDefault();
    montocapturado = document.getElementById('monto').value;

    for (let index = 0; index < cuentas.length; index++) {
        if (parseInt(cuenta) === cuentas[index].numerocta) {
                let montototal = 0;
                montototal = parseInt(montocapturado) + cuentas[index].saldo;
                    if(montototal > 990){
                        alert("Lo sentimos, tu cuenta no puede tener mas de $990.");
                    }
                    else if(montototal <= 990){
                        cuentas[index].saldo = montototal;
                        var saldoingreso = document.getElementById('saldoingreso');
                        document.getElementById('nuevosaldo').className = "show";
                        saldoingreso.innerHTML = cuentas[index].saldo+" MXN";
                    }
            } else {
                //else
        }
    }
}

function retirarSaldo(event){
    event.preventDefault();
    document.getElementById('retiro').className = "show";
}

function retirarMonto(event){
    event.preventDefault();
    montoRcapturado = document.getElementById('montoR').value;

    for (let index = 0; index < cuentas.length; index++) {
        if (parseInt(cuenta) === cuentas[index].numerocta) {
                    let montoRtotal = 0;
                    montoRtotal = cuentas[index].saldo - parseInt(montoRcapturado);
                    if(montoRtotal < 10){
                        alert ("Lo sentimos, tu cuenta no puede tener menos de $10.");
                    }
                    else if(montoRtotal >= 10){
                        cuentas[index].saldo = montoRtotal;
                        var saldoretirado = document.getElementById('saldoretirado');
                        document.getElementById('nuevosaldoR').className = "show";
                        saldoretirado.innerHTML = cuentas[index].saldo+" MXN";
                    }
            } else {
                //else
        }
    }
}



//Botones consultar
let btnConsultar = document.getElementById("btnConsultar");

if (btnConsultar) {
    btnConsultar.addEventListener('click', consultarSaldo, false);
}

//Botones ingresar
let btnIngreso = document.getElementById("btnIngreso");

if (btnIngreso) {
    btnIngreso.addEventListener('click', ingresarSaldo, false);
}

let btningresarMonto = document.getElementById("btningresarMonto");

if (btningresarMonto) {
    btningresarMonto.addEventListener('click', ingresarMonto, false);
}

//Botones retirar
let btnRetirar = document.getElementById("btnRetirar");

if (btnRetirar) {
    btnRetirar.addEventListener('click', retirarSaldo, false);
}

let btnretirarMonto = document.getElementById("btnretirarMonto");

if (btnretirarMonto) {
    btnretirarMonto.addEventListener('click', retirarMonto, false);
}