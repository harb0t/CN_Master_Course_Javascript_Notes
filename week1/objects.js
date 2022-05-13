//-----ACTIVITY 1-----
// Let’s edit our person object to include…
// A function called sayHi and when it’s called, it
// should return “Hello my name is ${this.name}"

const person = {
    name: "Bobo",
    age: 89,
    favouriteSongs: 
    ["Inkspots: Maybe",
    "The Tweets: The Birdie Song",
    "Insect Warfare: World Extermination"
],
sayHi(){
    return `Hello, my name is ${this.name}`
}
};

console.log(person.sayHi());


//-----ACTIVITY 2-----

// Create an object called pet with the key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return a
// string saying [Your Pet Name] is eating/drinking. 

const pet = {
    name: "Clifford",
    typeOfPet: "Dog",
    age: 4,
    colour: "Red",
    eating(){
        return `${this.name} is eating`},
    drinking(){
        return `${this.name} is drinking`
        }
};

console.log(pet.eating());
console.log(pet.drinking());


const coffeeShop = {
    branch: "Clifford",
    drinks: "Dog",
    food:

    eating(){
        return `${this.name} is eating`},
    drinking(){
        return `${this.name} is drinking`
        }
};

//-----ACTIVITY 3-----

// Create an object called coffeeShop with key values of:
// branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is … with all
// items chosen with costs and total costs. 

let order = [];
const coffeeShop = {
    branch:"Tea & Stuff",
    drinksWithPrices:{"tea":1.00,"americano":2.00,"mocha":3.00,"latte":3.00,"water":0},
    foodWithPrices:{"salad":2.00,"sandwich":3.00,"tunaJacket":4.50,"grape":15.00},
    drinksOrdered(drink1,drink2){
        let drinks = Object.keys(this.drinksWithPrices);
// This is making a new array called "drinks"
// Object.keys accesses that element's string
        let drinkValues = Object.values(this.drinksWithPrices); 
// Object.values accesses that element's numeric value
        order.push(drinkValues[drinks.indexOf(drink1)]);
        order.push(drinkValues[drinks.indexOf(drink2)]);
        return `For drinks you've ordered ${drink1} and ${drink2}`;},
    foodOrdered(food1,food2){
        let foods = Object.keys(this.foodWithPrices); 
        let foodValues = Object.values(this.foodWithPrices); 
        order.push(foodValues[foods.indexOf(food1)]);
        order.push(foodValues[foods.indexOf(food2)]);
        return `For food you've ordered ${food1} and ${food2}`;
    }
}
console.log(coffeeShop.drinksOrdered("tea","mocha"));
console.log(coffeeShop.foodOrdered("salad","grape"));
let total = 0;
for(i=0;i<order.length;i++){
    total+=order[i];
}

console.log(`Your total comes to £${total}.`);

// -----------LECTURE NOTES: OBJECTS -----------

// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers:true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "hot chocolate"
//     ],

// breakfastOffer: "Free crioissant with coffee",
// lunchOffer: "Free drink with surprisingly priced sandwich",
// noOffer: "Sorry no offer"
// };


//     openCafe:()=>{
//         return "Come on in";
//     },
//     closeCafe:()=>{
//         return "We are closed, come back tomorrow!"
//     }
// };

// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());

// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time < 1500){
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }



// -------------------------

// const person = {
//     name: "Bobbo",
//     age: 48,
// }

// person.name
// console.log(person.name)

// -------------------------

// let day = "Saturday"

// const alarm = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am",
// }
// if (day == "Saturday" || (day == "Sunday")){
//     console.log(alarm.weekendAlarm)
// }else{
//     console.log(alarm.weekdayAlarm)
// }

// const person = {
//     name: "Bobo",
//     age: 101,
//     favSongs:[
//         "Carpenter Brut - Escape from Midwich Valley",
//         "Lou Reed - Perfect Day",
//         "Ratatat - Nostrand"
//     ]
// }

// console.log(person.name, person.age, person.favSongs)