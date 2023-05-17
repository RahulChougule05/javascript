
console.log(`=====1.Greatest number among two numbers=====`);

var greaterNumber=function(numOne, numTwo) {
   var result= numOne>numTwo ? ` '${numOne}' is greater than '${numTwo}' ` : ` '${numTwo}' is greater than '${numOne}' `
   console.log(`${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`=====2.Even or odd numbers=====`);

var isEvenOrOddNum=function(num) {
    var result=num%2==0 ? true : false
    return result;
}
var result=isEvenOrOddNum(29);
var result1=(result==true) ? `29 is even number` : `29 is odd number`
console.log(`${result1}`);
var result=isEvenOrOddNum(44);
var result1=(result==true) ? `44 is even number` : `44 is odd number`
console.log(`${result1}`);
var result=isEvenOrOddNum(0);
var result1=(result==true) ? `0 is even number` : `0 is odd number`
console.log(`${result1}`);
var result=isEvenOrOddNum(101);
var result1=(result==true) ? `101 is even number` : `101 is odd number`
console.log(`${result1}`);

console.log(`=====3.Even or odd length=====`);

var wordLength=function(str) {
    var strLength=str.length;
    var result=strLength%2==0 ? `EVEN` : `ODD`
    return result;
}
var returnValue=wordLength("JavaScript");
console.log(`JavaScript has ${returnValue} length`);
var returnValue=wordLength("Developer");
console.log(`Developer has ${returnValue} length`);
var returnValue=wordLength("Google");
console.log(`Google has ${returnValue} length`);
