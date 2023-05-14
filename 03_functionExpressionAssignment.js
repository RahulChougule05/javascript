
console.log(`=====1.Square of numbers=====`);
var square=function(num) {
    var squareOfNumber=num*num;
    console.log(`Square of '${num}' is: ${squareOfNumber} `);
}
square(5);
square(6);
square(25);
square(100);

console.log(`=====2.Type of function=====`);

var typeOfSquare= typeof square;
console.log(`Type of function is: ${typeOfSquare}`);

console.log(`=====3.Area of Rectangle=====`);

var areaOfRectangle=function(length, width) {
    var rectangleArea= length*width;
    console.log(`Area of rectangle is: ${rectangleArea}`);
}
areaOfRectangle(499,917);

console.log(`=====4.Swap Variables=====`);

var swapVariables=function(valueOne, valueTwo) {
    console.log(`Before Swap: ${valueOne} ${valueTwo}`);
    var temp=valueOne;
    valueOne=valueTwo;
    valueTwo=temp;
    console.log(`After Swap: ${valueOne} ${valueTwo}`);
}
swapVariables("Virat", "Anushka");
swapVariables(1000,2000);

console.log(`=====5.String Methods=====`);

var givenString=function() {
    var str="JS the most popular language of internet";
    var strLength=str.length;
    console.log(`A.Total number of characters available in given string is: ${strLength}`);

    var charAtIndexSix=str.charAt(6);
    var charAtIndeEleven=str.charAt(11);
    console.log(`B.Character at index 6 is: ${charAtIndexSix}`);
    console.log(`C.Character at index 11 is: ${charAtIndeEleven}`);

    var lastChar=str.charAt(str.length-1);
    console.log(`D.Last character of given string is: ${lastChar}`);

    var firstChar=str.charAt(0);
    console.log(`E.First character of given string is: ${firstChar}`);

    var splitResult=str.split(" ");
    var splitResultLength=splitResult.length;
    var squareOfWords=splitResultLength*splitResultLength;
    console.log(`F.Total number of words present in given string is: '${splitResultLength}' and square of number of words present is: '${squareOfWords}'`);

}
givenString();
