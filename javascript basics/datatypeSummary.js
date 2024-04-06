// Primitive 
// 7  types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(id);

const bigNumber = 3456543576654356754n
console.log(typeof bigNumber);

// Reference (Non Primitive)
// Array, Objects, Functions

// https://262.ecma-international.org/5.1/#sec-11.4.3