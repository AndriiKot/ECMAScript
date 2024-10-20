function getNormalName(name) {
  name = name.trim();
  if (name) {
    name = name[0].toUpperCase() + name.substring(1).toLowerCase();
  } else {
    name = "";
  }
  return name;
}

const name = "aNDriI";

const normalName = getNormalName(name);
console.log(normalName); // 'Andrii'
