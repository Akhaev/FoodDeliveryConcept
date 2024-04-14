
// function fn(x) {
//     if(x < 10){
//         console.log('константа меньше 10')
//     }else{
//         console.log('константа не меньше 10')
//     }
// }

// fn(11)

// let HelloWrld = function(){
//     alert('Привет, Мир')
// }

// HelloWrld()

// let js = () => console.log('JavaScript')

// js()

// const text = 'lorem text'
// const lorem = 'lorem'

// function txt(txxt) {
//     if(text.includes(lorem)){
//         console.log('У вас ошибка в тексте')
//     }else{
//         console.log('Содержимое переменной: ' + txxt)
//     }
// }

// txt(text)

let name = 'Albert' // string

const age = 18 // number

if(age < 15){
    console.log('доступ запрещен')
}else{
    console.log(`Привет ${name}`)
}

function viewMoney(){
    console.log('Вот вам 10$')
}

viewMoney()

function getMoney(cash){
    return (`Вот вам ${cash}$`)
}

function squareNumber(x){
    console.log(x * x)
}

squareNumber(9)

function maxNumber(){
    console.log(Math.max.apply(null, arguments))
}

maxNumber(2, 12, 10, 100)

function discriminant(a, b, c) {
    console.log((b*b)-4*a*c)    
}

discriminant(2, 5, 3)

function math(a, b) {
    if(a % 2 == 0 && b % 2 == 0) {
        console.log(a * b)
    }else if(a % 2 > 0 && b % 2 > 0) {
        console.log(a + b)
    }else if(a % 2 > 0 && b % 2 == 0) {
        console.log(a)
    }else {
        console.log(b)
    }
}

math(2, 9)