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
// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser["name"]);

// console.log(jsUser[symbol]);

jsUser.greeting = function(){
    // console.log("Greetings to all");
}
// console.log(`without method ${jsUser.greeting}`)
// console.log(`with method ${jsUser.greeting()}`)


// ++++++++++++++++++++++ part2 +++++++++++++++++++++++++++++

// const tinderUser = new Object() // singletone object

const tinderUser = {} 
tinderUser.id = "123"
tinderUser.name = "Koushik"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const regularUser = {
    email: "google@gmail.com",
    fullName: {
        userFullName: {
            firstName: "koushik",
            lastName: "Chowdhury"
        }
    }
}

// console.log(regularUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} // wrong approch
// const obj3 = Object.assign({}, obj1, obj2) // right approch
const obj3 = {...obj1, ...obj2} // fastest way to merge object

// console.log(obj3);

