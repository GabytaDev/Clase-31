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
  
    str.replace(/[i]/gi,"1")
    str.replace(/[e]/gi,"3")
    str.replace(/[a]/gi,"4")
    str.replace(/[s]/gi,"5")
    str.replace(/[o]/gi,"0")
  
    return str.replace ("javscript")
    
}
aHackerSpeak('javascript');

console.log (aHackerSpeak("javascript"));  