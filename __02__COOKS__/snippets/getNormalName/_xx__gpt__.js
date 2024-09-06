function isValidName(name) {
    // Проверяет, что имя только из букв и пробелов (можно позволить апострофы и дефисы для составных имен)
    const validNamePattern = /^[A-Za-zÀ-ÿ '’-]+$/;
    return validNamePattern.test(name);
}

function getNormalName(input) {
    const trimmedName = input.trim();
    
    // Проверьте, что имя не пусто и соответствует критериям
    if (trimmedName && isValidName(trimmedName)) {
        return trimmedName
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    }
    return "";
}

// Примеры использования:
const name = "aNDriI";
const normalName = getNormalName(name);
console.log(normalName); // 'Andrii'

const multiName = "jOhn doE";
console.log(getNormalName(multiName)); // 'John Doe'

const invalidName = "j0hn"; // Содержит цифру
console.log(getNormalName(invalidName)); // ''

const emptyName = getNormalName("   ");
console.log(emptyName); // ''
console.log(emptyName.length); // 0
