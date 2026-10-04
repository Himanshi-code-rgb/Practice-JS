// ********************************** Operations ***********************************************

let value=3
let negValue= -value
console.log(negValue); //-3 aa jaega output m , kyuki humne -value kiya h

console.log(2+2);
console.log(2-2); 
console.log(2*2); 
console.log(2**3); 
console.log(2/3);
console.log(2%3);

// adding two string 
let str1="himanshi"
let str2=" Aggarwal" 
let str3 = str1 + str2
console.log(str3); //himanshi Aggarwal aa jaega output m , kyuki humne dono string ko add kiya h

console.log("1" + 2); //12 aaega, kyuki string m number add krne pr voh string m hi convert ho jaega
console.log(1 + "2"); //12 aaega
console.log("1" + "2"); //12 aaega
console.log("1" + 2 + 2); //122 aaega , string first h toh sb string m hi convert ho jaega
console.log(1 + 2 + "2"); //32 aaega, kyuki pehle 1+2 hua 3 , phir 3 ko string m convert krke 2 add kia toh 32 aa jaega , kyuki string last m h 

//not preferred but just for knowledge 
console.log(+true); //1 aa jaega output m , kyuki true ko number m convert kia h
console.log(+""); //0 aa jaega output m , kyuki empty string ko number m convert kia h

let gameCounter=100
gameCounter++;
console.log(gameCounter); //101 aa jaega output m , kyuki humne gameCounter ko increment kia h

let gameCounterr=100
++gameCounterr;
console.log(gameCounterr); //101 aa jaega output m , kyuki humne gameCounter ko increment kia h

// from mdn website (prefix nd postfix)
let x = 3;
const y = x++; //postfix
console.log(x); //4 , kyuki increment hua h 
console.log(y); //3, pehle value aati h 

let a = 3;
const b = ++a; //prefix
console.log(a); //4 , value increment ho chuki h 
console.log(b); //4 , pehle plus h isliye increment wali value aaegi

