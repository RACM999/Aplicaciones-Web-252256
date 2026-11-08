/**Ejercicio 1: Temporizador con Callback
Crea una función principal que reciba un callback como parámetro.
Utiliza la función setTimeout para programar una espera de exactamente 3 segundos (3000 milisegundos).
Una vez transcurrido ese tiempo, ejecuta el callback para imprimir un mensaje de éxito en la consola.
 */


function funcionPrincipal(callback) {
    setTimeout(callback, 3000);
}

function mostrarExito() {
    console.log("Mensaje exitoso")
}

funcionPrincipal(mostrarExito);