let user ={
    id: 1,              
}

function crearUsuario(id, name, email) {
    return {
        id: id,
        name: name,
        email: email
    };
}

let user1 = crearUsuario(1, "Mariana", "user@example.com"); 
console.log(user1);