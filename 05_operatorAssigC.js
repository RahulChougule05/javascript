
console.log(`=====TCS Interview Eligibility=====`);

var tcsInterview= function (gradScore, hscScore, sscScore, candidateName) {
    var result= gradScore>=70 || hscScore>=80 || sscScore>=90 ? `Congrats '${candidateName}' you are eligible for TCS interview` : `Unfortunately '${candidateName}' you are not eligible for TCS interview`;
    console.log(`${result}`);
}
tcsInterview(80, 86, 90, "Rahul");
tcsInterview(70, 65, 55, "Siddharth");
tcsInterview(60, 79, 88, "Mohit");
