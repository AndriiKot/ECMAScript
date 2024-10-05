﻿// В JavaScript метод `concat()` используется для
// объединения двух или более массивов. Важно отметить, что этот метод не изменяет исходные массивы, а возвращает новый массив, который содержит элементы всех объединенных массивов.

// Вот пример использования `concat()`:

// Исходные массивы
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Объединяем массивы
const newArray1 = array1.concat(array2);

// Выводим результаты
console.log('array1:', array1); // [1, 2, 3]
console.log('array2:', array2); // [4, 5, 6]
console.log('newArray:', newArray1); // [1, 2, 3, 4, 5, 6]


// Как видно из примера, массивы `array1` и `array2` остаются неизменными после вызова `concat()`, а результатом операции является новый массив `newArray`, который содержит элементы обоих исходных массивов.

// Вы также можете использовать метод `concat()` для объединения нескольких массивов или добавления отдельных значений:

const array3 = [1, 2, 3];
const newArray2 = array3.concat([4, 5], 6, [7, 8]);

console.log(newArray2); // [1, 2, 3, 4, 5, 6, 7, 8]


// В данном случае, новый массив `newArray` также был создан,
// и исходный массив `array1` остался без изменений.