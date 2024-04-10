const marvelHeros = ["Ironman", "Thor", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

// marvelHeros.push(dcHeros) // it will add dcHeros as an array element
console.log(marvelHeros);
console.log(dcHeros)
console.log(marvelHeros[3]);

console.log("--------Concat Method--------");

const concatArray = marvelHeros.concat(dcHeros)
console.log(concatArray);

console.log("--------Spread Method--------");

const SpreadArray = [...marvelHeros, ...dcHeros]
console.log(SpreadArray);

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));