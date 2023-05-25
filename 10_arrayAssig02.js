
const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];

console.log(`Given Array: [${arrayNumbers}]`);

console.log(`=====1.Length of an Array=====`);
let arrayLength=arrayNumbers.length;
console.log(`Length of given Array: '${arrayLength}'`);

console.log(`=====2.First and last element in Array=====`);
let firstElement=arrayNumbers[0];
let lastElement=arrayNumbers[arrayLength-1];
console.log(`First element of an Array: '${firstElement}'`);
console.log(`Last element of an Array: '${lastElement}'`);

console.log(`=====3.Third last element in Array=====`);
let thirdLastElement=arrayNumbers[arrayLength-3];
console.log(`Third last element of an Array: '${thirdLastElement}'`);

console.log(`=====4.Even numbers in Array=====`);

for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%2==0) {
       let evenArrayNumbers=arrayNumbers[index];
       console.log(`Even numbers in given Array: '${evenArrayNumbers}'`);
    }
}

console.log(`=====5.Odd numbers in Array=====`);

for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%2!=0) {
       let oddArrayNumbers=arrayNumbers[index];
       console.log(`Odd numbers in given Array: '${oddArrayNumbers}'`);
    }
}

console.log(`=====6.Even positioned elements in Array and their sum=====`);
let evenSum=0;
for (let index = 0; index < arrayNumbers.length; index=index+2) {
    let evenPositionedNumbers=arrayNumbers[index];
    evenSum=evenSum+evenPositionedNumbers;
    console.log(`Even positioned elements in given Array: '${evenPositionedNumbers}'`);
}
console.log(`Sum of Even positioned elements in given Array: '${evenSum}'`);

console.log(`=====7.Odd positioned elements in Array and their sum=====`);
let oddSum=0;
for (let index = 1; index < arrayNumbers.length; index=index+2) {
    let oddPositionedNumbers=arrayNumbers[index];
    oddSum=oddSum+oddPositionedNumbers;
    console.log(`Odd positioned elements in given Array: '${oddPositionedNumbers}'`);
}
console.log(`Sum of Odd positioned elements in given Array: '${oddSum}'`);

console.log(`=====8.Sum of all elements in Array=====`);
let sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    let allPositionedNumbers=arrayNumbers[index];
    sum=sum+allPositionedNumbers;
}
console.log(`Sum of all elements in given Array: '${sum}'`);

console.log(`=====9.Numbers in multiple of 5 in Array=====`);

for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index]%5==0) {
        let multipleOfFive=arrayNumbers[index];
        console.log(`Numbers multiple of 5 in given Array: '${multipleOfFive}'`);
     }
}

console.log(`=====10.Find 115 is available in given Array=====`);

let result=arrayNumbers.includes(115)
console.log(`Is 115 available in given array: '${result}'`);

console.log(`=====11.Find 23 is available in given Array=====`);

let resultOne=arrayNumbers.includes(23)
console.log(`Is 23 available in given array: '${resultOne}'`);

console.log(`=====12.Insert numbers 55,66 before index 3=====`);
let spliceResult=arrayNumbers.splice(3,0,55,66)
console.log(`[${arrayNumbers}]`);

console.log(`=====13.Delete 3 elements starting from index 4=====`);
let spliceResultOne=arrayNumbers.splice(4,3)
console.log(`[${arrayNumbers}]`);
