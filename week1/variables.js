// ACTIVITY 1
    // Create a program that stores someone’s name,
    // age and favourite colour and log it to the console
    // in a complete sentence using Template Literals.

let name = "Mr. Bimble"
let age = 101
let favColour = "Teal"

console.log(`Hi, my name is ${name}. I am ${age} and my favourite colour is ${favColour}.`)

//STRETCH
    // Update all of your variables and write out a
    // new sentence underneath your original.

name = "Zoro the Grand"
age = 2
favColour = "Red"

console.log(`Hi, my name is ${name}. I am ${age} and my favourite colour is ${favColour}.`)

// -----------------------------------------------------

// ACTIVITY 2
    // Create a program that stores what you eat today
    // for breakfast, lunch and dinner. Log these to the
    // console. 

let breakfast = "Fried eggs"
let lunch = "Tomato soup"
let dinner = "Spaghetti bolognese"

console.log(`Breakfast: ${breakfast}\nLunch: ${lunch}\nDinner: ${dinner}.`)

// STRETCH
    // Update each of these variables to what you
    // will eat tomorrow. Log these to the console.

breakfast = "Jam on toast"
lunch = "Scones"
dinner = "Meat broth"

console.log(`\n\nTOMORROW'S DELIGHTS\n-------------\nBreakfast: ${breakfast}\nLunch: ${lunch}\nDinner: ${dinner}.`)

// -----------------------------------------------------

// ACTIVITY 3
    // Create a program that calculates the number
    // of days from today to your birth date.

today=new Date();
var cmas=new Date(today.getFullYear(), 9, 17);
if (today.getMonth()==9 && today.getDate()>17) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until my birthday!");


// -----------------------------------------------------

// ACTIVITY 4
    // > Create 9 variables: space1, space2… space9.
    // > Assign either the value ‘x’,’o’,’ ‘, to each of
    // these variables.
    // > Insert the variables into your board using the
    // ${varName} syntax and make it look like the
    // displayed board.

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





// --------------LECTURE NOTES--------------

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