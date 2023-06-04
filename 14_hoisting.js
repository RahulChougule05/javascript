
console.log(myName); // We can access it is bcz of hoisting
var myName= "GK";

//console.log(city);  //We can not access
//let city = "Pune";

//console.log(pin);   //We can not access
const pin = "431202";


show();            // Normal function or named function are hoisted that's why we are able to call or invoke it even before it's declaration
function show(){
    console.log("show function");
}

display();           // FE never hoisted
var display = function() {
    console.log("inside FE");
}
