const myArray = [1, 2, 3, 4, 5];
const myHeros = ["Iron Man", "Captain America", "Thor", "Hulk"];
const array = new Array(1, 2, 3, 4, 5);

// Array methods

myArray.push(6)
console.log(myArray);

myArray.pop()
console.log(myArray);

// includes(value), indexOf(value) , join()

// slice, splice
console.log(`----------Slice -----------`);

console.log(`A ${myArray}`);
const myn1 = myArray.slice(1, 3);
console.log(myn1);
console.log(`B ${myArray}`);

console.log(`----------Splice -----------`);

console.log(`A ${myArray}`);
const myn2 = myArray.splice(1, 3);
console.log(myn2);
console.log(`B ${myArray}`);
