
function Student(name, age, gender, city){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.city = city;
    showDetails = function(){
        console.log(`Details is ${this.name}, ${this.age}, ${this.gender}, ${this.city} `);
    }

}
Student.prototype.country = "India";

const abhijeet = new Student("Abhijeet", 21, "Male", "Pune");
const poonam = new Student("Poonam", 20, "Female", "Mumbai" );
const rushikesh = new Student("Rushikesh", 23, "Male", "Indore");
const snehal = new Student("Snehal", 22, "Male", "Pune");

console.log(abhijeet.country);
console.log(poonam.country);
console.log(rushikesh);
console.log(snehal);

