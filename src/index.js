let bestPlayers1 = [
  'Ronaldo',
  'Messi',
  'Neymar',
  'Lewandowski',
  'Benzema',
  'Modric',
  'Ibrahimovic',
];

bestPlayers1[2] = 'Neymar Jr';

bestPlayers1.unshift('Lukaku');

bestPlayers1.pop();

console.log(bestPlayers1);
// console.log(bestPlayers1.length);

let bestPlayers2 = [
  'Isco',
  'Kroos',
  'Marcelo',
  'Yarmolenko',
  'Di Maria',
  'Suarez',
  'Casemiro',
];

let bestPlayers3 = [
  'Tsygankov',
  'Buialskii',
  'Besedin',
  'Shaparenko',
  'Mykolenko',
  'Buschan',
];

console.log(bestPlayers2);

let allBestPlayers = bestPlayers1.concat(bestPlayers2, bestPlayers3);

console.log(allBestPlayers);

console.log('index player:', allBestPlayers.indexOf('Isco'));

console.log(allBestPlayers.join(' | '));

// ----------------

let random = Math.random() * 10;

console.log(Math.floor(random));

let randomPlayer = Math.floor(Math.random() * allBestPlayers.length);

console.log(allBestPlayers[randomPlayer]);

// --------

var BodyParts = ['Face', 'Nose', 'Hair'];
var AnimalBodyParts = ['Tail', 'Foot', 'Fur'];
var Adjectives = ['Smelly', 'Boring', 'Stupid'];
var Animals = ['Fly', 'Marmot', 'Monkey', 'Rat'];

var randomBodyPart = BodyParts[Math.floor(Math.random() * BodyParts.length)];
var randomAnimalBodyParts =
  AnimalBodyParts[Math.floor(Math.random() * AnimalBodyParts.length)];
var randomAdjectives =
  Adjectives[Math.floor(Math.random() * Adjectives.length)];
var randomAnimals = Animals[Math.floor(Math.random() * Animals.length)];

var randomCall =
  'Your ' +
  randomBodyPart +
  ' is more ' +
  randomAdjectives +
  ' than a ' +
  randomAnimals +
  '`s ' +
  randomAnimalBodyParts +
  '!!!';

console.log(randomCall);

// --------

let numbers = [3, 2, 1];
console.log(numbers.join(' is bigger than '));

// ---------

let teams1 = ['Arsenal', 'Barcelona', 'Dynamo K', 'Manchester Utd'];
let teams2 = ['Chelsea', 'Shakhtar', 'Real Madrid', 'Milan'];
let randomPlace1 = teams1[Math.floor(Math.random() * teams1.length)];
let randomPlace2 = teams2[Math.floor(Math.random() * teams2.length)];

let call = randomPlace1 + ' vs ' + randomPlace2;
// if (randomPlace1 === randomPlace2) {
//   return;
// } else {
//   console.log(call);
// }

console.log(call);

// --------

const footballPlayer = {
  name: 'Luka',
  surname: 'Modric',
  team: 'Real Madrid',
};

console.log(Object.keys(footballPlayer));

let footballPlayer2 = {};
footballPlayer2.name = 'Robert';
footballPlayer2.surname = 'Lewandowski';
footballPlayer2.team = 'Barcelona';

console.log(footballPlayer2);

console.log(Object.values(footballPlayer2));

// -----------

const firstPlayer = {
  name: 'Cristiano',
  surname: 'Ronaldo',
  clubs: ['Sporting', 'ManUtd', 'RealMadrid', 'Juventus'],
};
const secondPlayer = {
  name: 'Eden',
  surname: 'Hazard',
  clubs: ['Lille', 'Chelsea', 'RealMadrid'],
};

const twoPlayers = [firstPlayer, secondPlayer];

console.log(twoPlayers[1]);
console.log(twoPlayers[0].clubs[3]);

// --------

const movies = {
  'Finding Nemo': {
    releaseDate: 2003,
    duration: 100,
    actors: ['Albert Brooks', 'Ellen DeGeneres', 'Alexander Gould'],
    format: 'DVD',
  },
  'Star Wars: Episode VI - Return of the Jedi': {
    releaseDate: 1983,
    duration: 134,
    actors: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
    format: 'DVD',
  },
  'Harry Potter and the Goblet of Fire': {
    releaseDate: 2005,
    duration: 157,
    actors: ['Daniel Radcliffe', 'Emma Watson', 'Rupert Grint'],
    format: 'Blu-ray',
  },
};

console.log(movies['Finding Nemo']);
console.log(Object.keys(movies));

// ---------
const myCrazyObject = {
  name: 'A ridiculous object',
  'some array': [7, 9, { purpose: 'confusion', number: 123 }, 3.3],
  'random animal': 'Banana Shark',
};

console.log(myCrazyObject['some array'][2].number);

// -----
