// Definí una función aHackerSpeak que reciba como argumento un string str y 
// el mismo string convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:

// - Las i se transforman en 1
// - Las e se transforman en 3
// - Las a se transforman en 4
// - Las s se transforman en 5
// - Las o se transforman en 0
//  aHackerSpeak('javascript')
// 'j4v45cr1pt'
//  aHackerSpeak('soy una hacker')
// '50y un4 h4ck3r'
//  aHackerSpeak('ADA LOVELACE')
// '4D4 L0V3L4C3'

const aHackerSpeak = (str) =>{
 
    const conversion1 = str.replace(/[i]/gi,"1") //el str lo guardo en conversion1 con el reemplazo
    const conversion2 = conversion1.replace(/[e]/gi,"3") // a conversion 1 , le paso nuevos reemplzos y lo guardo en conversion2
    const conversion3 = conversion2.replace(/[a]/gi,"4")
    const conversion4 = conversion3.replace(/[s]/gi,"5")
    const conversion5 = conversion4.replace(/[o]/gi,"0")

   return conversion5 //retorna la ultima conversion con todos los reemplazos
   
}
  
aHackerSpeak('javascript');

console.log (aHackerSpeak('javascript'));

console.log (aHackerSpeak('soy una hacker'));

console.log ( aHackerSpeak('ADA LOVELACE'));

