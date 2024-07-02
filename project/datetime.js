// // let date = new Date(2024, 1, 48)
// // console.log(date.toDateString())

// // Dates

// let myDate = new Date()
// console.log(`toString(): ${myDate.toString()}`)
// console.log(`toLocaleDateString(): ${myDate.toLocaleDateString()}`)
// console.log(`toLocaleString(): ${myDate.toLocaleString()}`)
// console.log(`getMonth(): ${myDate.getMonth()}`)

// let year = 2023
// let month = 0
// let day = 23

// let myCreatedDate = new Date(year,month,day)

// console.log(`My created date is: ${myCreatedDate.toDateString()}`);

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// // console.log(`toLocaleString(): ${myDate.toLocaleString('default',{
// //     timeStyle: 'long',
// //     weekday: 'short'
// // })}`)

let myDate = new Date() // 
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());

console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.getFullYear());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getHours());
console.log(myDate.getTime());


// myDate.toLocaleString('default', {
//     weekday: "narrow",
// }) 



// simle age calculater 
let ageDate = new Date() // 

let birthYear = 2021
let birthMonth = 4 // month start from 0, means 0 - jan
let birthDay = 16
const birthDate = new Date(birthYear, birthMonth - 1, birthDay)
console.log(birthDate.toDateString());
const ageTime =  ageDate - birthDate;
console.log(ageTime);

let age = (ageTime / 8.64e+7) // converting into days
age = new String(age)
age = age.split(".")
let totalDays = Number(age[0])
totalDays
const year = Math.trunc(totalDays / 365)
let month = Math.trunc((totalDays % 365) / 31)
let day = Math.trunc((totalDays % 365) % 30)
console.log(`Your age is ${year} year ${month} month`)
console.log(`Your age in Days is ${totalDays}`);


// end


