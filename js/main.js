
// let name = 'Albert' // string

// const age = 18 // number

// if(age < 15){
//     console.log('доступ запрещен')
// }else{
//     console.log(`Привет ${name}`)
// }

// function viewMoney(){
//     console.log('Вот вам 10$')
// }

// viewMoney()

// function getMoney(cash){
//     return (`Вот вам ${cash}$`)
// }

// function squareNumber(x){
//     console.log(x * x)
// }

// squareNumber(9)

// function maxNumber(){
//     console.log(Math.max.apply(null, arguments))
// }

// maxNumber(2, 12, 10, 100)

// function discriminant(a, b, c) {
//     console.log((b*b)-4*a*c)    
// }

// discriminant(2, 5, 3)

// function math(a, b) {
//     if(a % 2 == 0 && b % 2 == 0) {
//         console.log(a * b)
//     }else if(a % 2 > 0 && b % 2 > 0) {
//         console.log(a + b)
//     }else if(a % 2 > 0 && b % 2 == 0) {
//         console.log(a)
//     }else {
//         console.log(b)
//     }
// }

// math(2, 9)

let man = {
    name: 'Albert',
    surname: 'Akhaev',
    age: 18,
    tall: 187,
    login: 'userLogin',
    password: 'userPassword',
    balance: 1200000
}

man.address = 'Argun'

console.dir(man)

let text = 'Password'

if(text == man.password){
    console.log(`Добро пожаловать, ${man.name} ${man.surname}, Ваш логин: ${man.login}`)
}else{
    console.log(`Указанный пароль: ${text} – не верен. Попробуйте еще раз.`)
}

let num = 0
while(num < 3){
    console.log(`4ucno: ${num}`)
    num++
}

for(let i = 1; i <= 10; i++){
    console.log(i)
}