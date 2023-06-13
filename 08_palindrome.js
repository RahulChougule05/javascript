
function isPalindrome (givenString) {
    let reverseString="";
    for (let i = givenString.length-1; i >= 0; i--) {
        let char=givenString.charAt(i)
        reverseString=reverseString.concat(char);
    }
    
    if (givenString==reverseString) {
        console.log(`Given string '${givenString}' is palindrome`);
    } else {
        console.log(`Given string '${givenString}' is not palindrome`);
    }
}

isPalindrome("madam");
isPalindrome("Sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");
isPalindrome("141");
