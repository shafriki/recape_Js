// // function add(num1, num2) {
// //     const result = num1 + num2;
// //     console.log(num1, num2, result);
// //     return result
// // }



// // function sub(num1, num2){
// //     const result = num1 - num2;
// //     console.log(num1, num2, result);
// //     return result;
// // }



// function multiply(num1, num2){
//     const result = num1*num2;
//     console.log(num1, num2, result);
//     return result;
// }
// const subs = multiply(5, 23);

// function fullName(first, last){
//     const full = first + ' ' + last;
//     console.log(full);
//     return full;
// }

// // const name = fullName('Shafriki', 'Islam');

// // const first = 'shafriki';
// // const last = ' islam';
// // const fullName = first + ' ' + last;
// // console.log(fullName);

// function add(a, b){
//     const result =`the sum of ${a} and ${b} is ${a+b}`;
//     console.log(result);
//     return result;
// }


// function multiply(firstNum, SecondNum) {
//     const result = `the multiplication of ${firstNum} and ${SecondNum} is ${firstNum*SecondNum}`;
//     console.log(result);
//     return result;
// }
// const multiplication = multiply(4,5);

// // function decleration 
// function add1(a, b){
//     const add1 = a+b;
//     console.log(add1);
//     return a+b;
// }
// const sum = add1(1,2);

// // function expression
// const add2 = function(a, b){
//     return a+b;
// }
// const sum2 = add2(2,3);
// console.log(sum2);

// // arrow function 
// const add3 = (a, b) => a+b;
// const sum3 = add3(4,5);
// console.log(sum3);

// const multiply1 = function(a, b) {
//     return a*b;
// }
// const mul = multiply1(2, 2);
// console.log(mul);

// const mul2 = (a, b) => a*b;
// const mullu = mul2(3, 3);
// console.log(mullu);

// const getAge = person => person.age;
// const student = {
//     age: 25
// }
// const age = getAge(student);
// console.log(age);

// const getNumber = number => number[1];
// const arr = getNumber([1, 2, 3, 4]);
// console.log(arr);

// const mu = (a, b) => a*b;
// const result = mu(2, 2);
// console.log(result);

// const doubleIt = a => a*a;

// const doubleResult = doubleIt(100);
// console.log(doubleResult);

// const numbers = [1, 2, 3, 4, 5, 5];
// const numberMax = Math.max(...numbers);
// console.log(numberMax);


const myID = {
    name: 'shafriki islam',
    id: 20104005,
    contact: '01786141015',
}
const {name, id, contact} = myID;
console.log(name, id, contact);