import Persona from "./Persona.js";

export default class Estudiante extends Persona{
    constructor(){
        super();
        this.carrera = "";


    }

    estudiar(){
        return `${this.nombre} esta estudiando ${this.carrera}`

    }


    #calcularPromedio(){
        return 65;


    }

    verPromedio(){
        return `Promedio: ${this.#calcularPromedio}`

    }



}