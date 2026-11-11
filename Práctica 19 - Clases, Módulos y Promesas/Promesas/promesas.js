function obtenerDatosDelServidor(){
    return new Promise((resolve, reject) => {
    setTimeout(()=> {
        let usuario= {
            nombre: "Roberto",
            edad: 21



        }
        if(usuario){
            resolve(usuario)

        }else{
            reject("Ocurrio un error al obtener los datos")
        }

    }, 2000)

})


}


obtenerDatosDelServidor().then((resultado)=>{
    return resultado.nombre.toUpperCase();
}).then(nombreMayuscula=>{
    console.log(nombreMayuscula)

})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Fin del programa")
})

/**fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>{
    return response.json();
}).then(json=>{
    console.log("Lista de posts: ", json)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log("Termine")

})
*/


async function obtenerPosts() {
    try{
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    console,log(response);
    } catch(err){
        console.log(err);
    } finally{
        
    }
}


obtenerPosts();