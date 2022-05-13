// ACTIVITY 1
// Take this code and turn it into arrow function
// syntax:

const factorial = (n) => {
    if ((n === 0 ) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(33));

// --------------------------------------------

// ACTIVITY 2

// Edit the below snippet to include two parameters and a  running order count updated when the function is called:

let orderCount = 0;

const takeOrder = (toppingOne, toppingTwo) => {
    console.log(`Pizza with ${toppingOne} and ${toppingTwo}`);
    return orderCount++;
}

takeOrder("pineapple", "ham");
takeOrder("tuna", "pickle");
takeOrder("octopus", "sweetcorn");

console.log(orderCount);

// --------------------------------------------

// ACTIVITY 3

// Cash machine time! 
// Let’s create one that:
// > Dispenses cash if your pin number is correct and your
// balance is equal to, or more than, the amount you’re
// trying to withdraw!

const correctPin = 1010
let bankBalance = 500

function bankTrans (pinEnter, withdrawAmount) {
if (pinEnter == correctPin) {
        if (withdrawAmount <= bankBalance){
            bankBalance = (bankBalance-withdrawAmount);
            console.log(`You have withdrawn ${withdrawAmount}. Your remaining balance is ${bankBalance}`);
        } else if (withdrawAmount > bankBalance){
            console.log(`Your withdraw amount exceeds your balance`);
    }
    }
else {console.log("You've entered the incorrect pin number")}
    }

bankTrans(3498, 200)
bankTrans(1010, 50)
bankTrans(1010, 1000)

// -----------------LECTURE NOTES: FUNCTIONS-----------------
// --------------------------------------------
// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }

// pressGrindBeans();
// --------------------------------------------

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }
// pressGrindBeans();

// --------------------------------------------



// parameters in line below 
// const cashWithDrawal = (amount, accum) => {
//     console.log (`Withdrawing ${amount} from account ${accum}`);
// }

// cashWithDrawal(300, 50449921);
// cashWithDrawal(30, 50449921);
// cashWithDrawal(200, 50447921);
// arguments in line above

// --------------------------------------------

// let accnumber = 50449921;

// const cashWithDrawal = (amount, accum) => {
//     console.log (`Withdrawing ${amount} from account ${accum}`);
// }

// cashWithDrawal(300, accnumber);
// cashWithDrawal(30, 50449921);
// cashWithDrawal(200, 50447921);

// --------------------------------------------

// what is this? why? return? what?
// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp(7,3);
// console.log(addUp(2,5));

// --------------------------------------------

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };

// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// };

// console.log("The temperature is " + getFahrenheit(15) + "°F");

// Output: The temperature is 50 °F

// --------------------------------------------
// Function Declaration

// function square(number) {
//     return number * number;
// };

// square(5);

// // Output: 25

// // Function Expression

// const square = function (number) {
//     return number * number;
// };

// square(5);

// // Output: 25