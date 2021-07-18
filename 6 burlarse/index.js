// Definí una función burlarse que reciba como argumento un string str y devuelva 
// el mismo string con todas las vocales reemplazadas por la letra i

//  burlarse('programar es dificil')
// 'prigimir is dificil'
const str = "programar es dificil";

const burlarse = (str) =>{
   
  return str.replace(/[aeiou]/gi,"i") 
  
   

}
 
burlarse("programar es dificil");

console.log (burlarse("programar es dificil"));