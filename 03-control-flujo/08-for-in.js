let user = {
    id: 1,
    name: "Juan",
    age: 30,
    email: "juan@example.com"
};

for (let prop in user) {
    console.log(prop + ": " + user[prop]);
}

let animales = ["perro", "gato", "conejo"];
for (let index in animales) {
    console.log(index + ": " + animales[index]);
}   