/*datatype are divided into 2 types officially 

kis tareeke se data ko memory m rkha jata h and access kia jata h , inn 2 basics pr categorized h 

1. primitive datatype -> call by value
2. Reference (non-primitive) datatype -> call by reference

-------------primitive datatypes-----------------

7 types

1. string 
2. number
3. boolean
4. null
5. undefined
6. symbol -> unique value k liye , unique identifier
7. bigint -> badhi number k liye

----------Reference (non-primitive)---------------

Array , Objects , Functions

---------JavaScript is a dynamically typed language.--------------
This means you do not need to explicitly declare the data type of a variable
(such as string, number, or boolean) when you create it.
The engine automatically determines the type at runtime based on the value currently assigned to the variable.

*/

//symbol ko dekhte h kese krte h

const  id = Symbol("123"); //unique ban jaega ab id ki value
const id2 = Symbol("123"); //yeah bhi kyuki symbol keyword use hua h 
console.log(id===id2); 

const bigNumber = 1234567890123456789012345678901234567890n; //n lagane se ye bigint bn jata h 

// arrays , objects and function ko dekhte h , sbka datatype objects he hota h 

const heros =["ironman","spiderman","thor"]; //array

let myObj = {
    name:"himanshi",
    age:19,
}                          //object , curly braces m likhte h object ko

const myFunction = function(){
    console.log("hello world");
}                                 // function he h bus humne variable k form m likha h 

console.log(typeof myFunction); //function ka type function hota h 
console.log(typeof myObj); //object
console.log(typeof heros); //object 