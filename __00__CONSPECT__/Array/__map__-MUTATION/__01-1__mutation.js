function toFreud(string) {
  let result = "";
  if (string) {
    result = string.split(" ");
    result.map((_v, i) => (result[i] = `sex`));
  }
  console.log(result);
  return result;
}

toFreud("Hello World!"); // ["sex", "sex"]
toFreud(""); // ''
