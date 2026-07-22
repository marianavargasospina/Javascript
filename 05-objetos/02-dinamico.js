const user = { id:1, name: "Mariana", email: "user@example.com" };

user.name = "Nicolas";
user.guardar = function() {
    console.log("Guardando usuario...");
}

user.guardar();

delete user.name 