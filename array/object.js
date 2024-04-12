// singleton
// Object.create()

// object literals

const symbol = Symbol("Surname")

const jsUser = {
    name: "Koushik",
    [symbol]: "Chowdhury",
    age: 21,
    loginDays: ["Mon", "Sat", "Sun"]
}
console.log(jsUser);
console.log(jsUser.name);
console.log(jsUser["name"]);

console.log(jsUser[symbol]);

