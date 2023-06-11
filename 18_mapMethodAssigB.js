
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

console.log(`========== 1.Get the list of all employee names & log new array on console ==========`);

const arrayEmployeeNames = arrayEmployees.map ( (employee) => {
    return employee.empName;
})
console.log(arrayEmployeeNames);

console.log(`========== 2.Get the list of all departments & log on console ==========`);

const arrayEmployeeDepartment = arrayEmployees.map ( (employee) => {
    return employee.empDept;
})
console.log(arrayEmployeeDepartment);

console.log(`========== 3.Get the list of all employee id's and log on console ==========`);

const arrayEmployeeId = arrayEmployees.map ( (employee) => {
    return employee.empId;
})
console.log(arrayEmployeeId);
