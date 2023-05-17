
console.log(`==============================1==============================`);

function squareOfWordLength(givenStr) {
    var givenStrLength=givenStr.length;
    var givenStrLengthSquare= givenStrLength*givenStrLength;
    console.log(`Length of given string is '${givenStrLength}' and its square is '${givenStrLengthSquare}' `);
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log(`==============================2==============================`);

function strBasic() {
    givenString="I am Angular Developer";
    var givenStringLength=givenString.length;
    var givenStringSplitResult=givenString.split(" ");
    var givenStringSplitResultLength=givenStringSplitResult.length;
    result1= givenStringLength/givenStringSplitResultLength;
    result2= givenStringLength*givenStringSplitResultLength
    console.log(`Given string is "${givenString}"`);
    console.log(`Length of given string is: ${givenStringLength}`);
    console.log(`Total number of words present in string is: ${givenStringSplitResultLength}`);
    console.log(`Length of given string/Total number of words present in string= ${result1}`);
    console.log(`Length of given string * Total number of words present in string= ${result2}`);
}
strBasic();
