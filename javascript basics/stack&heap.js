// stack (Primitive) , Heap (Non-Primitive)

let myEmail = "example@kads.in"
let anotherEmail = myEmail

anotherEmail = "koushik chowdhury"

console.log(myEmail);
console.log(anotherEmail);

let userOne = {
    fname : "Koushik Chowdhury",
    website : "kad's.in"
}
let userTwo = userOne

userTwo.website = "kads.in"

console.log("--------------------");
console.log(userTwo);