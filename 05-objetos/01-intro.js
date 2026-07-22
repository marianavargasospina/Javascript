let email = "user@example.com";
let name = "Mariana";
let direccion = {
    calle: "Calle Falsa 123", 
    numero: 456,
};

let user = {
    email: "user@example.com",
    name: "Mariana",
    direccion: {
        calle: "Calle Falsa 123",
        numero: 456
    }, 
    activo: true, 
    recuperarContrasena: function() {
        console.log("Recuperando contraseña...");
    }
};