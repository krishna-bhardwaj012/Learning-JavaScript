
// let score = "33abc"

// console.log(typeof score); // number
// console.log(typeof (score));

// let valueInNumber = Number(score); // convert string to number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN (Not a Number) because "33abc" cannot be fully converted to a number

// let score = null
// console.log(typeof score); // null is of type object (this is a bug in JS, but it is how it is handled in JS.)
// let valueInNumber = Number(score); // convert null to number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // 0 (null is converted to 0 in number conversion


// let score = undefined
// console.log(typeof score); // undefined is of type undefined
// let valueInNumber = Number(score); // convert undefined to number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN (undefined is converted to NaN in number conversion)
// console.log(valueInNumber + 3); // NaN + 3 = NaN (any operation with NaN results in NaN)

// let score = true

// console.log(typeof score); // boolean is of type boolean
// let valueInNumber = Number(score); // convert boolean to number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // 1 (true is converted to 1 in number conversion)
// let score2 = false
// console.log(typeof score2); // boolean is of type boolean
// let valueInNumber2 = Number(score2); // convert boolean to number
// console.log(typeof valueInNumber2); // number
// console.log(valueInNumber2); // 0 (false is converted to 0 in number


// let score = "sachin"
// console.log(typeof score); // string is of type string
// let valueInNumber = Number(score); // convert string to number
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // NaN (Not a Number) because "sachin
// cannot be converted to a number)


// let isLoggedIn = 1// 1 means true, 0 means false

// let booleanIsLoggedIn = Boolean(isLoggedIn); // convert number to boolean
// console.log( booleanIsLoggedIn); // boolean

// let isLoggedIn = "" // ""=> false in boolean conversion
// let booleanIsLoggedIn = Boolean(isLoggedIn); // convert empty string to boolean

// let booleanIsLoggedIn = Boolean(isLoggedIn); // convert string to boolean
// console.log(booleanIsLoggedIn); // boolean

// let isLoggedIn = "Sachin" // non-empty string is considered true in boolean conversion
// let booleanIsLoggedIn = Boolean(isLoggedIn); // convert string to boolean
// console.log(booleanIsLoggedIn); // boolean


// let someNumber = 33

// let stringNumber = String(someNumber); // convert number to string
// console.log(stringNumber); // "33"
// console.log(typeof stringNumber); // string


// ******************** Operations ***********************

// let value = 3
// let negValue = -value; // negation operator
// console.log(negValue); // -3

// let str1 = "hello"
// let str2 = " sachin"

// let str3 = str1 + str2; // string concatenation
// console.log(str3); // "hellosachin"

// console.log("1" + 2); // "12" (string concatenation, number 2 is converted to string)
// console.log(1 + "2"); // "12" (string concatenation, number 1 is converted to string)
// console.log(1 + 2); // 3 (number addition, both are numbers)
// console.log("1" + 2 + 2); // "122" (string concatenation, number 2 is converted to string)
// console.log(1 + 2 + "2"); // "32" (number addition first, then string concatenation)
// console.log("1" - 2); // -1 (string "1" is converted to number, then subtraction)
// console.log("1" * 2); // 2 (string "1" is converted to number, then multiplication)

// console.log(true) // boolean values are not directly converted to numbers, but can be converted using Number()

//  console.log(+true) // 1 (boolean true is converted to number 1)
//  console.log(+false) // 0 (boolean false is converted to number 0)
//   console.log(+"") // 0 (empty string is converted to number 0)

  // let num1, num2, num3

  // num1 = num2 = num3 = 2 + 3

//   let gameCounter = 100
//   gameCounter++;
//   console.log(gameCounter); // 101 (postfix increment, value is incremented after this line)



