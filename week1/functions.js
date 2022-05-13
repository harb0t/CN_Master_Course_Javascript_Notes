// FUNCTIONS
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

function square(number) {
    return number * number;
};

square(5);

// Output: 25

// Function Expression

const square = function (number) {
    return number * number;
};

square(5);

// Output: 25