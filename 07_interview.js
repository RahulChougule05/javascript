
var tcsInterview= function (gradScore, hscScore, sscScore, candidateName) {
    if (gradScore>=70 || hscScore>=80 || sscScore>=90) {
        console.log(`Congrats '${candidateName}' you are eligible for TCS interview`);
    } else {
        console.log(`Unfortunately '${candidateName}' you are not eligible for TCS interview`);
    }
}
tcsInterview(80, 86, 90, "Rahul");
tcsInterview(70, 65, 55, "Siddharth");
tcsInterview(60, 79, 88, "Mohit");
