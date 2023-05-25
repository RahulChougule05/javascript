
function countCharA(str) {
    let count=0;
    for(let i=0; i<str.length; i++) {
        let char=str.charAt(i);
        if (char=="a" || char=="A") {
            count++;
        }
    }
    return count;
}
var returnValue=countCharA("I Am Learning JavaScript, The Language of internet");
console.log(`Total number of characters 'a' or 'A' available in given string: '${returnValue}'`);
var returnValue=countCharA("My favourite movie is LAggan");
console.log(`Total number of characters 'a' or 'A' available in given string: '${returnValue}'`);