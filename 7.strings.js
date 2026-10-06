// ----------- adding two strings ----------------

const name = "Himanshi"
const repoCount = 50
console.log(name + repoCount + "value"); //output -> Hello50value , not recommended to add like this

// aaj ki date m kese hota h 
console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);
//isme hum ${.__} dot lga k koi method bhi use kr skte h jaise ki ${name.toUpperCase()} 



//-------------- string declaration using objects --------------

const gameName = new String('Pubg')
console.log(gameName); //output -> [String: 'Pubg'] 

// isme 0th index pr p , 1 pr u (basically key value pair bnta h),and sath m kaafi saree methods bhi milte h . lga k use kr skte h
console.log(gameName[0]); //output -> P

console.log(gameName.__proto__); //output ->  {} object milta h 

//length
console.log(gameName.length); //output -> 4

//uppercase
console.log(gameName.toUpperCase()); //output -> PUBG

//charAt
console.log(gameName.charAt(3)); //output -> g

//indexOf
console.log(gameName.indexOf('g')); //output -> 3

// Substring
const myName = "Himanshi"
const newString = myName.substring(0,4);
console.log(newString); //output -> Hima  , last se ek kum count hoga 

//slice
const newString2 = myName.slice(-7,4); //slice m hum negative index bhi de skte h 
console.log(newString2); // ima aaega , -7 last se start hua and start se 3 index tak 

//trim
const newString3 = "    Himanshi    "
console.log(newString3.trim()); //output -> Himanshi , trim se extra space remove ho jata h dono side se
console.log(newString3);

//replace
const url = "https://www.himanshi.com/himanshi%20agg"
console.log(url.replace("%20","-")); // bus %20 k jagah - aa jaega

//includes
console.log(url.includes("himanshi")); // true aaega , yaha hum puch rhe h ki kya yeah h uske andr

//split
const name2 = "Himanshi-agg-code"
console.log(name2.split("-")); // yeah array k form m dega , jaha - h ussey split krdega




