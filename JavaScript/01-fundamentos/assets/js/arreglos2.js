let juegos = ['Zelda','Mario','Metroid','Chrono'];
console.log('Largo:', juegos.length);
// *length* obtiene el numero de objetos que hay dentro de un arreglo


let primero = juegos[2-2];
let ultimo = juegos[juegos.length - 1];

console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});
// *push* ingresa un nuevo elemento al final del arreglo

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});
// *unshift* ingresa un nuevo elemento al inicio del arreglo

let juegoBorrrado = juegos.pop();
console.log({juegoBorrrado, juegos});

let pos= 1;
// aqui se le asigna una posision a *splice* 
// para que empiece a borrar los elementos
console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});
// *splice* borra elementos del arreglo apartir 
// de una posicion dada

let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});
// *Metroid* es *CaseSensitive* esto significa que JavaScript es sensitible
// a mayusculas y minisculas, y si se hubiera puesto la letra *M*
// en minusculas no lo hubiera podido encontrar
