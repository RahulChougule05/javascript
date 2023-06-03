
console.log(`------------------------- 1.Class for Vehicle -------------------------`);
class Vehicle {
    constructor(name, color, engine, price, mileage) {
        this.name=name;
        this.color=color;
        this.engine=engine;
        this.price=price;
        this.mileage=mileage
    }
    showDetails() {
        console.log(`Vehicle details are: Name: ${this.name}, Color: ${this.color}, Engine: ${this.engine}, Price: ${this.price}, Mileage: ${this.mileage}`);
    }
}
const celerio= new Vehicle("Maruti-Celerio", "White", "1000CC", "5.5L", "22 km/l");
const iTen= new Vehicle("Hyundai-i10", "Silver", "1200CC", "7.5L", "20km/l");
const city= new Vehicle("Honda-City", "Pearl White", "1500CC", "9.0L", "18km/l");
const innova= new Vehicle("Toyota-Innova", "Gold", "2000CC", "19.0L", "16km/l");
const qSeven= new Vehicle("Audi-Q7", "Black", "3000CC", "85L", "12km/l")

const arrayVehicle =[celerio,iTen,city,innova,qSeven];

for (const elememt of arrayVehicle) {
    elememt.showDetails();
}

console.log(`------------------------- 2.Class for College -------------------------`);

class College {
    constructor(name, location, establishment, departments) {
        this.name=name;
        this.location=location;
        this.establishment=establishment;
        this.departments=departments;
    }
}
const coep=new College("COEP", "Pune", 1982, 9);
const vjti=new College("VJTI", "Mumbai", 1984, 8);
const vit=new College("VIT", "Chennai", 1990, 6);
const kit=new College("KIT", "kolhapur", 1985, 5);

function traverseObject(collegeObject) {
    for (const key in collegeObject) {
        if (Object.hasOwnProperty.call(collegeObject, key)) {
            const element = collegeObject[key];
            console.log(`${key}, ${element}`);
        }
    }
    console.log(`----------------------------------------`);
}
traverseObject(coep);
traverseObject(vjti);
traverseObject(vit);
traverseObject(kit);
