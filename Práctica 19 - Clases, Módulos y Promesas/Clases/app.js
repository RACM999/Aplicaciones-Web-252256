import { saludar, PI, config } from "./saludo.mjs";


console.log(saludar("Roberto"));
console.log("Este es PI: ", PI);
console.log(config.url_api);


import Estudiante from "./Estudiante.js";
import Persona from "./Persona.js";

let estudiante = new Estudiante();


estudiante.nombre= "Roberto";
estudiante.edad= 21;
estudiante.carrera= "ISW";

console.log(estudiante.saludar())
console.log(estudiante.estudiar())
console.log(estudiante.verPromedio())


let persona = new Persona("Roberto", 21);

console.log(persona.saludar())