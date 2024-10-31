function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Пример использования
const min = 1;
const max = 100;
const randomNumber = getRandomNumber(min, max);
console.log(randomNumber);

