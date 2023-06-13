
const array =[10, 5, 'a', 'b', 'h', 11]

console.log(`Given Array: `);
console.log(array);

console.log(`Sort array with only numbers`);

// const arrayNumber = array.filter ( (element) => {
//     return Number(element);
// })

// let arrayNumber=[];
// array.forEach(element => {
//     if (typeof element=="number") {
//         arrayNumber.push(element);
//     }
// });

const arrayNumber = array.filter ( (element) => {
    return typeof element =="number";
})

arrayNumber.sort( (n1,n2) => {
    return n1 > n2 ? 1 : -1;
} )
console.log(arrayNumber);

console.log(`Sort array with only alphabets`);

// let arrayStr=[];
// array.forEach( (element) => {
//     if (typeof element=="string") {
//         arrayStr.push(element)
//     }
// });
// arrayStr.sort();
// console.log(arrayStr);


const arrayStr = array.filter ( (element) => {
    return typeof element =="string";
})
arrayStr.sort();
console.log(arrayStr);
