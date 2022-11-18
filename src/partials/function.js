const ourFirstFn = function () {
  console.log('Hello World!');
};
ourFirstFn();

const sayHelloTo = function (name) {
  console.log('Hello ' + name + '!');
};
sayHelloTo('Oleksii');

const darwCats = function (howManyTimes) {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + ' =^.^=');
  }
};
darwCats(3);

const printMultiTimes = function (howManyTimes, whatToDraw) {
  for (let i = 0; i < howManyTimes; i++) {
    console.log(i + ' ' + whatToDraw);
  }
};
printMultiTimes(3, '^_^');
printMultiTimes(2, '(>_<)');

const double = function (number) {
  return number * 2;
};
console.log(double(3));
console.log(double(5) + double(6));

// -------

const pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};
const randomWords1 = ['Planet', 'Worm', 'Flower', 'Computer'];
console.log(pickRandomWord(randomWords1));

const randomBodyParts = ['Face', 'Nose', 'Hair'];
const randomAdjectives = ['Smelly', 'Boring', 'Stupid'];
const randomWords2 = ['Fly', 'Marmot', 'Stick', 'Monkey', 'Rat'];
const randomString =
  'Your ' +
  pickRandomWord(randomBodyParts) +
  ' is like a ' +
  pickRandomWord(randomAdjectives) +
  ' ' +
  pickRandomWord(randomWords2) +
  '!!!';
console.log(randomString);

function generateRandomInsult() {
  const randomBodyParts = ['Face', 'Nose', 'Hair'];
  const randomAdjectives = ['Smelly', 'Boring', 'Stupid'];
  const randomWords2 = ['Fly', 'Marmot', 'Stick', 'Monkey', 'Rat'];

  const randomString =
    'Your ' +
    pickRandomWord(randomBodyParts) +
    ' is like a ' +
    pickRandomWord(randomAdjectives) +
    ' ' +
    pickRandomWord(randomWords2) +
    '!!!';
  return randomString;
}
console.log(generateRandomInsult());

// ---------

const fifthLetter = function (name) {
  if (name.length < 5) {
    return;
  }

  return 'The fifth letter of your name is ' + name[4] + '.';
};
console.log(fifthLetter('Oleksii'));

// ------

const medalForScore = function (score) {
  if (score < 3) {
    return 'Bronze';
  }
  if (score < 7) {
    return 'Silver';
  }
  return 'Gold';
};
console.log(medalForScore(5));

// -------

// ---Programming challenge 1---
function add(args1, args2) {
  return args1 + args2;
}
function multiply(args3, args4) {
  return args3 * args4;
}
console.log(add(multiply(36325, 9824), 777));

// ---Programming challenge 2---
function areArraySame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    return true;
  }
}
console.log(areArraySame([1, 2, 3], [4, 5, 6]));
console.log(areArraySame([1, 2, 3], [1, 2, 3]));
console.log(areArraySame([1, 2, 3], [1, 2, 3, 4]));

// ---Programming challenge 3---
