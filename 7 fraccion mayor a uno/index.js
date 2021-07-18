// Definí una función esFraccionMayorAUno que tome por parámetro un string fraccion 
// (en el formato 'numerador/denominador') y nos indique si dicha fracción es mayor a 1.

//  esFraccionMayorAUno('1/2')
// false
//  esFraccionMayorAUno('2/2')
// false
//  esFraccionMayorAUno('4/2')
// true



const esFraccionMayorAUno = (fraccion) => {
    let numerador = fraccion.charAt(0)
    let denominador = fraccion.charAt(2)
    return(numerador/denominador) > 1
}

esFraccionMayorAUno('4/2');

console.log(esFraccionMayorAUno("4/2"));