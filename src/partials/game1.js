// const yourName = prompt("What's your name?");
// console.log('Hello ' + yourName);

// const likesCats = confirm('Do you like cats?');
// if (likesCats) {
//   alert('You are a cool cat!');
// } else {
//   alert("Yeah, that's fine. You are still cool!");
// }

// alert('JS is Awesome!');

const cities = [
  'київ',
  'харків',
  'одессі',
  'львів',
  'дніпро',
  'житомир',
  'полтава',
  'рівне',
  'вінниця',
  'херсон',
  'миколаїв',
  'донецьк',
  'луганськ',
  'луцьк',
  'хмельницький',
  'кривий ріг',
  'тернопіль',
  'ужгород',
  'чернівці',
  'суми',
  'чернігів',
  'черкаси',
];
const city = cities[Math.floor(Math.random() * cities.length)];

let answerArray = [];
for (let i = 0; i < city.length; i++) {
  answerArray[i] = '_';
}
let remainingLetters = city.length;
let guesses = 10;

while (remainingLetters > 0 && guesses > 0) {
  alert(answerArray.join(' '));

  let guess = prompt('Вгадай літеру, або нажми відміну, щоб припинити гру.');

  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Будь-ласка введіть одну літеру.');
  } else {
    guesses--;
    guess = guess.toLowerCase();

    for (let j = 0; j < city.length; j++) {
      if (city[j] === guess && answerArray[j] === '_') {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
}
alert(answerArray.join(' '));

if (guesses > 0) {
  alert('Чудова робота! Відповідь була: ' + city);
} else {
  alert('Погано! Відповідь була: ' + city);
}
