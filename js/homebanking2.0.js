//Declaración de variables
var nombreUsuario = 'Lubbert Das';
var saldoCuenta = 222000;
var limiteExtraccion = 2200;
var plata;
var saldoAnterior = saldoCuenta;
// variable para congelar las funciones si se inicia mal. 
var cuentaBloqueada = false;
//Servicios
/*sumarle precio a cada servicio para que no tome la variable y se 
pueda poner un string en CASE como parámetro de cada servicio.*/ 
var servicio;
var precioAgua = 350;
var precioTelefono = 425;
var precioLuz = 210;
var precioInternet = 570; 
​
//Transferencias
var cuenta;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
​
//Iniciar Sesión 
​
var codigoSeguridad = 6712;
​
//Función retener para que no haya datos de ningún tipo si se ingresa mal nombre y clave.
function retener () {
​
    saldoCuenta = 0;
    nombreUsuario = '';
    limiteExtraccion = 0;
    alert ('El código ingresado es Incorrecto ' + ' \nHemos congelado su cuenta por seguridad.'); 
    //generar variable en depositar que de false con un return para después trabar que no se deposite dinero.  
    
     cuentaBloqueada = true;
    
    
 }
// igualar estas variables con ==== clave y nombre de usuario para usar en el if y tome valor y tipo. 
var usuario;
var codigo;
​
​
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    //sumarle iniciarSesion para que pueda aparecer los prompts ni bien se entra. 
    iniciarSesion ();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}
​
//funciones suma y resta
​
function sumarPlata (plata) {
 var sumar =  (saldoCuenta) + (plata);
saldoCuenta = sumar;
​
​
}
function restarPlata (plata) {
​
    var restar = (saldoCuenta) - (plata);
    saldoCuenta = restar;
      
}
​
//Saldo
function haySaldoDisponible (plata) {
if (isNaN (plata)){
    alert('El dato ingresado no es numérico'); 
     return;
} if (plata > saldoCuenta) {
    alert ('La operación deseada supera su Saldo Actual');
    return false
}if (plata > limiteExtraccion) {
    alert ('La Extracción deseada supera su Límite de Extracción');
    return false
  } else { 
    return true
    }
}
​
​
//Funciones que tenes que completar
​
​
//NOTAS 
/*Si parseInt encuentra un carácter que no es un numeral de la base especificada, 
lo ignora a él y a todos los caracteres correctos siguientes, 
devolviendo el valor entero obtenido hasta ese punto. 
parseInt trunca los números en valores enteros. 
Se permiten espacios anteriores y posteriores.(MDN)*/
/*% El operador resto devuelve el resto que queda cuando un operando se divide por un segundo operando. 
Siempre toma el signo del dividendo, no el divisor.(MDN) 
Esto va a servir para los billetes de 100 % !==0 valor y tipo */
/*isNaN intenta convertir el parámetro pasado a un número. 
Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.*/
//!=	distinto de 
// && busca que todas sean true sino no funciona. 
// usar el !=null para cuando clikeas en ok o cancelar no siga ejecutando la acción.
  
function cambiarLimiteDeExtraccion(plata) {
//usar number en vez de parseint para que no lea letras después de números y salte alerta. No toma el && typeof ==='number'(Preguntar por qué)
if (cuentaBloqueada) {
    alert ('Su cuenta esta congelada, no podrá ejecutar esta función.');
     return;
 }
plata = Number(prompt('Ingrese nuevo límite de extracción'));
    
​
    if (!isNaN(plata) && plata != null && plata < saldoCuenta) {
        limiteExtraccion = plata;
    
        alert('Su nuevo límite de extracción es $ ' + limiteExtraccion);
     } if (isNaN (plata) || plata == ''){ //el || funciona como "o" si plata no es número o es un carácter vacío
            alert('El dato ingresado no es un numérico'); 
            return false   
    } else {
        alert('El límite de extraccíon supera el saldo de su cuenta');
    
    }
​
        actualizarLimiteEnPantalla();
}
    
