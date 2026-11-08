function cortarIngredientes(ingredientes, callback){
    setTimeout(()=>{
        console.log(`Cortando ${ingredientes}`);
        callback();



    }, 2000)


}


function concinar(accion, callback){
    setTimeout(()=>{
        console.log(`Cocinando ${accion}`);
        callback();



    }, 2500)


}

function servirPlato(plato){
    console.log("Listo para servir", plato)


}



function prepararReceta(plato, callback){
    console.log("iniciamos la preparacion de la receta", plato)

    cortarIngredientes("vegetales", ()=>{
        concinar("Saltear", ()=> {
            cortarIngredientes("Pollo", ()=>{
                concinar("Freir", ()=>{
                    concinar("Mezclar", ()=>{
                        servirPlato(plato);
                        callback();

                    })

                })


            })

        })
    })

}

prepararReceta("Pollo al wok", ()=>{console.log("Receta completa")})