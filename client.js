// ----------------
// SOME CLUES ABOUT WHITEBOARDING QUESTIONS:
// How many / What's the count? - Integer
// Is it? - Probably a boolean
// List or collection = array (function might receive an array)

console.log('js');

// Fizz Buzz

// Clarifying questions:
// 1. Will the input always be a number (ie only integers ?) -Yes
// 2. Is there a max number that could be asked? - No

// Create a function that takes in a number as an argument
// if statement to check if divisible by 3 and 5
    // if so, return "fizzbuzz"
    // else if, check if divisible by 3
        // if so, return "fizz"
        // else if, check if divisible by 5
            //if so, return "buzz"
                //or else return "number"

function fizzBuzz(n){
    if( n % 15 === 0 ){
        return "Fizz Buzz";
    }
    else if( n % 3 === 0 ){
        return " fizz ";
    }
    else if ( n % 5 === 0 ){
        return "Buzz" ;
    }
    else {
        return n;
    }
    return true;
}

// fizzBuzz(0);
// fizzBuzz(1);
// fizzBuzz(2);
// fizzBuzz(3);
// fizzBuzz(4);
// fizzBuzz(5);
// fizzBuzz(15);

function looping(){
    for ( let i=0; i <=100; i++){
       console.log( fizzBuzz(i));
    }
}

//looping();

// Leap Year

// Clarifying Questions
// 1. Do we have to check if the year is a number or a string?
// 2. Are there free snacks?? Or beer on tap? 

// Psuedo Code
// create a function that finds leapyear
// leapyear is the variable
// write an if statment divde it by 400
    // return Boolean true "Leap Year"
// else if statment divide by 100 
    // return Boolean false "No Leap Year"
// else statement divide by 4
    // return Boolean true "Leap Year"

// _______________________
// Megan's Psuedo
// write a function that takes in a number (year) as argument
// in function, check if year is divisible by 400
    // if so, return true
// in funciton, check if year is divisble by 100
    // if so, return false
// in function, check if year is divisible by 4
    // if so, return true
// if none are, return false

// Input: 2024, 2025
// Output: boolean: true if it is a leap year, and false if it isn't

// Example Code:



function leapYear (a){
    if ( a % 400 === 0 ){
        console.log('in 400');
        return true;
    } else if (a % 100 === 0){
        console.log('Not divisible by 100');
        return false;
    } else if (a % 4 === 0){
        console.log('Not divisible by 4 years');
        return true;
    }else {
        console.log('Not a leap year at all, you crazy');
        return false;
    }
}

console.log( leapYear(2025));


// Is it a BLT?

// Clarifying Questions
// 1. what is the desired output? boolean or a string that says "it's a BLT"

// INPUT: array
// OUTPUT: boolean

// Pseudo Code
// We are creating a fuction that checks if bread is on both sides and 
// has  "bacon", "lettuce" and "tomatoes"!

// set up a function that takes in an array as an argument
// in function, create variables for if there's bread to start, bread to end, 
// and includes all ingredients
// check: does it have bread on both sides?
    // index at 0 is bread
    // index at array.length =  bread
// check: array Array.includes() bacon lettuce, AND tomatoes

// if all are true, then it's a BLT

function isBlt(array){
    let firstBread = false;
    let lastBread = false;
    let correctContents = false;

    // Defining as false to begin with is Good Practice™️

    if ( array[0] === 'bread' ){
        firstBread = true;
        console.log('firstbread is true');
    }
    if ( array[ array.length - 1 ] === 'bread'){
        console.log('lastbread is true');
        lastBread = true;
    }
    if ( array.includes('bacon') && array.includes('lettuce') && array.includes('tomato')){
        correctContents = true;
        console.log('correctContents', correctContents);
    }
    
    console.log( firstBread, lastBread, correctContents );

    if ( firstBread && lastBread && correctContents ){
        console.log('its a blt');
        return true;
    }
    else {
        return false;
    }
}

// Pizza AND Minneapolis: &&
// Pizza OR Minneapolis: ||
// Nothing to do with Pizza OR Minneapolis: !Pizza || !Minneapolis 

// if ( array[0] === 'bread' && array[ array.length - 1 ] === 'bread' && array.includes('bacon') && array.includes('lettuce') && array.includes('tomato') )

console.log( isBlt( [ 'bread', 'lettuce', 'tomato', 'bacon', 'bread' ] ) );
console.log( isBlt( [ 'bread', 'lettuce', 'avocado', 'bacon', 'bread' ] ) );