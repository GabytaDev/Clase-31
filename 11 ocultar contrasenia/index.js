// Definí una función ocultarContrasenia que reciba como argumento una contrasenia de solo numeros
//  y devuelva un string con dicha contraseña ocultada con astericos *, es decir, un string con la misma 
//  longitud donde todos sus caracteres son astericos

//  ocultarContrasenia(123456)
// '******'
//  ocultarContrasenia(111222333)
// '*********'

const ocultarContrasenia = (contrasenia)=>{
    let largoContrasenia = contrasenia.toString().length
    let ocultado = "*"
    let resultado = ocultado.repeat(largoContrasenia)
    return resultado
    
}

console.log(ocultarContrasenia(123456));

