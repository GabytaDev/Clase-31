// Definí una función tienenMismaLongitud que reciba como argumentos dos strings a y b y 
// devuelva si tienen la misma longitud.

//  tienenMismaLongitud('javascript', 'java')
// false
//  tienenMismaLongitud('manzana', 'cerveza')
// true

const tienenMismaLongitud = (a,b) =>{
    return a.length === b.length
  
}

tienenMismaLongitud('javascript', 'java');