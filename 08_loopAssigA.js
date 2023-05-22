
console.log(`=====1.Vowels count=====`);

var word = "I am very good IT Developer";
var count = 0;
for (let i=0; i< word.length; i++) {
    var char = word.charAt(i); // 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        //console.log(char);
        count++;
    }
}
console.log(`Total vowels count in string: ${count}`);

console.log(`=====2.Sum of cube of numbers=====`);

function sumOfCube() {
    var sum=0;
    for(let i=1; i<=5; i++) {
        var cube=i*i*i;
        sum=sum+cube;
    }
    console.log(`Sum of cube of numbers from 1 to 5: ${sum}`);
}
sumOfCube()

console.log(`=====3.Odd Positioned Characters=====`);
function oddPositionedChars(str) {
    var oddStr="";
    for(let i=0; i<str.length; i++) {
        var char=str.charAt(i);
        if (i%2!=0 && char !=" ") {
            oddStr=oddStr.concat(char);
        }
    }
    console.log(`Given String: "${str}" and 
    odd positioned chars ignoring empty spaces from given string: '${oddStr}'`);
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ");
