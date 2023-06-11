
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

console.log(`========== 1.Find out the "TCS" employee details and log only Employee name & company on console ==========`);

arrayEmployees.forEach( (employee) => {
    if (employee.empCompany=="TCS") {
        console.log(`Employee Name: ${employee.empName} and Employee Company: ${employee.empCompany}`);
    }
});

console.log(`========== 2.Find the employees with salary greater than or equal 50000 and log all employee details on console ==========`);

arrayEmployees.forEach( (employee) => {
    if (employee.empSalary>=50000) {
        console.log(employee);
    }
});

console.log(`========== 3.Find the sum of all employees salary and log on console ==========`);

let sumSalary=0;

arrayEmployees.forEach( (employee) => {
    sumSalary=sumSalary+employee.empSalary;
});
console.log(`Sum of Employees salary: ${sumSalary}`);

console.log(`========== 4.Find the average salary of all employees and log on console ==========`);

let sumaAllEmpSalary =0;

arrayEmployees.forEach( (employee) => {
    sumaAllEmpSalary=sumaAllEmpSalary+employee.empSalary;
});
let averageSalary=sumaAllEmpSalary/arrayEmployees.length;
console.log(`Average salary of all employees: ${averageSalary}`);

console.log(`========== 5.Find the "IT" OR "HR" department employees whose salary is greater than or equal to 75000 and log complete employee details on console ==========`);

arrayEmployees.forEach( (employee) => {
    if (employee.empDept=="IT" && employee.empSalary >=75000 || employee.empDept=="HR" && employee.empSalary >=75000) {
        console.log(employee);
    }
});
