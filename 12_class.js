
class Student {
    constructor(name, age, gender,city){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.city = city;
    }
    showDetails(){
        console.log(`Details is ${this.name}, ${this.age}, ${this.gender}, ${this.city}`);

    }
}

const abhijeet = new Student("Abhijeet", 21, "Male", "Pune");
const poonam = new Student("Poonam", 20, "Female", "Mumbai" );
const rushikesh = new Student("Rushikesh", 23, "Male", "Indore");
const snehal = new Student("Snehal", 22, "Male", "Pune");

const array = [abhijeet, poonam, rushikesh, snehal];

for (const element of array) {
    element.showDetails();
}

const result = abhijeet instanceof Student;
console.log(result);

class College{

}

const res = rushikesh instanceof College;
console.log(res);

abhijeet.showDetails(); 
poonam.showDetails();
rushikesh.showDetails();
snehal.showDetails();
