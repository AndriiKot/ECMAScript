﻿const toFreud1 = (s) => s.replace(/[^ ]+/g, "sex");

console.log(toFreud1("Testing 1 2 3")); // 'sex sex sex sex'

// Регулярное выражение `/[^ ]+/g` используется для поиска
// последовательностей символов в строке. Давайте разберем его по частям:

// 1. `[...]` - квадратные скобки обозначают класс символов.
//     Внутри скобок мы указываем, какие символы нужно искать или исключать.

// 2. `^` - знак "^" в начале внутри квадратных скобок означает "не" (инверсии),
//     то есть мы ищем все символы, кроме указанных.

// 3. ` ` (пробел) - здесь мы указываем, что пробел - это тот символ,
//     который мы не хотим включать в найденные последовательности.

// 4. `+` - квантификатор, который означает "один или более раз".
//     Это означает, что регулярное выражение будет находить последовательности символов,
//     состоящие как минимум из одного символа (который не является пробелом).

// 5. `g` - модификатор, который означает "глобальный поиск".
//     Это значит, что регулярное выражение будет искать все возможные совпадения в строке,
//     а не только первое.

// Таким образом, всё регулярное выражение `/[^ ]+/g` находит
// все последовательности символов, которые не содержат пробелов, то есть слова.

// Функция `toFreud1` заменяет все найденные слова на строку "sex",
// результатом чего является строка, где каждое слово заменено на "sex",
// а пробелы остаются на своих местах.
//  В данном случае, для строки `'Testing 1 2 3'`,
//  результатом будет `'sex sex sex sex'`.
