console.log(`=====1.Log First and last element on console=====`);
const arrayFruits=["Banana", "Orange", "Apple", "Mango", "Water Melon"];

let firstElement=arrayFruits[0];
let lastElement=arrayFruits[arrayFruits.length-1];
console.log(`First element of an array is: "${firstElement}"`);
console.log(`Last element of an array is: "${lastElement}"`);

console.log(`=====2.Add element "Papaya" before element banana and then log array on console=====`);
arrayFruits.unshift("Papaya");
console.log(`[${arrayFruits}]`);

console.log(`=====3.Remove "Mango" from array=====`);
let removeMango=arrayFruits.splice(4,1);
console.log(`[${arrayFruits}]`);

console.log(`=====4.Add element "Pineapple" at last position=====`);
arrayFruits.push("Pineapple");
console.log(`[${arrayFruits}]`);

console.log(`=====5.Insert an element "Dragon Fruit" before "Watermelon"=====`);
arrayFruits.splice(4, 0, "Dragon Fruit");
console.log(`[${arrayFruits}]`);

console.log(`=====6.Replace an element "Orange" with "Kiwi"=====`);
arrayFruits.splice(2, 1, "Kiwi");
console.log(`[${arrayFruits}]`);

console.log(`=====7.Log the elements starting from index 1 to 4=====`);
let sliceEle=arrayFruits.slice(1,5);
console.log(`[${sliceEle}]`);

console.log(`=====8.Only select last 3 elements and log on console=====`);
let latThreeEle=arrayFruits.slice(arrayFruits.length-3);
console.log(`[${latThreeEle}]`);
