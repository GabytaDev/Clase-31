// Definí una función removerVocales que reciba como argumento un string str y devuelva un 
// string con todas sus vocales removidas

//  removerVocales('javascript')
// 'jvscrpt'
//  removerVocales('ada lovelace')
// 'd lvlc'



const removerVocales = (str) => {
    return str.replace(/a|e|i|o|u/gi, "")
}

console.log(removerVocales('ada lovelace'));