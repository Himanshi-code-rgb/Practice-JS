const score =400
console.log(score); // 400 aa jaega o/p m

const balance = new Number(400) // yaha humne explicitly define kia h ki yeah number h 
console.log(balance); // [Number: 400] ese aaega isliye o/p m 

// ab since we have used object we can use methods on it

// convert to string
console.log(balance.toString()); // 400 aa jaega o/p m
// ab kyuki yeah string h toh we can use string m joh humne methods use kie the objects wale m 
console.log(balance.toString().length); // 3 

//toFixed
console.log(balance.toFixed(2)); // 400.00 aa jaega o/p m , 2 decimal fixed places k liye

//toPrecision
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); // 124 aa jaega o/p m , mtlb decimal se pehle 3 digit tak ki precise value dega 
// toh isne round off krdia taaki precise value de ske
console.log(otherNumber.toPrecision(4)); // 123.9

//toLocaleString
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000
//basically 100000... ese inko pdhna is tough toh iss method se easily read kr pate h 
//en-IN mtlb indian standards , bina iske us standards m hota h 

//isme max and min bhi hota h , ki kitni maximum value hum de skte h vice-versa
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

// ++++++++++++ maths ++++++++++++++++++++++++++++++++++++++

console.log(Math); // object [Math] {} 

//abs
console.log(Math.abs(-4)); //4 aaega , isme bus -ve value +ve m hoti h convert 
console.log(Math.abs(4)); //4 aaega , +ve value m koi change nhi hoga

//round
console.log(Math.round(4.6)); //5 aaega , jese normally round off hota h vese he hoga
console.log(Math.ceil(4.6)); //5 aaega , ceil mtlb upar wali value
console.log(Math.floor(4.9)); //4 aaega , floor mtlb neeche wali value

//max and min value from array
console.log(Math.min(3,5,1,6,7,8)); //1
console.log(Math.max(3,6,1,9,6,7)); //9

//random
console.log(Math.random()); //0-1 k beech m he aaegi koi bhi random value 
// har bari alag random values aati h 
console.log((Math.random()*10)+1); // decimal se ek aagey shift krdia value ko isliye *10 , 1 add kia h taaki 0 na aaye , 1-9 
console.log(Math.floor(Math.random()*10)+1); //ab yeah decimal m values nhi dega , 1 2 ese ese aaega o/p

//
const min = 10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min); // 10-20 k beech m koi bhi random value aaegi 
// max-min for range , +1 taaki zero na aaye , +min taaki 10 se start ho
//ab random values jese 11 14 17 ese aaegi not less than 10 and not more than 20 