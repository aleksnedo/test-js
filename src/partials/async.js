// fetch('https://api.github.com/users/aleksnedo')
//   .then(res => {
//     return res.json();
//   })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log('Errrroooorrrrr', err);
//   });

// async function getGitData() {
//   try {
//     const response = await fetch('https://api.github.com/users/aleksnedo');
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// getGitData();

function sleep(time) {
  return new Promise((resolve, reject) => {
    if (time < 500) {
      reject`Слишком мало сна!`;
    }

    setTimeout(() => resolve(`Поспал ${time}`), time);
  });
}

const sleepSession = async () => {
  try {
    const sleep1 = await sleep(2000);
    console.log(sleep1);
    const sleep2 = await sleep(1500);
    console.log(sleep2);
    const sleep3 = await sleep(1000);
    console.log(sleep3);
    const sleep4 = await sleep(400);
    console.log(sleep4);
  } catch (err) {
    console.log(err);
  }
};

sleepSession();

// sleep(2000)
//   .then(res => {
//     console.log(res);
//     return sleep(1500);
//   })
//   .then(res => {
//     console.log(res);
//     return sleep(1000);
//   })
//   .then(res => {
//     console.log(res);
//     return sleep(400);
//   })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log('Ошибка Сна!', err);
//   });
