// Definí una función esPuenteSeguro que tome por parámetro un string que represente a un puente que 
// consista en caracteres numerales y espacios y nos indique si el puente está entero y es seguro atravesar

//  esPuenteSeguro('### ##')
// false
//  esPuenteSeguro('##### ####')
// false
//  esPuenteSeguro('########')
// true

const esPuenteSeguro = (puente)=>{
    // if(puente.includes(" ")){
    //     return false
    // }else{
    //     return true
    // }

    return !puente.includes(" ")

}

console.log(esPuenteSeguro('########'));