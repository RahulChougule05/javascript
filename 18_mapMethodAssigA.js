
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log(`Given Array: ${arrayNumbers}`);

console.log(`========== 1.Add 10 into each element and log new array result on console ==========`);

const arrayAddTen = arrayNumbers.map( (element) => {
    return element+10;
})
console.log(arrayAddTen);

console.log(`========== 2.Square the each array element and log on console ==========`);

const arraySquare = arrayNumbers.map( (element) => {
    return element*element;
})
console.log(arraySquare);

console.log(`========== 3.Add the index value into its corresponding each array element and log new array result on console ==========`);

const arrayAddIndex = arrayNumbers.map( (element,index) => {
    return element+index;
})
console.log(arrayAddIndex);
