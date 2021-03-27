// Data types
let booleanVariable = true;
let numberVariable = 5;
let stringVariable = "5";
let objectVariable = { first: "Sample"};

console.log(objectVariable); // { first: "Sample"}
console.log(objectVariable.first); // Sample
console.log(objectVariable.second); // undefined

// Assign undefined to a variable
let undefinedVariable = undefined;

// A null variable
let nullVariable = null;

// Arrays
let arrayVariable = [0,1,2,3,4];
console.log(arrayVariable[5]); // 4
console.log(arrayVariable.length); // 5

// Functions
let myFunction1 = function() {
    return 'myFunction1 is called';
}
// Note: we can call myFunction1 whenever we want using myFunction1()

// Using Arrow-functions
const myFunction2 = () => {
    return 'myFunction1 is called';
}
