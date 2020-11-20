const numbers = [1, 2, 3, 4, 5];
// Create a number that is the sum of all the numbers in the array
const addedNumbers = numbers.reduce((sum, number) => {
    return sum += number
}, 0);
console.log(addedNumbers);

const fruits = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];
const fruitSightings = fruits.reduce((fruitStock, fruit) => {
    if (fruitStock.hasOwnProperty(fruit)) {
        fruitStock[fruit]++;
    } else {
        fruitStock[fruit] = 1;
    }
    return fruitStock;
}, {});
console.log(fruitSightings);


const prices = [29.76, 41.85, 46.5];
// Create a number that is the average price of all the prices in the array
const avgPrice = prices.reduce((sum, value) => {
    return sum + value
}, 0)
console.log(avgPrice / prices.length);

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
const shortDays = days.reduce((shorted, day, index) => {
    shorted.push(day.substring(0, 3))
    return shorted
}, [])
console.log(shortDays);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// create a new array with only the words with a length longer than 6
const lengthyWords = words.reduce((lengthy, word) => {
    word.length > 6 ? lengthy.push(word) : null
    return lengthy;
}, []);
console.log(lengthyWords);

const people = [{
    id: 1,
    first_name: 'CJ',
    last_name: 'R.'
}, {
    id: 2,
    first_name: 'Brendan',
    last_name: 'Eich'
}, {
    id: 3,
    first_name: 'Kyle',
    last_name: 'Simpson'
}, {
    id: 4,
    first_name: 'Douglas',
    last_name: 'Crockford'
}];
// Create an object where the keys are the id and the values are the people
const peopleById = people.reduce((byID, person) => {
    byID[person.id] = person
    return byID
}, {});
console.log(peopleById);

const animals = [{
    name: 'cat',
    size: 'small'
}, {
    name: 'dog',
    size: 'small'
}, {
    name: 'lion',
    size: 'medium'
}, {
    name: 'elephant',
    size: 'big'
}];
// Create an object where the keys are the size and the values are an array of all animals that size
const animalsBySize = animals.reduce((bySize, animal) => {
    // does bySize have a property that is the current animal size
    if (!bySize.hasOwnProperty(animal.size)) {
        // if not set the size property on bySize to be an empty array
        bySize[animal.size] = [];
    }

    // push animal into array in bySize at the given animal size 
    bySize[animal.size].push(animal);
    return bySize;
}, {});

console.log(animalsBySize);