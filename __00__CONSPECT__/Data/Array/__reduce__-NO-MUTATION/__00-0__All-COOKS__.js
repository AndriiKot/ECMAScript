// ## Задачи, которые может решить метод `reduce()` в JavaScript:

// Метод `reduce()` - мощный инструмент в JavaScript,
// позволяющий вам "складывать" элементы массива в единый результат.
// Он может решать широкий спектр задач, которые могут быть сложны для других методов.
//  Вот некоторые из наиболее распространенных применений:

// **1. Суммирование элементов массива:**

const numbers_sum = [1, 2, 3, 4, 5];
const sum = numbers_sum.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // Вывод: 15

// **2. Нахождение максимального/минимального значения:**

const numbers_max_min = [10, 5, 15, 2, 8];
const max = numbers_max_min.reduce(
  (accumulator, currentValue) => Math.max(accumulator, currentValue),
  -Infinity
);
const min = numbers_max_min.reduce(
  (accumulator, currentValue) => Math.min(accumulator, currentValue),
  Infinity
);

console.log(max); // Вывод: 15
console.log(min); // Вывод: 2

// **3. Подсчет количества элементов:**

const fruits = ["apple", "banana", "orange", "apple"];
const count = fruits.reduce((accumulator, currentValue) => {
  if (currentValue === "apple") {
    return accumulator + 1;
  } else {
    return accumulator;
  }
}, 0);

console.log(count); // Вывод: 2

// **4. Создание объекта из массива:**

const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
];

const usersObject = users.reduce((accumulator, currentValue) => {
  accumulator[currentValue.name] = currentValue.age;
  return accumulator;
}, {});

console.log(usersObject); // Вывод: { John: 30, Jane: 25 }

// **5. Объединение нескольких массивов в один:**

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = array1.reduce(
  (accumulator, currentValue) => [...accumulator, currentValue],
  array2
);

console.log(mergedArray); // Вывод: [1, 2, 3, 4, 5, 6]

// **6. Преобразование массива строк в строку с разделителем:**

const words = ["Hello", "world", "!"];
const sentence = words.reduce(
  (accumulator, currentValue) => accumulator + " " + currentValue,
  ""
);

console.log(sentence); // Вывод: 'Hello world !'

// **7. Фильтрация массива с помощью `reduce()`:**

const numbers_even = [1, 2, 3, 4, 5];
const evenNumbers = numbers_even.reduce((accumulator, currentValue) => {
  // Проверка последнего бита, если он равен 0, число четное
  return !(currentValue & 1) ? [...accumulator, currentValue] : accumulator;
}, []);

console.log(evenNumbers); // Вывод: [2, 4]

// **Важно отметить:**

// * `reduce()` принимает два аргумента: функцию редуктора и начальное значение аккумулятора.
// * Функция редуктора принимает два аргумента: аккумулятор и текущий элемент массива.
// * Аккумулятор - это значение, которое накапливается в процессе итерации.
// * Метод `reduce()` возвращает значение аккумулятора после завершения итерации.

// Использование `reduce()` - это эффективный способ сжать данные и получить нужный результат из массива.
