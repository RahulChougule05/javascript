
class Employee {
    constructor(empId, empName, empDept, empSalary, empCompany){
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
}
const empAnil = new Employee(22, "Anil", "IT", 50000, "TCS");
const empRadha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const empRishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const empSonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const empMonika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const empVinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const empMahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees=[empAnil, empRadha, empRishi, empSonali, empMonika, empVinayak, empMahesh]

console.log(`========== 1.Find all the employees working in TCS and log only Employee names and company name ==========`);

for (const element of arrayEmployees) {
    if (element.empCompany=="TCS") {
        console.log(`Employee Name: ${element.empName} and Employee Company: ${element.empCompany}`);
    }
}

console.log(`========== 2.Find the Finance department employees and log only department and Employee names ==========`);

for (const element of arrayEmployees) {
    if (element.empDept=="Finance") {
        console.log(`Department: ${element.empDept} and Employee Name: ${element.empName}`);        
    }
}

console.log(`========== 3.Find the Employees whose name starts with 'R' and log complete employee details ==========`);

for (const element of arrayEmployees) {
    if (element.empName.startsWith("R")) {
        console.log(element);
    }
}

console.log(`========== 4.Find the Employees whose salary is greater than 75000 and log Employee names, company name and salary ==========`);

for (const element of arrayEmployees) {
    if (element.empSalary>75000) {
        console.log(`Employee Name: ${element.empName}, Employee Company: ${element.empCompany} and Salary: ${element.empSalary}`);
    }
}

console.log(`========== 5.Find the Employees whose salary is greater than or equal 50000 and from IT department, log complete employee details ==========`);

for (const element of arrayEmployees) {
    if (element.empSalary>=50000 && element.empDept=="IT") {
        console.log(element);
    }
}

console.log(`========== 6.Find all the Employees from company Infy and log complete employee details ==========`);

for (const element of arrayEmployees) {
    if (element.empCompany=="Infy") {
        console.log(element);
    }
}
