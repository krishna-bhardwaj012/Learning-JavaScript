const accountId = 1234567890
let accountEmail = "sachin@google.com"
var accountPassword = "1234567890"
accountCity = "New Delhi"   
let accountState;

// accountId =2  (error isliye aa raha hai kyunki const variable ko change nahi kar sakte) 

/*
Prefer not to use var
because of issue in block scope and functional scope 

*/

accountEmail = "hc@hc.com"
accountPassword = "1234567890"
accountCity = "Mumbai";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// {var a = 10}// let and const are hoisted but not initialized
// console.log(a)