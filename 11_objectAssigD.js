
console.log(`1.Professor object properties`);
const professor ={
    Name: "Mohit",
    Age: 50,
    Gender: "Male",
    Subject: "C#",
    College: "COEP",
    degrees: {
        Engineering: "CSC",
        MTech: "Computer Science",
        PHD: "Advance Computing",
    },
    Certificates: ["Hacker Rank Participation", "Certificate In IFE course", "Certificate in Advance Progarmming"],
    getDetails: function() {
        let details=`Engineering: ${this.degrees.Engineering}, MTech: ${this.degrees.MTech}, PHD: ${this.degrees.PHD}`
        return details;
    }

}
console.log(professor);

console.log(`2.Nested object Degrees`);
console.log(professor.degrees); 

console.log(`3.Array: Certificates`);
console.log(professor.Certificates); 

console.log(`4.Concat all degress`);
let value=professor.getDetails();
console.log(`Total degress are: ${value}`); 

console.log(`5.Add new property: totalExperience`);
professor.totalExperience="14 Years";
console.log(professor);

console.log(`6.Modify Property: Age`);
professor.Age=49;
console.log(professor);

console.log(`7.Add a certificate at end of an array`);
professor.Certificates.push("Oracle Certified")
console.log(professor.Certificates); 

console.log(`8.Last element of array`);
let element= professor.Certificates[professor.Certificates.length-1];
console.log(`Last elememt of an array: ${element}`);

//console.table(professor);
