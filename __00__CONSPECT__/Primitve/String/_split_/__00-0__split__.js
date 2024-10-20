function ensureQuestion(s) {
  return s.split("?").join("").concat("?");
}

// Этот код на JavaScript определяет функцию `ensureQuestion`,
// которая обрабатывает входную строку `s`. Вот что делает эта функция шаг за шагом:

// 1. **Метод `split('?')`**: Разбивает строку `s` на массив подстрок,
//     используя символ вопросительного знака (`?`) в качестве разделителя.

// 2. **Метод `join('')`**: Объединяет элементы массива обратно в строку,
//     при этом между элементами не будет никаких разделителей (пустая строка `''`).

// 3. **Метод `concat('?')`**: К результирующей строке
//     добавляется вопросительный знак в конце.

// Таким образом, эта функция удаляет все вопросительные знаки
//     из исходной строки `s` и добавляет один вопросительный знак в конец.

// Например:
// - Если `s` равна `"Как дела?"`, то результат будет `"Как дела?"`.
// - Если `s` равно `"Как дела??"`, то результат будет `"Как дела?"`.
// - Если `s` равно `"Как дела"`, то результат будет `"Как дела?"`.

// По сути, функция гарантирует, что строка всегда заканчивается
// ровно одним вопросительным знаком, независимо от того, сколько их было в исходной строке.
