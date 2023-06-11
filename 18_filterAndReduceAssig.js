
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

const arrayEmployees=[empAnil, empRadha, empRishi, empSonali, empMonika, empVinayak, empMahesh];

console.log(`========== 1.Find all the employees from "Wipro" company ==========`);

const arrayWipro = arrayEmployees.filter( (employee) => {
    return employee.empCompany=="Wipro";
})
const arrayWiproNames=arrayWipro.map( (employee) => {
    return employee.empName;
})
console.log(arrayWiproNames);

console.log(`========== 2.Find all the employees from "IT" OR "HR" dept ==========`);

const arrayItOrHr= arrayEmployees.filter( (employee) => {
    return employee.empDept=="IT" || employee.empDept=="HR";
})

const arrayItOrHrName = arrayItOrHr.map( (employee) => {
    return employee.empName;
})
console.log(arrayItOrHrName);

console.log(`========== 3.Find all the employees whose emp id's are greater than 50 ==========`);

const arrayEmpIdGreaterFifty= arrayEmployees.filter( (employee) => {
    return employee.empId>50;
})

const arrayEmpIdGreaterFiftyName = arrayEmpIdGreaterFifty.map( (employee) => {
    return employee.empName;
})
console.log(arrayEmpIdGreaterFiftyName);

console.log(`========== 4.Find all the employees whose names start with letter 'A' or 'V' or 'M' ==========`);

const arrayNames= arrayEmployees.filter( (employee) => {
    return employee.empName.startsWith('A') || employee.empName.startsWith('V') || employee.empName.startsWith('M')
})

const arrayEmpNamesWithAVM=arrayNames.map( (employee) => {
    return employee.empName;
})
console.log(arrayEmpNamesWithAVM);

console.log(`========== 5. Find the average salary of the employee for all the department ==========`);

const arrayEmpSalary = arrayEmployees.map( (employee) => {
    return employee.empSalary;
})

const sumSalary=arrayEmpSalary.reduce( (runningTotal, value) => {
    return runningTotal+value;
})
const averageSalary = sumSalary/arrayEmployees.length;
console.log(`Average salary of all employees: ${averageSalary}`);

console.log(`========== 6. Find the average salary of 'IT' department employee ==========`);

const arrayEmpIt=arrayEmployees.filter( (employee) => {
    return employee.empDept=="IT";
})

const arrayEmpItSalary = arrayEmpIt.map( (employee) => {
    return employee.empSalary;
})

const sumSalaryItDepartment= arrayEmpItSalary.reduce( (runningTotal,value) => {
    return runningTotal+value;
})
const averageSalaryItDepartment = sumSalaryItDepartment/arrayEmpIt.length;
console.log(`Average salary of "IT" department employees: ${averageSalaryItDepartment}`);
