/**Indicaciones

Implementa una función llamada prepareSongs.
Recibe como parámetro un arreglo de números enteros.
Elimina los elementos duplicados.
Ordena el arreglo en orden ascendente.
Retorna el nuevo arreglo resultante.
Considera el caso de un arreglo vacío.

Importante

No está permitido el uso de inteligencia artificial para resolver la actividad.
Agrega comentarios claros en tu código explicando tu razonamiento y las decisiones que tomaste.

RETO

Es viernes y un grupo de ingenieros en software decide cerrar la semana con una noche de karaoke .
Para armar la lista, cada quien anota el número de catálogo de la canción que piensa cantar. 

El problema es el de siempre: tres personas anotaron la misma canción sin darse cuenta, y nadie respetó el orden. 
Si dejan la lista así, alguien va a cantar lo mismo dos veces y el encargado del equipo no sabrá qué poner primero. 
Antes de empezar hay que depurar la lista: quitar las canciones repetidas y acomodarlas por número de catálogo, de menor a mayor.

Tu tarea es escribir una función que reciba una lista de números enteros 
(que representan las canciones) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.
 */

const songs1 = [3, 1, 2, 3, 4, 2, 5]
const playlist1 = prepareSongs(songs1)
console.log(playlist1) // [1, 2, 3, 4, 5]

const songs2 = [6, 5, 5, 5, 5]
const playlist2 = prepareSongs(songs2)
console.log(playlist2) // [5, 6]

const songs3 = []
const playlist3 = prepareSongs(songs3)
console.log(playlist3) // []
// Nadie anotó nada, la lista queda vacía

 function prepareSongs(arreglo){
    const numero = []; //arreglo para numero unicos
    for(const n of arreglo) //for que recorra el parametro
        if(!numero.includes(n)){ //Si no existe n en el arreglo agregarlo
            numero.push(n)

        }
        numero.sort((a, b) => a - b); //un sort que determina cual es menor o mayor y lo ordena de forma ascendete(aqui busque en google como acomodarlo ya que sin "(a, b) => a - b" solo funciona con strings)

        return numero;

 }
