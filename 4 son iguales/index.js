// Definí una función sonIguales que reciba como argumentos dos strings a y b y 
// retorne si ambos strings tienen el mismo contenido independientes del caso.

//  sonIguales('javascript', 'JavaScript')
// true
//  sonIguales('AdA LoVeLaCe', 'Ada Lovelace')
// true
//  sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO')
// false

const sonIguales = (a, b)=> {
    if (a.toUpperCase ()=== b.toUpperCase()){
        return true
    }
    else{
        return false
    }   
    
}

console.log (sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO'));



