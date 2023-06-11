
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log(`Given Array: ${arrayNumbers}`);

console.log(`========== 1.Find the sum of all numbers ==========`);

const sum=arrayNumbers.reduce( (runningTotal, value) =>{
    return runningTotal+value;
})
console.log(`Sum of all numbers: ${sum}`);

console.log(`========== 2.Find the numbers multiple of 5 and then sum it ==========`);

const arrayMultipleOfFive=arrayNumbers.filter( (element) => {
    return element%5==0;
})
console.log(`Numbers multiple of 5: ${arrayMultipleOfFive}`);

const sumOfMultipleOfFive=arrayMultipleOfFive.reduce( (runningTotal, value) =>{
    return runningTotal+value;
})
console.log(`Sum of numbers which are multiple of 5: ${sumOfMultipleOfFive}`);
