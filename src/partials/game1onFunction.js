const pickWord = function () {
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
    'тернопіль',
    'ужгород',
    'чернівці',
    'суми',
    'чернігів',
    'черкаси',
  ];
  return cities[Math.floor(Math.random() * cities.length)];
};

const setupAnswerArray = function (city) {
  let answerArray = [];
  for (let i = 0; i < city.length; i++) {
    answerArray[i] = '_';
  }

  return answerArray;
};

const showPlayerProgress = function (answerArray) {
  alert(answerArray.join(' '));
};

const getGuess = function () {
  return prompt('Вгадай літеру, або нажми відміну, щоб припинити гру.');
};

const updateGameState = function (guess, city, answerArray) {
  let appearances = 0;
  for (let j = 0; j < city.length; j++) {
    if (city[j] === guess) {
      answerArray[j] = guess;
      appearances++;
    }
  }
  return appearances;
};

const showAnswerAndCongratulatePlayer = function (answerArray) {
  showPlayerProgress(answerArray);
  alert('Чудова робота! Відповідь була: ' + city);
};

const city = pickWord();
const answerArray = setupAnswerArray(city);
const remainingLetters = city.length;

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  let guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert('Будь-ласка введіть одну літеру.');
  } else {
    const correctGuesses = updateGameState(guess, city, answerArray);
    remainingLetters -= correctGuesses;
  }
}

showAnswerAndCongratulatePlayer(answerArray);
