// let date = new Date(2024, 1, 48)
// console.log(date.toDateString())

// Dates

let myDate = new Date()
console.log(`toString(): ${myDate.toString()}`)
console.log(`toLocaleDateString(): ${myDate.toLocaleDateString()}`)
console.log(`toLocaleString(): ${myDate.toLocaleString()}`)
console.log(`getMonth(): ${myDate.getMonth()}`)

let year = 2023
let month = 0
let day = 23

let myCreatedDate = new Date(year,month,day)

console.log(`My created date is: ${myCreatedDate.toDateString()}`);

let myTimeStamp = Date.now()
console.log(myTimeStamp);

// console.log(`toLocaleString(): ${myDate.toLocaleString('default',{
//     timeStyle: 'long',
//     weekday: 'short'
// })}`)