​
//Extracción
function extraerDinero(plata) {
    //en restar no funciona el number para alertar las letras, buscar qué poner.
    if (cuentaBloqueada) {
        alert ('Su cuenta esta congelada, no podrá ejecutar esta función.');
        return;
    }
​
    plata = Number(prompt ('Elija el monto a Extraer'));
​
    if (isNaN(plata)){
        alert('No ha ingresado un dato Numérico');
        return;
    }
​
    if (plata % 100 !== 0) {
​
        alert ('Sólo se pueden extraer billetes de $100')
        return;
    } 
    
    if((!isNaN(plata) && plata != null && plata <= limiteExtraccion)) {
       
        var saldoAnterior = saldoCuenta;
         restarPlata (plata);
         alert ('Has Retirado $ ' + plata + '\nSaldo Anterior: $ ' + saldoAnterior + 
         '\nSaldo Actual: $ ' + saldoCuenta);
​
    }
​
actualizarSaldoEnPantalla();
}
​
//Depósito
function depositarDinero(plata) {
   if (cuentaBloqueada) {
       alert ('Su cuenta esta congelada, no podrá ejecutar esta función.');
        return;
    }
  
    plata = Number(prompt ('Elija el monto a Depositar'));
   
    if (isNaN(plata)){
        alert('No ha ingresado un dato Numérico');
        return;
    }
    if (!isNaN(plata) && plata != null) {
        var saldoAnterior = saldoCuenta;
        sumarPlata (plata);
    alert ('Has Depositado $ ' + plata + '\nSaldo Anterior: $ ' + saldoAnterior + 
    '\nSaldo Actual: $ ' + saldoCuenta); 
    } 
​
actualizarSaldoEnPantalla();
}
​
//Pagar Servicios 
//Usar Switch y Case para asociarlos con las opciones del prompt. 
//Cada Case termina con break y por último Default con otro break. 
//Poner '' a los numeros de case sino no lo toma. 
​
​
//!!PREGUNTAR CÓMO HACER PARA QUE TOME POR NÚMERO!! Lucas Alvarez
​
function pagarServicio(servicio) {
    if (cuentaBloqueada) {
        alert ('Su cuenta esta congelada, no podrá ejecutar esta función.');
         return;
     }
servicio = prompt ('Ingrese Número de servicio a pagar: ' + '\n' +
 ' 1 . "Agua" ' + '\n' + ' 2 . "Teléfono" ' + '\n' + ' 3 . "Luz" ' + '\n' + ' 4 . "Internet"');
​
 switch (servicio) {
  case '1':
      if (saldoCuenta > precioAgua){
      var saldoAnterior = saldoCuenta;
         restarPlata(precioAgua);
    alert ('Ha pagado el servicio: Agua $' + precioAgua + '\n' + '\nSaldo Anterior: $ ' + saldoAnterior + 
    '\nSaldo Actual: $ ' + saldoCuenta); 
    actualizarSaldoEnPantalla ();
} else {
    alert ('No tiene saldo suficiente para abonar el servicio.');
}
      break;
      case '2':
            if (saldoCuenta > precioTelefono){
            var saldoAnterior = saldoCuenta;
               restarPlata(precioTelefono);
          alert ('Ha pagado el servicio: "Teléfono" $' + precioTelefono + '\n' + '\nSaldo Anterior: $ ' + saldoAnterior + 
          '\nSaldo Actual: $ ' + saldoCuenta); 
          actualizarSaldoEnPantalla ();
      } else {
          alert ('No tiene saldo suficiente para abonar el servicio.');
      }
      break;
      case '3':
      if (saldoCuenta > precioLuz){
      var saldoAnterior = saldoCuenta;
         restarPlata(precioLuz);
    alert ('Ha pagado el servicio: "Luz" $' + precioLuz + '\n' + '\nSaldo Anterior: $ ' + saldoAnterior + 
    '\nSaldo Actual: $ ' + saldoCuenta); 
    actualizarSaldoEnPantalla ();
} else {
    alert ('No tiene saldo suficiente para abonar el servicio.');
}
     break;
     case '4':
      if (saldoCuenta > precioInternet){
      var saldoAnterior = saldoCuenta;
         restarPlata(precioInternet);
    alert ('Ha pagado el servicio: "Internet" $' + precioInternet + '\n' + '\nSaldo Anterior: $ ' + saldoAnterior + 
    '\nSaldo Actual: $ ' + saldoCuenta); 
    actualizarSaldoEnPantalla ();
    } else {
    alert ('No tiene saldo suficiente para abonar el servicio.');
    }
    break;
    default:
        alert ('El servicio indicado no existe.');
    break;
​
    }
 }
​
​
// Transferencia
function transferirDinero(cuenta) {
//Igual que Inicio pero se iguala variable cuenta con las otras dos cuentas
if (cuentaBloqueada) {
    alert ('Su cuenta esta congelada, no podrá ejecutar esta función.');
     return;
 }    
    cuenta = Number (prompt ('Ingrese la Cuenta a la que quiera transferir'));
   
    if (cuenta === cuentaAmiga1 || cuenta === cuentaAmiga2) {
       
        plata = Number (prompt ('Cantidad a transferir.'));
​
    }else{
        alert ('Sólo puede transferirse a una Cuenta Amiga')
        return false;
    }
    if (plata > saldoCuenta) {
            alert ('El saldo de su cuenta no alcanza para esta operación')
            return;
    }if (isNaN(plata)){
                alert('No ha ingresado un dato Numérico');
                return false;
    } else { (!isNaN(plata) && plata != null && plata)
        var saldoAnterior = saldoCuenta;
         restarPlata (plata);
         alert ('Has Depositado $ ' + plata + '\nCuenta Destino:  ' + cuenta + 
         '\nSaldo Anterior: $ ' + saldoAnterior + '\nSaldo Actual: $ ' + saldoCuenta);
​
    }                
​
actualizarSaldoEnPantalla();
​
    
}
//Plazo Fijo
function plazoFijo (){
​
}
// Iniciar Sesion
​
function iniciarSesion(usuario) {
usuario = prompt ('Ingresar Nombre de Usuario');
   
    if (usuario === nombreUsuario) { 
    codigo = Number(prompt ('Ingrese su código de Seguridad')); 
} 
​
​
    if (codigo === codigoSeguridad) {
    //con el number antes del prompt me deja de tomar letras después del código. 
    alert ('Bienvenido/a ' + nombreUsuario + ' a su cuenta de Homebanking');
    
     } else {  
      //función retener para que deje todo en blanco. 
        retener ();
     }
    
}
​
//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}
​
function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}
​
function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}



