
console.log(`Fibonacci Series`);

let numOne=1;
let numTwo=2;
let numThree;
let count=10;

for (let index = 2; index <= count; index++) {
    numThree=numOne+numTwo;
    console.log(numOne);
    numOne=numTwo;
    numTwo=numThree;
}
