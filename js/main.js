
//let a = 2

//console.log(a)

//let b

//console.log(b)

let today = new Date()

console.log(today)
console.log("Дата задаётся типом Date")

console.log(Math.PI)
console.log("Число Пи задаётся типом Math.PI")

const c = 17

console.log("Uncaught TypeError: Assignment to constant variable. При попытке поменять значение const")

let name = prompt("Имя?")    
let address = prompt("Адрес?")
let phone = prompt("Номер телефона?")

console.log(`Студент: ${name}, Адрес: ${address}, Номер телефона: ${phone}`)

let ruble = 1
let dollar = ruble * 92.53

iHave = prompt("Ваш баланс? (В рублях)")
console.log("Вы можете приобрести: " + iHave / dollar + " долларов")