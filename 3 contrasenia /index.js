// Definí una función esValida que tome por parámetro una contrasenia (string) y nos indique 
// si tiene 8 caracteres o más. 
// javascript  esValida('contraseniaMuySegura') true  esValida('abc123') false

const esValida = (contrasenia)=>{
  
    return contrasenia.length >= 8
}

esValida('contraseniaMuySegura');

console.log(esValida('abc123')); //false