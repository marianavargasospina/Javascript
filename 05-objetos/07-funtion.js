function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log('dibujar');}
}     

let punto = {z: 7};
Punto.call(punto, 1, 2);

console.log(punto);

//const Point = new Function ('x', 'y', `
//    this.x = x;
//    this.y = y;
//    this.dibujar = function() { console.log('dibujar');}
//}`);

//const p1 = new Punto(1, 2);
//conole.log(p1);