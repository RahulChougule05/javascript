console.log(`=====Vote Eligibility Check=====`);

function voteEligibility(age) {
    if (age==null || age==undefined || age<=0 || age> 120) {
        console.log(`${age}: Invalid data`);
    } else {
        if (age>=18) {
            console.log(`${age}: Eligible for vote`);
        } else {
            console.log(`${age}: Not eligible for vote`);
        }
    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);
