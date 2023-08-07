'use strict';

/**
 * STRICT MODE
 *
 * Allows to write more "secure" JavaScript by showing normally silent errors
 * and applying some small changes to the syntax.
 */

/*
EXAMPLE

let hasDriversLicense = false;
hasDriverLicense = true;

Without strict mode:
-> because "hasDriverLicense" has a spelling mistake, a new
variable would be created.

With strict mode:
-> error
 */

/**
 * FUNCTION DECLARATIONS
 */

// Declaring a function
function logger(message) {
    console.log(message);
}

// Calling a function
logger('Hi');

// Returning a value
function add(x, y) {
    return x + y;
}

console.log(add(7, 5)); // 12

/**
 * FUNCTION EXPRESSIONS
 */

// Declaration
const calcAge = function (birthYear) {
    return 2023 - birthYear;
};
console.log(calcAge(2004)); // 19

/*
Function declarations are on global scope, so using
function expressions is a good practice.
Note that function expressions cannot be called before declaration.
 */

/**
 * ARROW FUNCTIONS
 */

/*
Arrow functions are the new ES6 way to write function expressions.
 */

const calcAge2 = birthYear => 2023 - birthYear;
console.log(calcAge2(2000)); // 23

// No parameters
const arrFunc1 = () => console.log('Hi');
// One parameter
const arrFunc2 = text => console.log(text);
// Multiple parameters
const arrFunc4 = (text1, text2, text3) => text1 + text2 + text3;
// Multiple lines
const arrFunc5 = () => {
    console.log('Hi');
    console.log('Hi');
};

/**
 * DIFFERENCES BETWEEN FUNCTION DECLARATIONS AND FUNCTION EXPRESSIONS
 */

/*
1. Hoisting
  -> Functions declarations are hoisted, meaning they are raised to the top of
     the code block and can be called before they are declared.
  -> Function expressions are not hoisted, which means they cannot be
     called before they are defined.

2. Anonymous Functions
  -> Function declarations always need a name.
  -> Function expressions can be named or anonymous.

3. Use in IIFEs (Immediately Invoked Function Expressions):
  -> Function declarations cannot be used to create IIFEs.
  -> Function expressions can be used to create IIFEs which run as soon as they're defined.
 */

/**
 * DIFFERENCES BETWEEN FUNCTION EXPRESSIONS AND ARROW FUNCTIONS
 *
 * Learn more about 'this' (with examples):
 * {@link https://github.com/zSkillCode/js-handbook/4-behind-the-scenes/script.js}
 */

/*
1. 'this' Keyword
  ->  In arrow functions, this is lexically bound (inherited from the surrounding scope).
      Examples can be found here: https://github.com/zSkillCode/js-handbook/4-behind-the-scenes/script.js

2. Arguments Binding
  -> Arrow functions do not have their own arguments object.
     They inherit it from the enclosing scope.

3. Constructor Function
  -> Arrow functions cannot be used as constructors, but function expressions can be.
  -> Arrow functions do not have the prototype property.
 */


/**
 * INTRODUCTION TO ARRAYS
 */

// Create array
const myArray = ['A', 'B', 'C'];
// Access elements
console.log(myArray[0]); // A
console.log(myArray[1]); // B
console.log(myArray[2]); // C
console.log(myArray[3]); // undefined
// Array length
console.log(myArray.length); // 3
// Replace elements
myArray[1] = 'Hi'; // A, Hi, C
// Add element to the end
myArray.push('D');
// Add element to the beginning
myArray.unshift('Z');
// Remove (and get) first element
myArray.shift();
// Remove (and get) last element
console.log(myArray.pop()); // D
console.log(myArray); // A, Hi, C
// Find element position
console.log(myArray.indexOf('C')); // 2
// Check if element is in the array
console.log(myArray.includes('C')); // true


/**
 * INTRODUCTION TO OBJECTS
 */

// Create object
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 69,
    job: 'homeless',
    friends: ['none :C']
};


// Dot notation
console.log(person.firstName); // John
// Bracket notation
console.log(person['firstName']);

// Add property (dot notation)
person.location = 'Berlin';
console.log(person.location); // Berlin
// Add property (bracket notation)
person['hobbies'] = ['gaming', 'programming'];
console.log(person.hobbies); // gaming, programming

/**
 * OBJECT METHODS
 */

const car = {
    brand: 'Mercedes',
    model: 'S63 AMG',
    color: 'black',

    changeColor: function (newColor) {
        this.color = newColor;
    },

    hasRightOfWay: function () {
        return ['Mercedes', 'BMW', 'Porsche'].includes(this.brand);
    }
};

car.changeColor('white');
console.log(car.color); // white
console.log(car.hasRightOfWay()); // true


/**
 * FOR LOOP
 */

for (let i = 0; i < 10; i++) {
    console.log(i); // 0, 1, 2, 3... 9
}

// Looping through array with regular for loop
const names = ['John', 'Mark', 'Peter', 'Tom', 'Max'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]); // John, Mark, Peter, Tom, Max
}

// Cancelling a loop (break)
for (let i = 0; i < 10; i++) {
    console.log(i); // 1, 2, 3, 4, 5
    if (i === 5) break;
}

// Skipping to next iteration (continue)
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i); // 1, 3, 5, 7, 9
}

/**
 * FOR OF LOOP
 */

const myNewArray = [1, 'Hi', true, 765];

for (const element of myNewArray) {
    console.log(element); // 1, Hi, true, 765
}

/**
 * WHILE AND DO WHILE LOOP
 */
let counter = 0;
while (counter < 5) {
    console.log(counter++); // 0 1 2 3 4
}

// The do while loop will execute the body before checking the condition
counter = 0;

do {
    console.log(counter++); // 0 1 2 3 4
} while (counter < 5);