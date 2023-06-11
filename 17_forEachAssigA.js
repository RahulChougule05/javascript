
const arrayNumbers =[1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(`Given array: ${arrayNumbers}`);

console.log(`========== 1.Log the array element with it’s index using forEach() with arrow function ==========`);

arrayNumbers.forEach( (element, index) => {
    console.log(`Index: ${index}, Element: ${element}`);
});

console.log(`========== 2.Find positive numbers ==========`);

arrayNumbers.forEach( (element) => {
    if (element>0) {
        console.log(element);
    }
} )

console.log(`========== 3.Find the negative numbers, add into new array and and log new array ==========`);

let arrayNegativeNumbers = [];

arrayNumbers.forEach( (element) => {
    if (element<0) {
        arrayNegativeNumbers.push(element);
    }
} )
console.log(arrayNegativeNumbers);

console.log(`========== 4.Find even numbers ==========`);

arrayNumbers.forEach( (element) => {
    if (element%2==0) {
        console.log(element);
    }
})

console.log(`========== 5.Find the sum of all elements from array ==========`);

let sum=0;
arrayNumbers.forEach( (element) => {
    sum=sum+element
});
console.log(`Sum of all elements from array: ${sum}`);

console.log(`========== 6.Log even indexed array ==========`);

let evenIndexArray =[];
arrayNumbers.forEach( (element,index) => {
    if (index%2==0) {
        evenIndexArray.push(element);
    }
});
console.log(evenIndexArray);
