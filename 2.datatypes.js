"use strict"; 
//js m jab changes kiye toh taaki old js ko use kr ske without affecting isliye we use this , so it treats js cose as newer version 

/* alert (3+3) 
// ese m 6 ka error alert aa jata tha , pr kyuki now we use nodejs and not browser so error aaega isko use krne pr 
*/

console.log(3+3) // 6 , ab aa jaega console m 6 ka output , kyuki ab hum nodejs use kr rhe h

// datatypes in js
let name ="himanshi" // string datatype
let age=19 // number datatype => range 2 to power of 53
let isLoggedIn=true // boolean datatype

/* bigint datatype => range 2 to power of 63 jab number bohot zyada bdha ho tab bigint datatype use krte h , otherwise number datatype hi use krte h

null - yeah ek standalone value h , iska mtlb h ki variable h pr voh khali h

undefined - variable declare kia h pr usko koi value assign nhi ki h 

symbol - uniqueness identifier h, ki yeah unique h ya nhi uslo identify krne k liye use hota h 

object
*/

console.log(typeof "himanshi"); //string aa jaega 
console.log(typeof age);  //number aa jaega
console.log(typeof null); //object aa jaega, kyuki iska type h object
console.log(typeof undefined); //undefined he aaega 