// Definí una función esElUltimoCaracter que reciba como argumentos una palabra y un 
// caracter y nos indique si la palabra termina con el caracter.

//  igualLongitud('lovelace', 'e')
// true
//  igualLongitud('lovelace', 'f')
// false




const esElUltimoCaracter = (palabra,caracter) =>{

    const longitudPalabra = palabra.length -1; 
     
    const ultimoCaracter = palabra.charAt(longitudPalabra);
     
    if (ultimoCaracter === caracter){
       return true 
       
    }
    else{
       return false
    }
}

esElUltimoCaracter ('lovelace', 'e');

console.log(esElUltimoCaracter('lovelace', 'f'));
