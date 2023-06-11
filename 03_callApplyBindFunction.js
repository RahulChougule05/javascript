
const person = {
    name: "Stew",
    age: 54
}


function sayHello(company, role) {
    console.log(` ${person.name} ${person.age}  ${company} ${role}`);
}
console.log(`===== call() =====`);
sayHello.call(person, "Apple", "CEO");

console.log("===== apply() =====");
sayHello.apply(person, ["Apple" , "CEO"] );

console.log("===== bind() =====");
let funRef = sayHello.bind(person);
funRef("Apple" , "CEO" );
