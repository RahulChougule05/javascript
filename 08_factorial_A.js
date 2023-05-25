
function factorialOfNum(number) {
    let factorial=1;
    if (number==undefined || isNaN(number)) {
        console.log(`Invalid input: '${number}'`);
    } else {
        if (number==0) {
            console.log(`Factorial of '${number}' is: '1' `);
        } else {
            for(let i=number; i>=1; i--) {
                factorial=factorial*i;
            }
            return factorial;
        }
    }
}
var returnValue=factorialOfNum(5);
console.log(`Factorial of '5' is: '${returnValue}'`);
var returnValue=factorialOfNum(3);
console.log(`Factorial of '3' is: '${returnValue}'`);
factorialOfNum(null);
var returnValue=factorialOfNum(8);
console.log(`Factorial of '8' is: '${returnValue}'`);
factorialOfNum(undefined);
var returnValue=factorialOfNum(9);
console.log(`Factorial of '9' is: '${returnValue}'`);
factorialOfNum(NaN);
factorialOfNum(0);
