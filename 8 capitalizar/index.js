// Definí una función capitalizar que reciba como argumento un string str y devuelva 
// el mismo string con la primera letra en mayúscula

//  capitalizar('lovelace')
// 'Lovelace'
//  capitalizar('había una vez...')
// 'Había una vez...'

const capitalizar= (str) =>{
  
    let primerLetra = str.charAt(0).toUpperCase()
    let restoNombre = str.slice(1).toLowerCase()
    let nombreCompleto = primerLetra + restoNombre
    
    return nombreCompleto
}

console.log (capitalizar('lovelace'));