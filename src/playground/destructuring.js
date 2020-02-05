// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;

// const {city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// console.log(`${firstName} is ${age}.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const { name:publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const address = [];
const [, city, state] = address;

console.log(`You are in ${city} ${state}.`);
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [ItemName, ,mediumPrice] = item;

// grab first and thrid times using array destructuring
console.log(`A medium ${ItemName} ${mediumPrice}`);