// console.log("k");
// console.log("o");
// console.log("u");
// console.log("s");
// console.log("h");
// console.log("i");
// console.log("k");

function myName() {
  console.log("k");
  console.log("o");
  console.log("u");
  console.log("s");
  console.log("h");
  console.log("i");
  console.log("k");
}

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }
// sum(10, 20)

function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}
const res = sum(2, 8);
// console.log(res);

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  } else {
    return `${username} just logged in`;
  }
}
// console.log(loginUserMessage());

function addToCart(...num1){
    return num1;
}
// console.log(addToCart(100, 500, 700));

const user = {
    username: "koushik",
    price: 599
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

const myArray = [2, 4, 5]

function returnArray(getArray){
    return getArray;
}

console.log(returnArray(myArray));


// error{
// const u1 = {
//     price: 540
// }
// const u2 = {
//     price: 999
// }
// function test(object){
//     console.log(`u1 price ${all.price}`);
// }
// test(u1,u2) }