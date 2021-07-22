// Definí una función obtenerExtension que tome por parámetro un string archivo con el formato 
// 'nombre.extension' y devuelva la extensión del archivo

//  obtenerExtension('imagen.png')
// 'png'
//  obtenerExtension()
// 'html'
//  obtenerExtension('notas.txt')
// 'txt'

const obtenerExtension = (archivo)=>{
    const posicionPunto = archivo.indexOf(".")
    const extension = archivo.slice(posicionPunto + 1)

    return extension


}


console.log(obtenerExtension('imagen.png'));
console.log(obtenerExtension('archivo.html'));
console.log(obtenerExtension('notas.txt'));






