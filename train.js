/*console.log('Jack Ma maslahatlari');
const list = [
  'yahshi talaba boling', //0-20

  'togri boshliq tanlang va koproq hato qiling', // 20-30

  'uzingizga ishlashingizni boshlang', // 30-40

  'siz kuchli bolgan narsalarni qiling', // 40-50

  'yoshlarga investitsiya qiling', // 50-60

  'endi dam oling, foydasi yoq endi', // 60
];

function maslahatBering(a, callback) {
  if (typeof a !== 'number') callback('insert a number', null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
  }
}
console.log('passed here 0');
maslahatBering(65, (err, data) => {
  if (err) console.log('ERROR:', err);
  else {
    console.log('javob:', data);
  }
});
console.log('passe here 1');*/

// async
/*console.log('Jack Ma maslahatlari');*/

/*const list = [
  'yahshi talaba boling', // 0-20
  'togri boshliq tanlang va koproq hato qiling', // 20-30
  'uzingizga ishlashingizni boshlang', // 30-40
  'siz kuchli bolgan narsalarni qiling', // 40-50
  'yoshlarga investitsiya qiling', // 50-60
  'endi dam oling, foydasi yoq endi', // >60
];

// Асинхронная функция
async function maslahatBering(a) {
  if (typeof a !== 'number') {
    throw new Error('insert a number');
  }

  if (a <= 20) {
    return list[0];
  } else if (a > 20 && a <= 30) {
    return list[1];
  } else if (a > 30 && a <= 40) {
    return list[2];
  } else if (a > 40 && a <= 50) {
    return list[3];
  } else if (a > 50 && a <= 60) {
    return list[4];
  } else {
    // Возвращаем промис, который резолвится через 5 секунд
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
}

// call via then/catch
console.log('passed here 0');

maslahatBering(65)
  .then((data) => {
    console.log('javob:', data);
  })
  .catch((err) => {
    console.log('ERROR:', err.message);
  });

console.log('passed here 1');*/

/*const list = [
  'yahshi talaba boling', // 0-20
  'togri boshliq tanlang va koproq hato qiling', // 20-30
  'uzingizga ishlashingizni boshlang', // 30-40
  'siz kuchli bolgan narsalarni qiling', // 40-50
  'yoshlarga investitsiya qiling', // 50-60
  'endi dam oling, foydasi yoq endi', // >60
];


async function maslahatBering(a) {
  if (typeof a !== 'number') {
    throw new Error('insert a number');
  }

  if (a <= 20) {
    return list[0];
  } else if (a > 20 && a <= 30) {
    return list[1];
  } else if (a > 30 && a <= 40) {
    return list[2];
  } else if (a > 40 && a <= 50) {
    return list[3];
  } else if (a > 50 && a <= 60) {
    return list[4];
  } else {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
}
// call via asyn/await
async function run() {
  let javob = await maslahatBering(20);
  console.log(javob);
  javob = await maslahatBering(31);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();*/

//TASK-A
function countLetter(letter, word) {
  if (
    typeof letter !== 'string' ||
    typeof word !== 'string' ||
    letter.length !== 1
  ) {
    throw new Error('Биринчи параметр битта харф, иккинчиси суз булишкирек');
  }

  let count = 0;

  for (let char of word) {
    if (char === letter) {
      count++;
    }
  }

  return count;
}

// Тест
console.log(countLetter('g', ' programming')); // 2
console.log(countLetter('m', 'programming')); // 2
console.log(countLetter('r', 'programming')); // 2
console.log(countLetter('p', 'programming')); // 1
console.log(countLetter('z', 'programming')); // 0
