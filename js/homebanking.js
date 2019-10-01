//Declaración de variables

var nombreUsuario = 'Nahuel Barrios';
var saldoCuenta = 42000;
var limiteExtraccion = 5000;
var cuentaBloqueada = false; 


//Funcion que recibe dinero y lo suma al saldo de cuenta.

function sumarSaldoCuenta (dinero) {

	saldoCuenta += dinero;
}


// Funcion que resta dinero del saldo de cuenta.

function restarSaldoCuenta (dinero) {
	
	saldoCuenta -= dinero;
}


// Funcion que no me deja hacer nada si el usuario ingresa mal su nombre de usuario y/o su contraseña

function bloquearCuenta () {

	saldoCuenta = 0;
    nombreUsuario = '';
	limiteExtraccion = 0;
	cuentaBloqueada = true;

}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
	iniciarSesion();
	cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {

	var numero;
	var imput = prompt('Ingrese el nuevo limite de extracción');
	limiteExtraccion = imput;

	if (cuentaBloqueada) {
		return alert ('Su cuenta esta bloqueada, no podrá ejecutar esta función.');
	 }

			if (imput === null) {

		} else {

			numero = parseInt(imput);

			if (isNaN(numero)) {

			alert('Lo que ingresaste es inválido');
		}

			else {

				actualizarLimiteEnPantalla();

				alert('Su nuevo limite de extracción es: ' + limiteExtraccion);

			}
		} 
}	


function extraerDinero() {

	var numero;
	var saldo = saldoCuenta;
	var imput = prompt('Ingrese el monto que desea extraer');

	if (cuentaBloqueada) {
		return alert ('Su cuenta esta bloqueada, no podrá ejecutar esta función.');
	 }
	

			if (imput === null) {

		} else {

			numero = parseInt(imput);

			if (isNaN(numero)) {

			alert('Lo que ingresaste es inválido');
		}

			else {

				if (numero > saldoCuenta) {
					return alert ('No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.');
			}
			
				if (numero > limiteExtraccion) {
					return alert ('La cantidad de dinero que deseas extraer es mayor a tu límite de extracción.');
			}

				if (numero % 100 != 0) {
					return alert ('Solo puedes extraer billetes de 100.');
			}

				restarSaldoCuenta (numero);
				actualizarSaldoEnPantalla();

				alert('Su saldo anterior es: ' + saldo + '\nSu extrancción es de: ' + numero + '\nSu saldo actual es: ' + saldoCuenta);
			}
		} 
	
}

function depositarDinero() {

	var numero;
	var saldo = saldoCuenta;
	var imput = prompt('Ingrese el monto a depositar');

	if (cuentaBloqueada) {
		return alert ('Su cuenta esta bloqueada, no podrá ejecutar esta función.');
	 }

			if (imput === null) {

		} else {

			numero = parseInt(imput);

			if (isNaN(numero)) {

			alert('Lo que ingresaste es inválido');
		}

			else {

				sumarSaldoCuenta (numero);
				actualizarSaldoEnPantalla();

				alert('Su saldo anterior es: ' + saldo + '\nSu extrancción es de: ' + numero + '\nSu saldo actual es: ' + saldoCuenta);
			}
		}

}

function pagarServicio() {

	var agua = 350;
	var telefono = 425;
	var luz = 210;
	var internet = 570;

	var saldo = saldoCuenta;

	var imput = prompt('Ingrese el número que corresponda con el servicio que queres pagar\n1 - Agua\n2 - Luz\n3 - Internet\n4 - Teléfono');

	if (cuentaBloqueada) {
		return alert ('Su cuenta esta bloqueada, no podrá ejecutar esta función.');
	 }

	if(imput != null) {

		switch (imput) {
			case '1':

				if (agua < saldoCuenta) {
					
					restarSaldoCuenta (agua);
					actualizarSaldoEnPantalla();

					alert('Has pagado el servicio de Agua.\nSaldo anterior: ' + saldo + '\nDinero descontado: ' + agua + '\nSu saldo actual es: ' + saldoCuenta);

			} else {
				
				alert ('No hay suficiente saldo en tu cuenta para pagar este servicio.');
			}

				break;

			case '2':

				if (luz < saldoCuenta) {
					
					restarSaldoCuenta (luz);
					actualizarSaldoEnPantalla();

					alert('Has pagado el servicio de Luz.\nSaldo anterior: ' + saldo + '\nDinero descontado: ' + luz + '\nSu saldo actual es: ' + saldoCuenta);

			} else {
				
				alert ('No hay suficiente saldo en tu cuenta para pagar este servicio.');
			}

				break;

			case '3':

				if (internet < saldoCuenta) {
					
					restarSaldoCuenta (internet);
					actualizarSaldoEnPantalla();

					alert('Has pagado el servicio de Internet.\nSaldo anterior: ' + saldo + '\nDinero descontado: ' + internet + '\nSu saldo actual es: ' + saldoCuenta);

			} else {
				
				alert ('No hay suficiente saldo en tu cuenta para pagar este servicio.');
			}

				break;
				
			case '4':

				if (telefono < saldoCuenta) {
					
					restarSaldoCuenta (telefono);
					actualizarSaldoEnPantalla();

					alert('Has pagado el servicio de Teléfono.\nSaldo anterior: ' + saldo + '\nDinero descontado: ' + telefono + '\nSu saldo actual es: ' + saldoCuenta);

			} else {
				
				alert ('No hay suficiente saldo en tu cuenta para pagar este servicio.');
			}

				break;			

			default:

				alert ('No existe el servicio que se ha seleccionado.');
				
				break;
		}

	} 

}

function transferirDinero() {

	var cuentaAmiga1 = 1234567;
	var cuentaAmiga2 = 7654321;

	var imput = prompt('Ingrese el monto que desea transferir');

	if (cuentaBloqueada) {
		return alert ('Su cuenta esta bloqueada, no podrá ejecutar esta función.');
	 }


	if (imput != null) {

		var montoTransferencia = parseInt(imput);

		if (!isNaN(montoTransferencia)) {

			if(montoTransferencia < saldoCuenta) {
				
				var numero = parseInt(prompt('Ingrese el número de cuenta al que desea transferir el dinero'));

				if (numero == cuentaAmiga1 || numero == cuentaAmiga2){

					restarSaldoCuenta (imput);
					actualizarSaldoEnPantalla();

					alert('Se han transferido: ' + montoTransferencia + '\nCuenta destino: ' + numero);

				} else {

					alert ('Solo puede transferirse dinero a una cuenta amiga.');

				}


			} else {

				alert ('No hay suficiente saldo en tu cuenta para transferir ese dinero.');

			}
		} else {

			alert('Lo que ingresaste es inválido');

		}

	} 

}

function iniciarSesion() {

	var codigoCuenta = 1234;
	var usuario = prompt('Ingrese su nombre de usuario');
	var imput = parseInt(prompt('Ingrese el código de su cuenta'));


	if(usuario === nombreUsuario && imput === codigoCuenta) {

		cargarNombreEnPantalla();

		alert('Bienvenido/a: ' + nombreUsuario + 'ya puedes comenzar a realizar tus operaciones.');

	} else {

		bloquearCuenta();
		alert ('Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad');

	}

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}