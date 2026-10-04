const accountId = 72736376
// accountId = 12 not allowed as it is constant 
// console.log(accountId)

let accountEmail= "himanshiagg18@gmail.com"
// we use let nowadays

var accountPassword = "123456"
/* prefer not to use var
because it has function scope and not block scope
*/

accountCity = "Delhi"
// without variable k aagey kuch likhe variable ki memory m jagah le skte h , i.e variable ko declare krke uski value assign kr skte h 

accountEmail = "rajiv@gmail.com"
accountPassword = "1244"
accountCity = "Noida"

let accountState;
// agar hum declare krke chod dete h and no value assign to js ussey undefined maanti h 


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
// instead of console.log we can use console.table to print the values in table format

const accountCountry = "India"
