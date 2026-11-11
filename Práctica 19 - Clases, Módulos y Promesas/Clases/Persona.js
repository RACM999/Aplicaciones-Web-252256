export default class Persona{
    constructor(nombre = "", edad = 0){
        this.nombre = nombre;
        this.edad= edad;
        this.id= this.#generarId();


    }

    //Metodo Privado
    #generarId(){
        return Math.floor(Math.random() * 1000);


    }

    saludar(){
        return `Hola soy ${this.nombre} y tengo ${this.edad} años`;


    }

}