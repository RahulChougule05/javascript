
function show() {
    console.log("Show function");
}
console.log("Before function call");
show();                                 // Function call or invoke
console.log("After function");
show();
show();
show();

var numOne = 100;
var numTwo = 200;

var nameOne = "Bill Gates";
var nameTwo = "Elon Musk";

var fruitApple = "Apple";
var fruitMango = "Mango";

function swapVariables(valueOne, valueTwo){                  // Arguments: valueOne =100  valueTwo = 200 
    console.log("Before Swap: ", valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo; 
    valueTwo = temp;
    console.log("After Swap: ", valueOne, valueTwo);
}
swapVariables(numOne, numTwo); // 100 200
swapVariables(nameOne, nameTwo);
swapVariables(fruitApple, fruitMango);

console.log("========================================================");

function addition(num1, num2) {
    var result  = num1 + num2;                // result = 300
    return result;
}
var returnValue = addition(100, 200);
console.log("Addition of number is: ", returnValue);
var returnResult = addition(890.400, 600.3456);
console.log("Addition of number is: ", returnResult);
