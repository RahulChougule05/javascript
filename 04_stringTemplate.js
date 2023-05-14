
var greet = "Good Morning mate, How are you";
var resultSplit = greet.split(" ");
console.log(resultSplit);
//console.log("After split words are:", resultSplit, "Total number of words:", resultSplit.length);
console.log(`After split words are ${resultSplit} Total number of words ${resultSplit.length} `);

console.log(`Given string is: ${greet}`);

var myName = "Elon Musk";
var result = myName.startsWith("E");
console.log(`Is ${myName} starts with character E: ${result}`);

var result = myName.startsWith("Elon");
console.log(`Is ${myName} starts with "Elon": ${result}`);

var result = myName.startsWith("elon");
console.log(`Is ${myName} starts with "elon": ${result}`);

var myName = "Elon Musk";
var result = myName.endsWith("k");
console.log(`Is ${myName} ends with character "k": ${result}`);

var myName = "Elon Musk";
var result = myName.endsWith("Musk");
console.log(`Is ${myName} ends with "Musk": ${result}`);

var myName = "Elon Musk";
var result = myName.endsWith("b");
console.log(`Is ${myName} ends with character "b": ${result}`);
