

const arrayNums=[20, 3, 4, 56, 90, 400, 49];
console.log(`Given Array: ${arrayNums}`);

console.log(`-------------------- 1.Shallow Clone- Update cloned array with values 55, 66 at last position --------------------`);
const clonedArray= arrayNums;

clonedArray.push(55,66);
console.log(`Original Array: ${arrayNums}`);
console.log(`Cloned Array: ${clonedArray}`);

console.log(`-------------------- 2.Deep Clone- Update original array with values 10, 25 at last position --------------------`);
const deepClonedArray=[...arrayNums];
arrayNums.push(10,25);
console.log(`Original Array: ${arrayNums}`);
console.log(`Deep Cloned Array: ${deepClonedArray}`);

console.log(`-------------------- 3.Merge Array using spread operator --------------------`);

const arrayEven=[2, 30, 14, 8];
const mergeArray=[...arrayNums,...arrayEven];
console.log(`Merged Array: ${mergeArray}`);

const employeeInfo ={
    empID: 27,
    empName: "john Doe",
    salary: {
        julyMonth: "40,000INR",
        augustMonth: "50,000INR",
        juneMonth: "65,000INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 413202"
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", " 1800- 4567 32", " +91- 9096 5678 77"]
}

console.log(`-------------------- 4.Employee details --------------------`);

console.log(`Address: ${employeeInfo.address.locality.colony}, ${employeeInfo.address.locality.street}, ${employeeInfo.address.city}, ${employeeInfo.address.state}, ${employeeInfo.address.country}`);
console.log(`Mobile numbers: ${employeeInfo.mobiles}`);

console.log(`-------------------- 5.Deep copy using JSON.stringfy() --------------------`);

const clonedEmployeeInfo= JSON.parse(JSON.stringify(employeeInfo));

console.log(`5a.Update July month salary to 80k in cloned object`);
clonedEmployeeInfo.salary.julyMonth="80,000INR";

console.log(`Original object july month salary: ${employeeInfo.salary.julyMonth}`);
console.log(`Cloned object july month salary: ${clonedEmployeeInfo.salary.julyMonth}`);

console.log(`5b.Update Country to United Kingdom in original object`);
employeeInfo.address.country="United Kingdom";
console.log(`Original object country: ${employeeInfo.address.country}`);
console.log(`Cloned object country: ${clonedEmployeeInfo.address.country}`);
