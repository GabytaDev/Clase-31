// Definí una función contarPalabras que reciba como argumento un string str y devuelva 
// la cantidad de palabras que posee

//  contarPalabras('javascript')
// 1
//  contarPalabras('ada lovelace')
// 2
//  contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos')
// 14


const contarPalabras = (str)=>{

    let palabras = str.split(" ")
   
   return palabras.length 
   
   }
   console.log (contarPalabras('ada lovelace'));
   console.log (contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos'));