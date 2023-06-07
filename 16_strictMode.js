
'use strict'
// city = "Pune";             // declaring variable without keyword is not allowed in 'use strict'
// console.log(city);

const person = {             // declaring object without keyword is not allowed in 'use strict'
    name: "Stew",
    age: 57,
    country: "US"
}
console.log(person);

// delete person;             //delete not allowed in 'use strict'
function show(num, num){      // same varaiable not allowed in 'use strict'
    console.log(num, num);
}
show(33, 44);
