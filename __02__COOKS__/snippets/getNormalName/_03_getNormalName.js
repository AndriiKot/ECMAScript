function getNormalName(input) {
  const trimmedName = input.trim();
  return trimmedName
    ? trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1).toLowerCase()
    : "";
}

const name = "aNDriI";

const normalName = getNormalName(name);
console.log(normalName); // 'Andrii'

const emptyName = getNormalName("   ");
console.log(emptyName); // ''
console.log(emptyName.length); // 0
