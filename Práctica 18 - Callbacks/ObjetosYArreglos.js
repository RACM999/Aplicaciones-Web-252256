let numeros = [1,2,3,4,5];

let dobles = numeros.map(num => `<p>Numero: ${num} </p>`);
console.log(numeros);
console.log(dobles);

const html = dobles.join("");

console.log(html)


const edad = 18

function puerta (edad = 0){
if(edad >= 18 && edad <= 45 ){
    console.log("Puedes pasar")
    return;


}else if(edad >= 18 && edad > 45){
    console.log("Vayase a dormir viejo")
    return;

}


else{

    console.log("No puedes pasar")

}
}


const dia=3;


switch(dia){
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    default:
        console.log("Es otro dia")
       

}







const alumno = {
    nombre: "Roberto",
    edad: 21,
    hobbies: ["Comer", "Jugar Lol", "Flojear"],
    direccion: {
        calle: "hola",
        numeros: 1234
    },


    saludar: function(){
        return `Hola soy ${this.nombre} y tengo ${edad} años....`


    }

}


console.log(alumno)
alumno.edad= 22;
console.log(alumno)

//error:
//alumno=100;
//console.log(alumno)
  


//for in -- recorre las llaves de un objeto
for (const llave in alumno){
    console.log(`${llave} = ${alumno[llave]}`)


}




//for of -- recorre los valores de un arreglo o algo iterable
for (const hobbie of alumno.hobbies){
    console.log(hobbie)

}



