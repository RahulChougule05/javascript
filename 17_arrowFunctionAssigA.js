
console.log(`1.Arrow function with no arguments and no return value`);

const day= () => {
    console.log(`"Good Morning, Today is Monday"`);
}
day();

console.log(`2.Use Arrow function with three arguments and no return value and perform multiplication`);

const multiplication = (numOne, numTwo, numThree=1) => {
    const result=numOne*numTwo*numThree;
    console.log(`Multiplication of numbers ${numOne}, ${numTwo}, ${numThree}: ${result}`);
}
multiplication(5,5,2);
multiplication(10,4);

console.log(`3.Use Arrow function with five arguments and return value and perform addition`);

const addition = (numOne, numTwo, numThree, numFour, numFive ) => {
    const res=numOne+numTwo+numThree+numFour+numFive;
    return res;
}
const add=addition(100,100,200,349,756);
console.log(`Addition of numbers 100, 100, 200, 349, 756: ${add}`);
const strAdd=addition("I am ", "learning ", "ES6 ", "features ", "in depth");
console.log(`Result is: ${strAdd}`);
