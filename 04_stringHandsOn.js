
function stringHandsOn(){
    var givenString="   Hey you are doing good, keep it up   ";
    console.log(`1. Given string is: "${givenString}"`);

    var givenStringLength=givenString.length;
    console.log(`2. Length of given string is: ${givenStringLength}`);

    var trimmedGivenString= givenString.trim();
    var trimmedGivenStringLength=trimmedGivenString.length;
    console.log(`3. After trimming string result is: "${trimmedGivenString}" And length of trimmed string is: ${trimmedGivenStringLength}`);
    
    console.log(`4. Total number of extra spaces removed are: ${givenStringLength-trimmedGivenStringLength}`);

    var firstChar=trimmedGivenString.charAt(0);
    var lastChar=trimmedGivenString.charAt(trimmedGivenString.length-1);

    console.log(`5. First character after trim is '${firstChar}' and last character after trim is '${lastChar}' `);

    var splitTrimmedGivenString=trimmedGivenString.split(" ")
    var splitTotalWords=splitTrimmedGivenString.length;
    console.log(`6. Total words available in trimmed string are ${splitTotalWords}`);

    var indexOfGood=trimmedGivenString.indexOf("good");
    console.log(`7. Index of "good" from trimmed string is: ${indexOfGood}`);

    var substringUsingSlice=trimmedGivenString.slice(22);
    var substringUsingSubstring=trimmedGivenString.substring(22);
    console.log(`8a. Substring starting from index 22 using slice() is: "${substringUsingSlice}"`);
    console.log(`8b. Substring starting from index 22 using substring() is: "${substringUsingSubstring}"`);

    var endsWithResult=trimmedGivenString.endsWith("up");
    console.log(`9. Is trimmed string ends with "up": ${endsWithResult}`);

    var startWithResult=trimmedGivenString.startsWith("Hey");
    console.log(`10. Is trimmed string starts with "Hey": ${startWithResult}`);
    
}
stringHandsOn();
