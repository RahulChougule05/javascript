
var firstName="Rahul";
var firstNameLength=firstName.length;
console.log("Total No. of characters in given string is", firstNameLength);


var greet = "Good Morning";
var greetLength = greet.length;
console.log("Total number of characters in given string is:", greetLength);

var charAtZeroIndex = greet.charAt(0);
console.log("Char at 0 index:",charAtZeroIndex);

var charAtLastIndex = greet.charAt(greet.length-1);
console.log("Char at last index:",charAtLastIndex);

var charAtIndexTwenty= greet.charAt(20);
console.log("Char at index 20 is:", charAtIndexTwenty);

var indexOfM = greet.indexOf("M")
console.log("Index of M is:", indexOfM);

var lastIndexOfo = greet.lastIndexOf("o");
console.log("Last index of o is:", lastIndexOfo);

var replaceValue = greet.replace("Morning", "Afternoon");
console.log("After replace:", replaceValue);

var upperCaseResult=greet.toUpperCase();
console.log("Uppercase result is:", upperCaseResult);

var lowerCaseResult=greet.toLowerCase();
console.log("Lowercase result is:", lowerCaseResult);

var firstName = "Rahul";
var lastName = " Chougule";

var concatString = firstName.concat(lastName);
console.log("Concat String is:", concatString);

var firstName = "     Mohit      ";
var firstNameLength = firstName.length;
console.log("Before trim length is:", firstNameLength );

var trimmedFirstName = firstName.trim();
var trimmedFirstNameLength = trimmedFirstName.length
console.log("After Trim firstName is:",trimmedFirstName, "After Trim firstName length is:", trimmedFirstNameLength );
console.log("Trimmed total spaces:", firstNameLength-trimmedFirstNameLength);

var lastName = "        Sharma   ";
var lastNameLength=lastName.length;
console.log("Length before start trim is:", lastNameLength);
var startTrimResult=lastName.trimStart();
var startTrimResultLength=startTrimResult.length;
console.log("Length after start trim is:", startTrimResultLength);
console.log("Result after start trim is:", startTrimResult);

var endTrimResult=lastName.trimEnd();
var endTrimResultLength=endTrimResult.length;
console.log("Length after end trim is:", endTrimResultLength);
console.log("Result after end trim is:", endTrimResult);

console.log("===================================================");


var greet = "Good Morning";
var includeResult = greet.includes("ing");
console.log("Is ing string available inside:", includeResult);

var searchResult = greet.search("Mor");
console.log("Search result:", searchResult);

var sliceResult = greet.slice(4, 6);
console.log("Slice Result is:", sliceResult);

var subStringResult = greet.substring(4, 6);
console.log("Substring result is:", subStringResult);

var greet = "Good Morning mate, How are you";
var resultSplit = greet.split(" ");
console.log(resultSplit);
console.log("Total number of words:",resultSplit.length);

var resultSplit = greet.split(",");
console.log(resultSplit);
console.log("Total number parts:",resultSplit.length);

var resultSplit = greet.split("");
console.log(resultSplit);
console.log("Total number of words:",resultSplit.length);

console.log("===================================================");

var greet = "Good Morning mate, How are you";
var greetValue=greet.valueOf();
console.log("Value of variable is:", greetValue );

var num=15;
var convertToString=num.toString();
console.log("Before conversion type:", typeof num, "After Conversion type:", typeof convertToString);

var given="Name";
var charCodeAt0=given.charCodeAt(0);
console.log("charCodeAt0:", charCodeAt0);
