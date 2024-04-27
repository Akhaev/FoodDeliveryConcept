
// arr1 = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]

// arr1.forEach(element => {   
//     if(element % 2 != 0){
//         console.log(element);
//     }
// });


// arr2 = [ 'lorem ipsum', 'javascript', 'php', 'css', 'react', 'git', 'html', 'mysql']

// arr2.forEach(element => {
//     if (element.length <= 4) {
//         console.log(element);
//     }
// })


// arr3 = [1, -3, 5, 6, -7, 8, 9, -11]

// let newArr = arr3.filter(element => {
//     if (element < 0) {
//         return element         
//     }
// })

// console.log(newArr);


// let arr4 = arr1.filter(element => {
//     if (element % 2 == 0) {
//         return element
//     }
// })

// console.log(arr4);


// let arr5 = arr2.filter(element => {
//     if (element.length != 3) {
//         return element
//     }
// })

// console.log(arr5);


// arr6 =  [5, 6, 7, 8, 9]

// let numSqr = arr6.map(element => {
//     return element ** 2
// })

// console.log(numSqr);


// arr7 = [{a: 10, b: 5}, {a: 20, b: 22}, {a: 131, b:55}]

// arrSum = arr7.map((object) => {
//     return object.a + object.b
// })

// console.log(arrSum);


// arr8 = [-13, 0, 12, 1662, -0.32, -102, -2]

// let negativNum = arr8.filter(element => {
//     if (element < 0) {
//         return element
//     }
// })

// let negativNumSum = negativNum.reduce((sum, current) => {
//     return sum + current;
// })

// console.log(negativNumSum);


// arr9 = [{x: 10, y: 'lorem'}, {x: 21, y: 'lorem'}, {x: -17, y: 'lorem'}, {x: 156, y: 'lorem'}]

// let xSum = arr9.reduce((sum, current) => {
//     return sum + current.x 
// }, 0)

// console.log(xSum);


arr_1= [101, 202, 303, 404, 505]

arr_2 = [606, 707, 808, 909]

superArr = [...arr_1, ...arr_2]
console.log(superArr);

console.log(Math.min(...superArr))

let obj = {
    width: 300,
    height: 550
}

let newObj = {
    ...obj,
}

newObj.area = function() {
    return newObj.width * newObj.height
}

console.log(newObj.area());

let numSum = function(...args) {
    return args.reduce((sum, current) => {
        return sum + current
    }, 0)    
}

console.log(numSum(12, 2, 41, 421));   