const createPlayer = (name) => {
  let score = 0;
  return () => {
    score++;
    return `${name} ${score} баллов!`
  }
}

const player1 = createPlayer('Andrii');
const player2 = createPlayer('Roma');

// Вызовы функций игрока
console.log(player1()); // Andrii 1 баллов!
console.log(player1()); // Andrii 2 баллов!
console.log(player2()); // Roma 1 баллов!
console.log(player2()); // Roma 2 баллов!

// Если вам все равно нужно вывести функции с их значениями,
// можно создать объект с результатами и вывести его
const results = {
  player1: player1(),
  player2: player2(),
};

console.log(results); // { player1: 'Andrii 3 баллов!', player2: 'Roma 2 баллов!' }
