const accountId = 144553
let accountEmail = "gitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed 

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Benguluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in blcok scope and function scope

*/

console.table([accountId,accountEmail, accountPassword , accountCity])