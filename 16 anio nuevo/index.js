// Definí una función esAnioNuevo que reciba como argumento un string fecha con el formato DD:MM:YYYY 
// un argumento y nos indique si la fecha es año nuevo.

//  esAnioNuevo('03/05/2015')
// false
//  esAnioNuevo('22/01/1987')
// false
//  esAnioNuevo('01/01/2020')
// true

const esAnioNuevo = (argumento)=>{
    let fecha = argumento.split("/") //es un array

    return (fecha[0] === "01" && fecha [1] === "01") //retorna haciendo la cuenta directamente
    

}
console.log(esAnioNuevo('03/05/2015'))
console.log(esAnioNuevo('22/01/1987'))
console.log(esAnioNuevo('01/01/2020'))
