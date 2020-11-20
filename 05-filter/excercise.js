const numbers = [1, 3, 4, 5, 6, 7, 8, 9, 10];
// Create a new array with only the even numbers
const evenNumbers = numbers.filter(num => {
    return num % 2 === 0
})
console.log(evenNumbers);

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
// create a new array with only the days that start with the letter T
const tLetteredDays = days.filter(day => {
    return day[0] === 'T'
});
console.log(tLetteredDays);

const people = [
    { first_name: 'CJ', last_name: 'R.' },
    { first_name: 'Brendan', last_name: 'Eich' },
    { first_name: 'Kyle', last_name: 'Simpson' },
    { first_name: 'Douglas', last_name: 'Crockford' }
];
// Create a new array with only the people who's first name is less than 4 characters long.
const shortNames = people.filter(person => {
    return person.first_name.length <= 4
});
console.log(shortNames);

const animals = [
    { name: 'cat', size: 'small' },
    { name: 'dog', size: 'small' },
    { name: 'lion', size: 'medium' },
    { name: 'elephant', size: 'big' }
];
// Create a new array with only the animals of size small
const smallAnimals = animals.filter(animal => {
    return animal.size === 'small'
});
console.log(smallAnimals);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// create a new array with only the words with a length longer than 6
const longerWord = words.filter(word => {
    return word.length > 6
});
console.log(longerWord);