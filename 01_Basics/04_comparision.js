// console.log("2">1); // true (string "2" is compared as a number) // boolean
// console.log("02"> 1); // true (string "2" is compared as a number)

console.log(null >0); // false (null is converted to 0, so 0 > 1 is false)
console.log(null == 0); // false (null is not equal to 1)
console.log(null>=0); // true (null is converted to 0, so 0 >= 0 is true)

console.log(undefined>0); // false (undefined is not a number, so comparison with 0 is false)
console.log(undefined == 0); // false (undefined is not equal to 0)
console.log(undefined >= 0); // false (undefined is not a number, so comparison with 0 is false) 


// ===

console.log("2"===2); // false (strict equality, different types)
console.log("2"==2); // true (loose equality, string is converted to number)