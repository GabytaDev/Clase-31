// Definí una función obtenerPrimeraOracion que tome por parámetro un string str y devuelva la primera 
// oración de dicho string

//  obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración')
// 'A mí no me preguntes, sólo soy una oración'
//  obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.')
// 'Tengo varias oraciones.'

const obtenerPrimeraOracion =(str) =>{

   let puntoFinal = str.indexOf(".") //guardo en puntoFinal la busqueda del "."

   if (str.includes(".")){ //si el str incluye ".", retornar el str cortando desde el 0 hasta el puntofinal
    return str.slice(0,puntoFinal)
   }else{ //de lo contrario retorna el string
     return str
   }
    
}

obtenerPrimeraOracion ('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.');

