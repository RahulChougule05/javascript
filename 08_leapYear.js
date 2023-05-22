console.log(`=====Leap Year=====`);
var checkLeapYear= function (leapYear) {
    if (leapYear==undefined || isNaN(leapYear) ) {
        console.log(`Invalid Input: '${leapYear}'`);
    } else {
        if (leapYear%4==0) {
            console.log(`'${leapYear}' is Leap year`);
        } else {
            console.log(`'${leapYear}' is not Leap year`);
        }
    }
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear("Twenty Twenty");
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear(1750);
