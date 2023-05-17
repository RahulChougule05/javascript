
console.log("=====1.Male Marriage Eligibility=====");
function maleMarriageEligibility(gender, age, boyName) {
    var result = (gender=="Male" && age>=21) ? `Hey "${boyName}" you are eligible for marriage` : `Hey "${boyName}" you are not eligible for marriage`;
    console.log(`${result}`);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 17, "Srew Jobs");

console.log("=====2.Female Marriage Eligibility=====");
function femaleMarriageEligibility(gender, age, girlName) {
    var result = (gender=="Female" && age>=18) ? `Hey "${girlName}" you are eligible for marriage` : `Hey "${girlName}" you are not eligible for marriage`;
    console.log(`${result}`);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");

