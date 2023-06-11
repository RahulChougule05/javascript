
// 5! = 5 * 4 * 3 * 2 * 1

function factorialNumber (num) {
    let factorial = 1; // 120
    for (let index = num; index >= 1; index--) {     // index = 5  4  3  2  1  0
        factorial = factorial * index;               // 120 * 1
    }
    console.log(`Factorial: ${factorial}`);
}
factorialNumber(5);
factorialNumber(4);
factorialNumber(10);
factorialNumber(15);
