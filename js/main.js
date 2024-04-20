
// let man = {
//     name: 'Albert',
//     surname: 'Akhaev',
//     age: 18,
//     tall: 187,
//     login: 'userLogin',
//     password: 'userPassword',
//     balance: 1200000
// }

// man.address = 'Argun'

// console.dir(man)

// let text = 'Password'

// if(text == man.password){
//     console.log(`Добро пожаловать, ${man.name} ${man.surname}, Ваш логин: ${man.login}`)
// }else{
//     console.log(`Указанный пароль: ${text} – не верен. Попробуйте еще раз.`)
// }

// let num = 0
// while(num < 3){
//     console.log(`4ucno: ${num}`)
//     num++
// }

// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

let a = ['lorem', 123, true, 'ipsum']

console.log(a.length)

console.log(a[0])
console.log(a[a.length - 1])

let em = [undefined]

em.unshift(123, 'text')
em.push(true, 'end')
console.log(em);

em.unshift('1 element', '2 element', '3 element')
console.log(em);

em.shift()
em.pop()
em.pop()
console.log(em);

let number = [1, 3, 5, 7, 9]

let newArr = number.map(element => {
    return element + 1;
}); 
console.log(newArr)

delete number[2]
console.log(number);

number[2] = 'text'
console.log(number);