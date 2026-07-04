// const check=(num)=>{
//     if(num%2==0){
//         return "even";
//     }
//     else{
//         return "odd"; 
//     }

// };
//     console.log(check(4));

// 2) Result Evaluator — Pass or Fail

// function res(num){
//     if(num > 100 || num < 0){
//         console.log("Invalid Input")
//         return null;
//     }
//     if(num >= 50){
//         return "Pass";
//     }
//     else {
//         return "Fail";
//     }
    
// }
// console.log(res(60));
// console.log(res(30));
// console.log(res(220));

// 3) Maximum Finder — Largest of Three Numbers

// const res=(a,b,c)=>{
//     if(a>=b && a>=c){
//         return a;
//     }
//     else if(b>=a && b>=c){
//         return b;
//     }
//     else{
//         return c;
//     }
// };
// console.log( res(10, 25, 15)); 
// console.log( res(5,3,8));
// console.log( res(9,9,2));

// 4) Accumulator — Sum from 1 to N

// function sum(num){
//     let sums=0;
//     for(let i=1;i<=num;i++){
//         sums=sums+i;
//     }
//     return sums;
// }
// console.log(sum(5));

// 5) Multiplication Table Generator

// function printTable(num){
//     for(let i=1;i<=10;i++){
//         console.log(num + " x " + i + " = " + (num * i));
//     }
// }
// printTable(5);

// 6) Digit Counter — Number Length Finder

// function countDigits(num) {
//     if (num === 0) return 1;

//     let count = 0;
//     while (num > 0) {
//         count++;
//         num = (num / 10) | 0; 
//     }
//     return count;
// }
// console.log(countDigits(12345)); 

//7) Number Reverser

// function reverseNumber(num) {
//     let rev = 0;
//     while (num != 0) {
//         let ld = num % 10;
//         rev = rev * 10 + ld;
//         num = Math.floor(num / 10);
//     }
//     return rev;
// }
// console.log(reverseNumber(12345)); 
// console.log(reverseNumber(9876));  

// 8) Factorial Engine

// function factorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// console.log(factorial(5)); 
// console.log(factorial(3)); 
// console.log(factorial(1));

// 9) Prime Validator
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(7));  
// console.log(isPrime(10)); 
// console.log(isPrime(2));  

// 10) Pattern Builder — Star Triangle

// function printPattern(num) {
//     for (let i = 1; i <= num; i++) {
//         let star = "";
//         for (let j = 1; j <= i; j++) {
//             star += "*";
//         }
//         console.log(star);
//     }
// }

// printPattern(4);