// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
console.log("TODO 1:")



function mostrarTareas(lista) {
  for (const list of lista){
    let estado;
    if (list.completada) {
      estado = "Completada";
    } else {
    estado = "Pendiente";
    }
    console.log(`Tarea: ${list.nombre} - Estado: ${estado}`);
    
  }
}
 mostrarTareas(tareas);






/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
console.log("TODO 2:")

const obtenerCompletadas = (lista) => {
    const completadas = lista.filter(completa => completa.completada);


  for(const completa of completadas){
   
      console.log(`Tarea: ${completa.nombre} - Estado: ${completa.completada}`);
  }
};

obtenerCompletadas(tareas);




/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
console.log("TODO 3:")

const obtenerPendientes = (lista) => {
  const completadas = lista.filter(completa => !completa.completada);


  for(const completa of completadas){
   
      console.log(`Tarea: ${completa.nombre} - Estado: ${completa.completada}`);
  }
};



obtenerPendientes(tareas);
/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/

console.log("TODO 4:")

const obtenerNombres = (lista) => {
   return lista.map(tarea => tarea.nombre);
};
 

const nombres = obtenerNombres(tareas);
console.log(nombres);

/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
console.log("TODO 5:")

function contarTareas(lista) {
 return lista.length;

}
const totaltareas = contarTareas(tareas);
console.log("Hay ", totaltareas, " tareas");

// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/
console.log("TODO 6:")

const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    mostrarTareas(this.tareas);
  },

  mostrarCompletadas: function() {
    obtenerCompletadas(this.tareas)
  },

  mostrarPendientes: function() {
    obtenerPendientes(this.tareas)
  }
};

sistema.mostrarTareas();
sistema.mostrarCompletadas();
sistema.mostrarPendientes();

// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/
console.log("TODO 7:")


if (tareas.length === 0) {
  console.log("No hay tareas")
}else {
 for(const list of tareas){
    if(!list.completada){
      console.log("Hay tareas pedientes")
    }else{
      console.log("Todas las tareas completadas")
    }

 }



}


// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/
console.log("TODO 8:")

const opcion = 3;

switch (opcion) {
  case 1:
    console.log("Opcion 1")
    mostrarTareas(tareas)
    break;

  case 2:
    console.log("Opcion 2")
    obtenerCompletadas(tareas)
    break;

  case 3:
    console.log("Opcion 3")
    obtenerPendientes(tareas)
    break;

  default:
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/
console.log("TODO 9:")
