
console.log(`1.Create object bankSbi`);
const bankSbi = {
    bankName: "SBI Bank",
    accountNo: "099990",
    ifsc: "sbi01",
    interestRate: "6%"
}
console.log(bankSbi);
console.log(`------------------------------------------------------------------------------------------------------`);

console.log(`2.Create object bankLocation`);

const bankLocation ={
    street: "Datta mandir Road",
    city: "Pune",
    pin: 411057
}
console.log(bankLocation);
console.log(`------------------------------------------------------------------------------------------------------`);

console.log(`3.Clone bankSbi and bankLocation objects`);

Object.assign(bankSbi, bankLocation);
//console.log(bankSbi);
console.table(bankSbi);
console.log(`------------------------------------------------------------------------------------------------------`);

console.log(`4.Create object rateOfInterest`);

const rateOfInterest= {
    homeLoanInterest: "8%",
    personalLoanInterest: "10%",
    dueInterest: "12%"
}
console.log(rateOfInterest);
console.log(`------------------------------------------------------------------------------------------------------`);

console.log(`5.Merge bankSbi, bankLocation, rateOfInterest objects into sbiDetails object`);

const sbiDetails={

}

Object.assign(sbiDetails, bankSbi, bankLocation, rateOfInterest);
//console.log(sbiDetails);
console.table(sbiDetails);

console.log(`------------------------------------------------------------------------------------------------------`);

console.log(`6.Traverse sbiDetails object`);

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const value = sbiDetails[key];
        console.log(`${key}, ${value}`);
    }
}
