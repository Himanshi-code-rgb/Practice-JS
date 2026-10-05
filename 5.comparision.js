// basic comparison operators

console.log (2 > 1); //true aa jaega output m
console.log (2 >= 1); 
console.log (2 < 1);
console.log (2 == 1);
console.log (2 != 1);

//different data types comparison
console.log("2">1); //true aa jaega output m
console.log("02" > 1); //true aa jaega output m

//pr yeah unpredictable h , we can't predict the output of this comparison

console.log(null>0); // yaha convert hoga null 0 m but since it is not equal , so false aa jaega output m
console.log(null==0);
console.log(null>=0); //yaha >= h mtlb 0=0 isliye true

//the reason is == and comaprison operators work differently.
//comparison operators convert null to a number, treating it as 0.that's why null>=0 is true, but null>0 is false.

console.log(undefined == 0); //false jhe dega hmesha 
console.log(undefined > 0); //false
console.log(undefined < 0); //false

//avoid krte h ese comparisons ko 

// strict check ===

console.log(2 === 2); //true , yeah convert nhi krta datatype ko , yeah bus check krta h , == convert krdeta h 
console.log("2" == 2); //true , yeah convert krdeta h datatype ko
console.log("2" === 2); //false
