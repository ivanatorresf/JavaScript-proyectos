function saludar(nombre){
    console.log(arguments);
    console.log('Hola '+ nombre);
}
const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}
// saludar('Ivan');
saludar2('ivan');

const saludarFlecha = () =>{
    console.log('Hola Flecha');
}
const saludarFlecha2 = (nombre) =>{
    console.log('Hola '+ nombre);
}
 saludar('ivan',40, true, 'Costa Rica');
 saludarFlecha();
 saludarFlecha2('Melisa');

