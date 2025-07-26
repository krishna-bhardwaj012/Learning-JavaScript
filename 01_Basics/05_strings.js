const name = "sachin"
const repoCount = 20



//console.log(name + repoCount + "value");

console.log(`my name is ${name} and my repo count is ${repoCount}`); // template literals
//console.log(`2` === 2); // false (strict equality, different types)


const gameName = new String('sachin')
//console.log(typeof gameName); // object (because it's a String object, not a primitive string)


//console.log(gameName[0]);

//console.log(gameName.__proto__);
console.log(gameName.length);


console.log (gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf('c'));


const newString = gameName.substring(0 , 4);
console.log(newString);


const anotherString = gameName.slice(-8 , 4);
console.log(anotherString);


const newStringOne = "     Sachin    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://sachin.com/sachin%20Bhardwaj"

console.log(url.replace('%20', '-'))

console.log (url.includes('sachin'));


console.log (gameName.split('_'));
