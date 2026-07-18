//persona

let nombre = "Mariana";
let edad = 21;

let persona = {
    nombre: "Mariana",
    edad: 21,
};
console.log(persona);
console.log(persona.nombre);
console.log(persona["edad"]);

delete persona.edad;
console.log(persona);