// console.log("All around the world".charAt(7).toUpperCase());

// charAt picks out a character

// -------------------------------

// Defining varables
// let = used for declaring a value that CAN be changed
// const used for declaring a value that CANNOT be changed. Const = Constant
// var = used for declaring a value that CAN be changed. (Legacy method)

// -------------------------------

// let i = 10;
// i = i + 2;

// console.log(i);

// -------------------------------

// personal note: to have code run have cosole.log(); with variable inbetween ()

// -------------------------------

// The below can also be used instead
// i +=2;

// -------------------------------

// let favouriteDrink = "coffee";

// console.log("My favourite drink is " + favouriteDrink);

// -------------------------------

// personal note: research ‘Template Literals’ 

// let name = 'Chris'
// let age = 27
// let favDrink = 'Coffee'

// console.log("Hi, my name is " +name + ". I am" +age + " and my favourite drink is " +favDrink+".")
// neaten up with Template Literals. Use backticks (`) instead of speech marks (") with ${} containing the variable

// console.log(`Hi, my name is ${name}. I am ${age} and my favourite drink is ${favDrink}.`)

// -------------------------------

// let name = 'Dom'
// let age = 2543
// let favDrink = 'mango juice'

// console.log("Hi, my name is " +name + ". I am" +age + " and my favourite drink is " +favDrink+".")
// neaten up with Template Literals. Use backticks (`) instead of speech marks (") with ${} containing the variable
// console.log(`Hi, my name is ${name}. I am ${age} and my favourite drink is ${favDrink}.`)

// -------------------------------

// camelCase is industry convention for naming. Second word has a capital.

// -------------------------------

// ACTIVITY 1

// let name = "Mr. Bimble"
// let age = 101
// let favColour = "Teal"

// console.log(`Hi, my name is ${name}. I am ${age} and my favourite colour is ${favColour}.`)

// name = "Zoro the Grand"
// age = 2
// favColour = "Red"

// console.log(`Hi, my name is ${name}. I am ${age} and my favourite colour is ${favColour}.`)

// ACTIVITY 2
// let breakfast = "Fried eggs"
// let lunch = "Tomato soup"
// let dinner = "Spaghetti bolognese"

// console.log(`Breakfast: ${breakfast}\nLunch: ${lunch}\nDinner: ${dinner}.`)

// breakfast = "Jam on toast"
// lunch = "Scones"
// dinner = "Meat broth"

// console.log(`\n\nTOMORROW'S DELIGHTS\n-------------\nBreakfast: ${breakfast}\nLunch: ${lunch}\nDinner: ${dinner}.`)

// ACTIVITY 3
// personal note: research date system
// today=new Date();
// var cmas=new Date(today.getFullYear(), 9, 17);
// if (today.getMonth()==9 && today.getDate()>17) 
// {
// cmas.setFullYear(cmas.getFullYear()+1); 
// }  
// var one_day=1000*60*60*24;
// console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
// " days left until my birthday!");


// Gareth's Technique

// let today = new Date;
// let todayDate = today.getDate();
// let todayMonth = today.getMonth() +1;


// let birthday = new Date(1991, 11, 20);
// let birthdayDate = birthday.getDate();
// let birthdayMonth = birthday.getMonth() +1;


// let remainingMonths = birthdayMonth - todayMonth;
// let remainingDays = birthdayDate - todayDate;

// console.log(I was born on ${birthday})
// console.log(There are ${remainingMonths} months and ${remainingDays} days remaining until it is my birthday);

// ACTIVITY 4
let space1 = " "
let space2 = " "
let space3 = " "
let space4 = "x"
let space5 = "o"
let space6 = " "
let space7 = " "
let space8 = " "
let space9 = " "

console.log(`
${space1}${space2}${space3}|${space1}${space2}${space3}|${space1}${space2}${space3}
${space1}${space4}${space6}|${space1}${space5}${space6}|${space7}${space8}${space9}
${space7}${space8}${space9}|${space7}${space8}${space9}|${space7}${space8}${space9}
-----------
${space1}${space2}${space3}|${space1}${space2}${space3}|${space1}${space2}${space3}
${space1}${space4}${space6}|${space1}${space4}${space6}|${space7}${space8}${space9}
${space7}${space8}${space9}|${space7}${space8}${space9}|${space7}${space8}${space9}
-----------
${space1}${space2}${space3}|${space1}${space2}${space3}|${space1}${space2}${space3}
${space1}${space5}${space3}|${space7}${space8}${space9}|${space1}${space2}${space3}
${space7}${space8}${space9}|${space7}${space8}${space9}|${space7}${space8}${space9}
`)


