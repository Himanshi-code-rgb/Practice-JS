// conversion in number

let score="33"
console.log(typeof score); //string
console.log(typeof(score)); //string (yeah bus as a method h , same h sb)
let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number

// yaha 33abc h toh kya yeah convert hoga?
let marks="33abc"
let hello = Number(marks)
console.log(typeof hello); //number he aaega output m pr yeah number nhi h toh isliye nan aaega jab print krenge 
console.log(hello); //NaN (Not a Number) because 33abc is not a valid number yeah aaega output m 

// ab null k sath dekhte h 
let m= null
let h = Number(m)
console.log(typeof h); //object aaega output m , kyuki null ka type h object
console.log(h); // 0 aa jaega output m , kyuki null ko number m convert krne pr 0 aa jaega

// ab undefined k sath dekhte h 
let mi= undefined
let hi = Number(mi)
console.log(typeof hi); //number aaega output m
console.log(hi); // NaN aa jaega output m 

// ab boolean k sath dekhte h 
let mii= true
let hii = Number(mii)
console.log(typeof hii); //number aaega output m
console.log(hii); // 1 aa jaega output m , kyuki true h yaha 

// string k sath 
let marksss="himanshi"
let helloo = Number(marksss)
console.log(typeof helloo); //number he aaega output m
console.log(helloo); //NaN (Not a Number) because himanshi ko hum number m convert nhi kr skte h 

// 33 => 33
//"33abc" => NaN
//true => 1 , false => 0

// conversion in boolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //true aa jaega output m

// conversion in boolean
let isLoggedInn = ""
let booleanIsLoggedInn = Boolean(isLoggedInn)
console.log(booleanIsLoggedInn); //false aa jaega output m , empty string m

// conversion in boolean
let isLoggedIno = "himamshi"
let booleanIsLoggedIno = Boolean(isLoggedIno)
console.log(booleanIsLoggedIno); //true aa jaega output m

// 1=> true , 0 => false
//"" => false , "himanshi" => true

//to string conversion
let someNumber=33
let stringNumber = String(someNumber)
console.log(stringNumber); //33 aaega output m 
console.log(typeof stringNumber); //string aa jaega output m 

