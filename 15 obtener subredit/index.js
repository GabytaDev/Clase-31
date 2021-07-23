// Reddit es una red de comunidades en la que cada comunidad se conocer como subreddit. Definí una función 
// obtenerSubreddit que reciba como argumento un string url que consista en la url de un subreddit 
// (p. ej. 'https://www.reddit.com/r/dankmemes/') y devuelva el subreddit (p. ej. 'dankmemes')

//  obtenerSubreddit('https://www.reddit.com/r/javascript/')
// 'javascript' 
//  obtenerSubreddit('https://www.reddit.com/r/aww/')
// 'aww' 

const obtenerSubreddit= (url)=>{
    let palabras = url.split("/") //guardo en palabras un array sin las barras
    return palabras[palabras.length - 2] //retorno la posicion del array -2

}

console.log(obtenerSubreddit('https://www.reddit.com/r/javascript/'));
console.log(obtenerSubreddit('https://www.reddit.com/r/aww/'));

