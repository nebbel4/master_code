var cuentas = [
    { numerocta: 5579, nombre: "Mali", saldo: 200, password: 'helloworld' },
    { numerocta: 9509, nombre: "Gera", saldo: 290, password: 'l33t' },
    { numerocta: 0100, nombre: "Maui", saldo: 67, password: '123' }
];


function ingresarCuenta(event) {
    event.preventDefault();

    //Captura de cuenta
    ctacapturada = document.getElementById('numeroCta').value;
    console.log(ctacapturada);
    
    for (let index = 0; index < cuentas.length; index++) {
        if (parseInt(ctacapturada) === cuentas[index].numerocta) {
            console.log("Cuenta encontrada");

            //Mostrar campo password, botón Login y desaparece botón Ingresar
            document.getElementById('labelPassword').className = "show";
            document.getElementById('password').className = "show";
            document.getElementById('ingresar').className = "hide";
            document.getElementById('login').className = "show;"
            document.getElementById('password').focus();
        } else {
            //else
        }
    }
}

function ingresarPassword() {
    //Captura de password
    passcapturada = document.getElementById('password').value;
    console.log(passcapturada);
    console.log("Password capturado");
    for (let index = 0; index < cuentas.length; index++) {
        if(parseInt(ctacapturada) === cuentas[index].numerocta){
            if (passcapturada === cuentas[index].password) {
                console.log("passwordcomplete");
                window.open(src="cuenta.html")
                localStorage.ctacapturada = ctacapturada;
                window.close();
            } else if(passcapturada != cuentas[index].password){
                alert("Contraseña equivocada, favor de intentarlo de nuevo.")
                document.getElementById('password').value = "";
                document.getElementById('password').focus();    
            }
        }
    }
}

let btnIngresar = document.getElementById("ingresar");

if (btnIngresar) {
    btnIngresar.addEventListener('click', ingresarCuenta, false);
}

let btnLogin = document.getElementById("login");

if (btnLogin) {
    btnLogin.addEventListener('click', ingresarPassword, false);
}

