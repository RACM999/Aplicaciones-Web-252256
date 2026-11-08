/**
Ejercicio 2: Operaciones Matemáticas
Crea una función principal que reciba tres parámetros: dos valores numéricos y un callback.
Diseña la lógica para que el callback se encargue de realizar una operación matemática con esos dos números.
Asegúrate de que tu función principal sea capaz de manejar sumas, restas, multiplicaciones y divisiones dependiendo del callback que se le pase al invocar.
Muestra el resultado final en la consola.
 */





function funcionprincipal(numero1,numero2, callback){
    return callback(numero1,numero2);


}

function sumar(num1, num2){
    return num1+num2;

}

function restar(num1, num2){
    return num1-num2;

}
function multiplicar(num1, num2){
    return num1*num2;

}

function dividir(num1, num2){
        return num1/num2;


}


console.log("Suma")
console.log("La suma es", funcionprincipal(2,2,sumar))


console.log("Resta")
console.log("La resta es", funcionprincipal(10,5,restar))


console.log("Multiplicacion")
console.log("La Multiplicacion es", funcionprincipal(3,9,multiplicar))


console.log("Division")
console.log("La Division es", funcionprincipal(125,5,dividir))
