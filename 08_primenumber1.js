
function primeNumber(num) {
    let count=0;
    for (let i = 2; i < num; i++) {
        if (num%i==0) {
            count++;
            break;
        }
    }
    if (count==1) {
        console.log(`${num} is not a prime number`);
    }
    else {
        console.log(`${num} is a prime number`);
    }
}
primeNumber(4);
primeNumber(7);
primeNumber(9);
primeNumber(5);
primeNumber(97);
