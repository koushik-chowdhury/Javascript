const num1 = 3;
function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 300, 400));

const user = {
  username: "koushik",
  price: 199,
};
function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

handleObject(user);

console.log(`------------this and arrow function--------------`);

const users = {
  username: "koushik",
  price: 999,
  welcomeMessage: function () {
    // console.log(`${this.username}, welcome to website`)
    console.log(this);
  },
};
users.welcomeMessage();
users.username = "Simran";
users.welcomeMessage();

const addTwo = (num1, num2) => num1 + num2;

console.log(addTwo(2, 4));

const myArray = [1, 2, 3, 4, 5];

myArray.forEach((myArray) => (console.log(myArray)) )