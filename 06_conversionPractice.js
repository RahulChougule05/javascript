
console.log(`===== Implicit conversion to String =====`);

var result= '3'+ 2;
console.log(result);          //32

var result= '3'+ true;
console.log(result);         //3true

var result= '3'+ undefined;
console.log(result);         //3undefined

var result= '3'+ null;
console.log(result);          //3null

console.log(`===== Implicit boolean conversion to Number =====`);

var result = '4'- true;
console.log(result);         //3

var result = 4 + true;
console.log(result);        //5

var result = 4 + false;
console.log(result);       //4

console.log(`===== Implicit string conversion to Number =====`);

var result = '4'-'2';
console.log(result);       //2

var result = '4'-2;
console.log(result);      //2 

var result = '4'*2;
console.log(result);      //8

var result = '4'/2;
console.log(result);     //2


console.log(`===== Undefined used with number, boolean or null given NaN =====`);


var result = 4 + undefined;
console.log(result);            //NaN

var result = 4 - undefined;
console.log(result);            //NaN

var result = true + undefined;
console.log(result);            //NaN

var result = null + undefined;
console.log(result);           //NaN

console.log(`===== Explicit conversion: Convert number strings and boolean values to numbers, 
In that case we can use Number() =====`);

//string to number
var result = Number('324');
console.log(result);         //324

var result = Number('324e-1');
console.log(result);        //32.4

//boolean to number
var result = Number(true);
console.log(result);       //1

var result = Number(false);
console.log(result);       //0

console.log(`===== Explicit conversion: Invalid string to number return NaN =====`);

var result = Number('hello');
console.log(result);              //NaN

var result = Number(undefined);
console.log(result);            //NaN

var result = Number(NaN);
console.log(result);           //NaN

console.log(`===== Explicit conversion: string to number using + operator =====`);

var numberInString="100";
console.log(typeof numberInString);  //string

var number= +numberInString;
console.log(typeof number);         //number

console.log(`===== Explicit conversion: number to string data type conversion using toString() method =====`);

var number= 100;
console.log(typeof number);         //number

var conResult=number.toString();
console.log(typeof conResult);         //string

console.log(`===== Check Results =====`);

console.log(`${0 == ''}`);                //true
console.log(`${0 == '0'}`);               //true
console.log(`${0 == false}`);             //true
console.log(`${null == undefined}`);      //true
console.log(`${1 == [1]}`);               //true
console.log(`${1 == true}`);              //true
console.log(`${1 == '1'}`);               //true
