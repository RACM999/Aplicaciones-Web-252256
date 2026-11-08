function obtenerPost(callback){
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(r=>{
        console.log("Termine")
        callback();

    })
    

}



const ejecutarAlTerminar= () => {console.log("Finaliza el programa")}


console.log("Inicia el programa")
obtenerPost(ejecutarAlTerminar);



