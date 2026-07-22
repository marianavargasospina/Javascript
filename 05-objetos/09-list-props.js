const punto = {
    x: 1,
    y: 2,
    dibujar(){
        console.log('dibujar');
    }
}

//delete punto.dibujar;
if ("dibujar" in punto){
    punto.dibujar();
}

console.log(Object.keys(punto));