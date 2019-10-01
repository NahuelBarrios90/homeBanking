//Declaración de variables

var nombreUsuario = 'Laura Barrios';
var saldoCuenta = 29000;
var limiteExtraccion = 5000; 


//Funcion que recibe dinero y lo suma al saldo de cuenta.

function sumarSaldoCuenta (dinero) {

	saldoCuenta += dinero;
}


// Funcion que resta dinero del saldo de cuenta.

function restarSaldoCuenta (dinero) {

	saldoCuenta -= dinero;
}


// Funcion que valida los imput

function valirdarImput () {


}


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {

	var modificarLimiteExtraccion = parseInt(prompt('Ingrese el nuevo limite de extracción'));
	limiteExtraccion = modificarLimiteExtraccion;

	actualizarLimiteEnPantalla();

	alert('Su nuevo limite de extracción es: ' + limiteExtraccion);


}

function extraerDinero() {

	var saldo = saldoCuenta;
	var deposito = parseInt(prompt('Ingrese el monto a depositar'));
	
	restarSaldoCuenta (deposito);
	actualizarSaldoEnPantalla();

	alert('Su saldo anterior es: ' + saldo + '\nSu extrancción es de: ' + deposito + '\nSu saldo actual es: ' + saldoCuenta);

}

function depositarDinero() {

	var saldo = saldoCuenta;
	var deposito = parseInt(prompt('Ingrese el monto a depositar'));
	
	sumarSaldoCuenta (deposito);
	actualizarSaldoEnPantalla();

	alert('Su saldo anterior es: ' + saldo + '\nSu deposito es: ' + deposito + '\nSu saldo actual es: ' + saldoCuenta);

}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

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