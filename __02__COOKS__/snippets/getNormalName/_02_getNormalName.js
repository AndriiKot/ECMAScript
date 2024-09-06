function getNormalName(name) {
  name = name.trim()
    ? name[0].toUpperCase() + name.substring(1).toLowerCase()
    : "";
  return name;
}

const name = "aNDriI";

const normalName = getNormalName(name);
console.log(normalName); // 'Andrii'

const emptyName = getNormalName("   ");
console.log(emptyName); // ''
console.log(emptyName.length); // 0
