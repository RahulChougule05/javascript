
function stringHandsOn(){
    var givenString="   Hey you are doing good, keep it up   ";
    console.log("1. Given string is:", givenString);

    var givenStringLength=givenString.length;
    console.log("2. Length of given string is:", givenStringLength );

    var trimmedGivenString= givenString.trim();
    var trimmedGivenStringLength=trimmedGivenString.length;
    console.log("3. After trimming string result is:", trimmedGivenString, "And length of trimmed string is:", trimmedGivenStringLength );
    
    console.log("4. Total number of extra spaces removed are:", givenStringLength-trimmedGivenStringLength);

    var firstChar=trimmedGivenString.charAt(0);
    var lastChar=trimmedGivenString.charAt(trimmedGivenString.length-1);

    console.log("5. First and last characters after trim are:", firstChar, lastChar);
}
stringHandsOn();
