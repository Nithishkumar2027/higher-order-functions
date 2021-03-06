const numbers = [13, 42, 1337];
// Create a new array with the numbers doubled
const doubledNumbers = numbers.map(num => num * 2)
console.log(doubledNumbers);

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
// create a new array with the first 3 letters of each day
const shortedDays = days.map(day => day.substring(0, 3))
console.log(shortedDays);

const people = [
    { first_name: 'CJ', last_name: 'R.' },
    { first_name: 'Brendan', last_name: 'Eich' },
    { first_name: 'Kyle', last_name: 'Simpson' },
    { first_name: 'Douglas', last_name: 'Crockford' }
];
// Create a new array with the string full name of each person
const fullName = people.map(person => `${person.first_name} ${person.last_name}`)
console.log(fullName);

const animals = [
    { name: 'cat', size: 'small' },
    { name: 'dog', size: 'small' },
    { name: 'lion', size: 'medium' },
    { name: 'elephant', size: 'big' }
];
// Create a new array with just the names of the animals
const animalNames = animals.map(animal => animal.name)
console.log(animalNames);

const theNumbers = [4, 8, 15, 16, 23, 42];
// create a new array of objects with the properties value and index
const numberData = theNumbers.map((numData, index) => {
    return {
        index,
        value: numData
    }
})
console.log(numberData);

const starter = [2, 5, 10];
// Create a new array with each value multiplied by the next value
// The last value should be multiplied by the first value
// e.g. [2*5, 5*10, 10*2] == [10, 50, 20]
const multipliedByNext = starter.map((num, index, array) => {
    let nextIndex = index + 1
    if (index === array.length - 1) {
        nextIndex = 0
    }
    return num * array[nextIndex]
})
console.log(multipliedByNext);