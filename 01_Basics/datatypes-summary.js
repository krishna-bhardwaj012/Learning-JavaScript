// Primitive

// 7 types : string, Null, Undefined, Number, Boolean, Symbol, BigInt

// Refrence type(Non Primitibve)

// Array, objects,Functions




const score = 100
const scoreValue = 100.3


const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false, because symbols are unique even if they have the same description

//const bigNumber = 34561356789234n // BigInt type, can represent large integers


const heros = ["Shiva", "Ram", "Krishna"]; // Array is a special type of object in JavaScript
let myObj = {
    name: "Sachin",
    age: 22,
}
const myFunction = function(){
    console.log("Hello, this is a function!");
}

console.log(typeof score); // number
/*console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof outsideTemp); // object (this is a known bug in JavaScript, null is of type object)
console.log(typeof userEmail); // undefined (userEmail is declared but not initialized)
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol
console.log(typeof heros); // object (arrays are a type of object in JavaScript)

console.log(typeof myObj); // object
console.log(typeof myFunction); // function (functions are a special type of object in JavaScript
*/

