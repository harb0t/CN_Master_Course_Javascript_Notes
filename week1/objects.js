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

//-----Activity 1-----
// Let’s edit our person object to include…
// A function called sayHi and when it’s called, it
// should return “Hello my name is ${this.name}"

// const person = {
//     name: "Bobo",
//     age: 89,
//     favouriteSongs: 
//     ["Inkspots: Maybe",
//     "The Tweets: The Birdie Song",
//     "Insect Warfare: World Extermination"
// ],
// sayHi(){
//     return `Hello, my name is ${this.name}`
// }
// };

// console.log(person.sayHi());


//-----Activity 2-----

// const pet = {
//     name: "Clifford",
//     typeOfPet: "Dog",
//     age: 4,
//     colour: "Red",
//     eating(){
//         return `${this.name} is eating`},
//     drinking(){
//         return `${this.name} is drinking`
//         }
// };

// console.log(pet.eating());
// console.log(pet.drinking());


// const coffeeShop = {
//     branch: "Clifford",
//     drinks: "Dog",
//     food:

//     eating(){
//         return `${this.name} is eating`},
//     drinking(){
//         return `${this.name} is drinking`
//         }
// };

const coffeeShop = {
    branch: "Manchester",
    drinks: {
        "Tea": 2,
        "coffee": 2.50,
        "Hot chocolate": 3
    }, 
    food: {
        "Chips": 1,
        "Burger": 4,
        "Pie": 3
    }
    //foodOrdered(){}
    //drinksOrdered(){}
    };


console.log(coffeeShop.food["Burger"]);  // Cant access for some reason? 