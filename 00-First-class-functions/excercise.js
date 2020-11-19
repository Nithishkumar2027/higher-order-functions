// 01 - Define a function called getName that returns your name as a string.
/* Normal function */
function getName() {
    return 'Kumar 🔥'
}

/* One line code */
// const getName = () => 'Kumar 🔥'


// 02 - Define a function called greet that takes in 2 parameters:
// getNameFn - a function that returns your name
// greeting - a string greeting, e.g. 'Hello', 'Goodbye' etc.
// The function should log `Some greeting, your-name-here` by invoking the getNameFn
// Invoke your function several times with different greetings

/* Normal function */
function greet(getNameFn, greeting) {
    return console.log(greeting, getNameFn());
}

/* One line code */
const greet = (getNameFn, greeting) => console.log(`${greeting} ${getNameFn()}`);
greet(getName, 'Hello this is')

// 03 - Define a function called makeAdder that takes in 1 parameter:
// number - any valid number
// makeAdder should return a function that takes in 1 parameter:
// other_number - any valid number
// The returned function should return the sum of the two numbers

// Normal function
function makeAdder(number) {
    return function (other_number) {
        return number + other_number
    }
}

/* One line code */
const makeAdder = (number) => (other_number) => number + other_number

// 04 - Use your makeAdder function to create a function that adds 10 to a number
// Invoke your function several times with different numbers, log the result

const tenAdder = makeAdder(10)
console.log(tenAdder(2));