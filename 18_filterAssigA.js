
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19]

console.log(`Given Array: ${arrayNumbers}`);

console.log(`========== 1.Find out all the numbers which are greater than 50 and log on console ==========`);

const arrayGreaterThanFifty = arrayNumbers.filter( (element) => {
    return element>50;
})
console.log(arrayGreaterThanFifty);

console.log(`========== 2.Find out all the even numbers and log on console ==========`);

const arrayEvenNumber = arrayNumbers.filter( (element) => {
    return element%2==0;
})
console.log(arrayEvenNumber);

console.log(`========== 3.Find out all the odd numbers and log on console ==========`);

const arrayOddNumber = arrayNumbers.filter( (element) => {
    return element%2!=0;
})
console.log(arrayOddNumber);

console.log(`========== 4.Find out all the numbers which are multiple of 5 ==========`);

const arrayMultipleFive = arrayNumbers.filter( (element) => {
    return element%5==0;
})
console.log(arrayMultipleFive);

console.log(`========== 5.Find out all numbers which are between 20 and 50 ==========`);

const arrayBetweenTwentyAndFifty = arrayNumbers.filter( (element) => {
    return element>20 && element<50;
})
console.log(arrayBetweenTwentyAndFifty);
