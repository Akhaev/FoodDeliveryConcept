
//let a = 2

//console.log(a)

//let b

//console.log(b)

// let today = new Date()

// console.log(today)
// console.log("Дата задаётся типом Date")

// console.log(Math.PI)
// console.log("Число Пи задаётся типом Math.PI")

// const c = 17

// console.log("Uncaught TypeError: Assignment to constant variable. При попытке поменять значение const")

// let name = prompt("Имя?")    
// let address = prompt("Адрес?")
// let phone = prompt("Номер телефона?")

// console.log(`Студент: ${name}, Адрес: ${address}, Номер телефона: ${phone}`)

// let ruble = 1
// let dollar = ruble * 92.53

// iHave = prompt("Ваш баланс? (В рублях)")
// console.log("Вы можете приобрести: " + iHave / dollar + " долларов")

const number = 11

if(number < 10){
    console.log('Константа меньше 10')
}else {
    console.log('Константа не меньше 10')
}

if(4 < 2){
    console.log('First codeline')
}else if(5 < 3){
    console.log('Second codeline')
}else{
    console.log('Last codeline')
}

let loginBD = 'abc'
let passwordBD = 123

console.log('login - abc ; password - 123')

let login = prompt('Make your login')
let password = prompt('Make your password')

if(loginBD == login){
    if(passwordBD == password){
        console.log('Welcome')
    }else{
        console.log('Password Error')
    } 
}else{
    console.log('Login Error')
}

let key = 'true'

switch (key) {
    case 'false':
        console.log('false')
        break;
    case 'true':
        console.log('true')
        break;

    default:
        console.log('undefined')
        break;
}

let a = 3 < 2 ? 'yes' : 'no'

console.log(a)
console.log('3 Задание ╥')

let x = 10
let y = 7

if(x > y){
    console.log('x больше, чем y')
}else{
    console.log('x не больше, чем y')
}

let num = prompt('Введите число:')

if(num%2===0){
    console.log(`Число ${num} чётное`)
}else{
    console.log(`Число ${num} не чётное`)
}

let num1 = prompt('Введите первое число')
let num2 = prompt('Введите второе число')
let num3 = prompt('Введите третье число')

if(num1 > num2 && num1 > num3){
    console.log(`${num1} наибольшее число`)
}else if(num2 > num1 && num2 > num3){
    console.log(`${num2} наибольшее число`)
}else if(num3 > num1 && num3 > num2){
    console.log(`${num3} наибольшее число`)
}
