// ACTIVITY 1
// Create a variable called age. Write an if statement
// that logs “Yes I can serve you” if the age is greater
// than 17 and else logs “You aren’t old enough”.

let age = 5

if (age > 17) {
        console.log("Yes I can serve you");
    }

    else {
        console.log("You aren’t old enough");
    }

// // STRETCH
let age = 23;
let country = "UK";


if (age > 17 && country == "UK") {
    console.log("Yes I can serve you");
}

else {
    console.log("I can't serve you");
}

// -----------------------------------------------------

// ACTIVITY 2

// Create a variable for any pizza topping.
// Create a switch statement, if the topping is one of your
// favourite ingredients, log to the console “These are
// important ingredients for my pizza.” If you don’t mind
// having Pepperoni for example log to the console “I don’t
// mind having ${topping} on my pizza.
// Finally, for any topping you don’t like log “${topping}
// should not be on a pizza.”


let topping = "Dogfood"

switch(topping){
    case "ham":
    case "green pepper":
        console.log(`These are important ingredients for my pizza`);
        break;
    case"pineapple":
        console.log(`${topping} should not be on a pizza.`);
        break;
    default:
        console.log(`I don't mind having ${topping} on my pizza`)
}

// -----------------------------------------------------
// ACTIVITY 3
    // Create a variable called password.
    // Check how many letters are in the password, if there are 
    // less than 8, log to the console that the password is too
    // short. Otherwise log the password to the console. 


let password = "bibble";
let length = password.length;

if (length < 8) {
    console.log("Your password needs to be 8 or more characters long");
}
else if (length > 7) {
    console.log("This password is acceptable");
}

// -----------------------------------------------------
// ACTIVITY 4
    // Create a variable called num.
    // Check if the variable is divisible by 3 or 5. If it
    // is, log “This number is divisible by 3 or 5”.
    // Otherwise log something else. 

let num = 2;

if (num % 3 === 0 || num % 5 === 0) {
    console.log("This number is divisible by 3 or 5");
}
else {
    console.log("This number is not divisible by 3 or 5");
}

// -----------------------------------------------------
// ACTIVITY 5
    // Create a variable called num.
    // If num is divisible by 3 log “fizz” to the console, if it’s divisible by
    // JS 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log
    // “fizz buzz” to the console. Otherwise log num to the console.

let num = 3;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizz buzz");
}
else if  (num % 3 === 0) {
    console.log("fizz");
}
else if (num % 5 === 0) {
    console.log("buzz");
}
else {
    console.log("This number is not divisible by 3 or 5");
}

// -----------------------------------------------------
// ACTIVITY 6
    // Create a variable called num.
    // Check if the number is a palindrome (looks the
    // same forward as it does backwards e.g. 1001 or
    // 20202).

let num = 7007;
let numString = num.toString(); 
let reverseNumString = numString.split('').reverse().join('');

if (num == reverseNumString){
    console.log(`Yes ${num} is a palindrome`)
} else {
    console.log(`No ${num} is not a palindrome`)
}

// -----------------------------------------------------
// ACTIVITY 7
    // Create a variable called time, a variable called placeOfWork
    // and a variable called townOfHome. Create an if statement that
    // logs to the console where someone is at times of the day. E.g. if
    // the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work. 

let time = 9
let placeOfWork = "Balloon Factory"
let townOfHome = "Manchester"

if (time == 7) {
    console.log(`I'm home in ${townOfHome}`)
}
else if (time == 8) {
   c
}
else if (time == 9) {
    console.log(`I'm at ${placeOfWork} doing all the business`)
}
else {
    console.log("I'm somewhere else buddy")
}

// -----------------------------------------------------
// ACTIVITY 8 
    // Take the string
    // “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
    // gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the
    // index of a last vowel in the string.

let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
let vowelArr = ['a', 'e', 'i', 'o', 'u'];
let highestIndex =0;
for (let i = 0; i < vowelArr.length; i++){
    index = string.lastIndexOf(vowelArr[i]);
if (index >= highestIndex ){
    highestIndex = index;
    lastVowel = vowelArr[i];
}
}

console.log(lastVowel); 


// -----------------------------------------------------
// ACTIVITY 9
    // Create a variable called word that takes a string. Create
    // an if statement that checks if the last letter is the same as
    // the first. If it is return true, otherwise return false. 

let word = "bibble";
let wordLast = word.charAt(0);
let wordFirst = word.slice(-1);

if (wordFirst === wordLast) {
        console.log("True")
}
else {
    console.log("Flase")
}


// -----------------------------------------------------
// ACTIVITY 10
    // Create two variables called num1 and num2.
    // Create an if statement that checks if the result of the
    // sum is even. If it is return the number, otherwise return
    // the numbers multiplied together.

let num1 = 3;
let num2 = 2;
let sum = (num1+num2);
let num3 = (num1*num2);

if (sum % 2 == 0){
    console.log(`${sum}`)
}
else {
    console.log(`${num3}`)
}



// -----------------LECTURE NOTES: If Else Switch-----------------


// let weather = "sunny";

// if (weather == "sunny") {
//     console.log("Well, I better wear some suncream!")
// } else if (weather == "rainy") {
//     console.log("Better take an umbrella")
// } else {
//     console.log("Hmmm, it could go either way!")
// }

// no idea
// == Equal Checks if the values are equal regardless of type
        // Type def = type of data else.g. string, data, boolan
// === Checks if the values and type are equal.

// != Not Equal Checks if the values are not equal regardless of type.
// !== Strict Not Equal Checks if the values and type are not equal.

// if (1 === "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// what????????????
// if (1 != "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }


// let place = "Manc";
// let weather = "cloudy";

// if (place == "Manc" && weather == "Sunny") {
//     console.log("Check again");
// }
// else if (place == "Manc" && weather == "Rain") {
//     console.log("obvs");
// }
// else {
//     console.log("What it isn't raining?");
// }


// Switch - no idea / whats case? / whats break? / default?

// let car = "Peugeot"

// switch(car){
//     case "Ford":
//     case "GM":
//         console.log("You've got an American car!");
//         break;
//     case"Peugeot":
//     case "Citroen":
//         console.log("You've got a French boy!");
//         break;
//     case "Honda":
//     case "Toyota":
//     case "Suzuki":
//         console.log("Japanse cars are dead quiet!");
//         break;
//     case "Mercedes":
//         console.log("You are proper posh German!");
//         break;
//     case "Hyundai":
//     case "Kia":
//         console.log("Sount korean cars are getting popular!");
//         break;
//     default:
//         console.log("Tour car is no in the top ten companies in the world!")
// }