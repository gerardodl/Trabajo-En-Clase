//Utilizamos var para declarar una variable como en este caso lo seria nombre, apellido, edad, ingeniero, cocinero, cantante, dj, guitarrista y drone. 
//En este caso despues de var se encuentra el nombre de un objeto llamado sacha el cual guardara todas sus variables.
var sacha = { 
    nombre: 'sacha',
    apellido: "smith",
    edad: 17,
    ingeniero: true,
    cocinero: true,
    dj: true,
    guitarrista: true,
    drone: true

}

//Utilizamos const para crear una constante que en este caso es 17
const MAYORIA_DE_EDAD = 17;

//function esMayordeEdad(persona) {
//return persona.edad > MAYORIA_DE_EDAD;
//}

//funcion anonima
//const esMayordeEdad = function (persona) {
//    return persona.edad > MAYORIA_DE_EDAD; 
//}
//funcion Arrow
const esMayordeEdad = persona => persona.edad > MAYORIA_DE_EDAD;

// const esMayordeEdad2 = ({ edad }) => edad > MAYORIA_DE_EDAD;
//if (esMayordeEdad(persona)){
function imprimirSiesMayordeEdad(persona) {
    if (esMayordeEdad(sacha)){
    console.log(`${persona.nombre} es mayor de edad`);
    } else {
    console.log(`${persona.nombre} es menor de edad`);
   }
  }

//Creamos una funcion que nos de acceso segun nuestra edad
function permitiracceso(persona){
    if (!esMayordeEdad(persona)) {
        console.log(`Acceso Denegado`);
    }
}

//Elaboramos una funcion arrow para indicar si el objeto es mayor de edad
const esMayorDeEdad= persona => persona.edad > MAYORIA_DE_EDAD;
