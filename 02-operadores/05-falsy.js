// short-circuit

// Falso 
// false
// 0
// "" (string vacía)
// null
// undefined
// NaN
let nombre = "Mariana";
let username = nombre || "Anonimo";
console.log(username);

function fn1(){
    console.log("soy funcion 1");
}

function fn2(){
    console.log("soy funcion 2");
}

let x = fn1() && fn2();s