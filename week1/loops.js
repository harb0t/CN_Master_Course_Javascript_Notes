// -----------------------------------------------------

// ACTIVITY 1
    // Create an array that lists your favourite films, up to
    // 5 elements.
    // Add 2 more using a method.
    // Use a loop to cycle through the array

    let favFilms =[
        "Withnail & I",
        "Dark Crystal",
        "Time Bandits",
        "Amélie",
        "Spirited Away"
        
        ];
    
    favFilms.push("Hateful 8", "Return to Oz")
    
    
    
    for(let i = 0; i < favFilms.length; i++){
        console.log(favFilms[i]);
    }
    
    // -----------------------------------------------------
    
    // ACTIVITY 2
        // Generate 6 random numbers between 1-50 and log them to the console.
    
    let ranNum = [];
    while(ranNum.length < 6){
        let r = Math.floor(Math.random() * 50) + 1;
        if(ranNum.indexOf(r) === -1) ranNum.push(r);
    }
    console.log(ranNum);
    
    // -----------------------------------------------------
    
    // ACTIVITY 3
        // If we can create a loop to put 0-9 on the screen, how
        // can we count from 9-0? Create a program that does
        // this.
    let numList = [];
    
    for(let i = 9; i >= 0; i--){
        numList.push(i);
        }
    console.log(numList);
    
    // -----------------------------------------------------
    
    // ACTIVITY 4
        // Displays 4 films stored in an array. JS
        // Use a for loop to show each film in the array.
        // Use an if statement to check if the 3rd film in the array is
        // Ghostbusters.
        // If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo!
        // we want Ghostbusters!
    
    let favFilms =[
        "Withnail & I",
        "Dark Crystal",
        "Time Bandits",
        "Amélie",
        ];
    
    for(let i = 0; i <favFilms.length; i++){
        console.log(favFilms[i]);
    }
    
    if (favFilms[2] === "Ghost Busters"){
        console.log(/n"Yay it’s Ghostbusters")
    }
    else{
        console.log("Boo! We want Ghostbusters!")
    }
    
    // -----------------------------------------------------
    
    // ACTIVITY 5
        // Generate a random number between 1 and 30
        // six times. For each random number generated, check if
        // this number of divisible by 7 or not.
        // Log out a message to the console if it is divisible
        // by 7 or not. 
    
    let num = [];
    for(let i = 0; i < 6; i++){
        let genNum = Math.floor((Math.random() * 30) + 1); 
        if(genNum % 7 == 0){
            console.log(`${genNum} is divisible.`);
        } else{ 
            console.log(`${genNum} is not divisible.`)
        }
    }
    
    // -----------------------------------------------------
    
    // ACTIVITY 6
        // Imagine you’re a programmer for a social media platform! You have
        // been tasked with building a prototype for a mutual followers program.
    
        // > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers.
        // In these arrays place 4 names as strings. Make sure there are 2 names
        // that are in BOTH arrays.
        // > Using a nested loop iterate over both arrays and console.log out the
        // matching follower.
    
    let bobsFollowers =[
        "Jenny Donikkle",
        "Fredo Pistachio",
        "Ali Tinboi",
        "Natasha Banjosmith",
    ];
    let hannahsFollowers =[
        "Nancy McPickle",
        "Fredo Pistachio",
        "Ben Hoover",
        "Natasha Banjosmith",
    ];
    for(i=0;i<bobsFollowers.length;i++){
        for(let j=0;j<hannahsFollowers.length;j++){
            if(bobsFollowers[i] == hannahsFollowers[j]){
                console.log(`${bobsFollowers[i]} likes Hannah and Bob`);
                continue;
            }
        }
    }
    
    // -----------------------------------------------------
    
    // ACTIVITY 7
    
    // Activity 7:
    // Research on do...while loop, find
    // out about the difference between
    // for loop, while loop and do...while var result = '';
    // loop. Give an example of each.
    // What are the pros and cons?)
    
    //Do While Loop
    let i = 0;
    let result = '';
    
    do {
        i += 1;
        result += i + ' ';
    }
    while (i > 0 && i < 5);
    
    if (result != '') {
        console.log(result);
    } else {
        console.log("No Result")
    }
    
    // The result of this is a string of the numbers 1-5, despite the initial condition not meeting the "While" declaration
    
    //For Loop
    result = '';
    
    for (let i = 0; i <= 5; i++) {
        result += i + ' ';
    }
    
    if (result != '') {
        console.log(result);
    } else {
        console.log("No Result")
    }
    
    // Result of the For loop is a string of the numbers 0-5
    
    // While Loop
    result = '';
    i = 0;
    while (i > 0 && i < 5) {
        i++;
        result += i + ' ';
    }
    if (result != '') {
        console.log(result);
    } else {
        console.log("No Result")
    }


// --------------LECTURE NOTES: LOOPS --------------

// let favouriteDrinks =[
//     "Coke",
//     "Fanta",
//     "Tonic"

// ];

// console.log(favouriteDrinks[0]);
// console.log(favouriteDrinks[1]);
// console.log(favouriteDrinks[2]);

// For loop

// let favDrinks =[
//     "Coke",
//     "Fanta",
//     "Tonic",
//     "Red Bull"

// ];

// for(let i = 0; i < favDrinks.length; i++){
//     console.log(favDrinks[i]);
// }

// No idea of what this does

// For loop in IF statement

// let multiplesTwo = [];

// for(let i = 0; i < 20; i++){
//     if (i % 2 == 0){
//             multiplesTwo.push(i);
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multipleTwo}.`);

// let age = 15

// while( age < 18){
//     console.log("You're a child");
//     age++;

// }

// console.log("You're an adult")

// let cards = ["Diamond", "Spade", "Heart", "Club"]
// let currentCard = "Club";

// while(currentCard != "Spade"){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }

// console.log(currentCard);


