
const person = {
    height: "6feet",
    name: "Bill gates",
    city: "Pune",
    age: 54,
    isMarried: true
}

const address = {
    street: "Wakad Road",
    landmark: "Near Datta Mandir",
    city: "Mumbai",
    pin: 431220, 
    state: "MH",
    country: "India"
} 

const marks = {
    english: 95,
    programming: 100,
    math: 89
}

const newObject = {

}

// Object.assign(targetObject, source1, source2, source3);

Object.assign(person, address);     // Copy address object into the person object 

Object.assign(newObject, person, address, marks) // Copy person, address and marks objects into new Object - newObject

const mergedObject = Object.assign({ }, address, marks); // Copy address and marks objects into the new object - mergedObject

console.table(person);
console.table(newObject);
console.table(mergedObject);
