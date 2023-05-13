
function hobbyOne(){
    console.log("Reading is my hobby");
}
hobbyOne();

function hobbyTwo(){
    console.log("Listening music is also my hobby");
}
hobbyTwo();

console.log("===================================================");

function personalDetails(firstName, lastName, collegeName){
    console.log("My name is", firstName ,lastName);
    console.log("My college name is" , collegeName);
}
personalDetails("Rahul", "Chougule", "COEP");

console.log("===================================================");

function swapVariables(valueOne, ValueTwo){
    console.log("Before Swap:", valueOne, ValueTwo);
    var temp=valueOne;
    valueOne=ValueTwo;
    ValueTwo=temp;
    console.log();
    console.log("After Swap:", valueOne, ValueTwo);
}
swapVariables("Virat", "Anushka");
swapVariables(1000, 2000);

console.log("===================================================");

function addThreeValues(valueOne, valueTwo, valueThree){
    var addition=valueOne+valueTwo+valueThree;
    console.log("Addition:", addition);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", " Good", " Morning");