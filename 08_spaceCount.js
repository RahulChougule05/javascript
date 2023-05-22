
var str = "JavaScript Language Of Internet";
var count = 0;

for(let i=0; i<str.length; i++)
{
    var char=str.charAt(i);
    if (char==" ") {
        count++;
    }
}
console.log(count);