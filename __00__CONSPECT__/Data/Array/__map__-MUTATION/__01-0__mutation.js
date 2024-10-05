function toFreud(string) {
  let result = "";
  if (string) {
    result = string.split(" ");
    result.map((_w, i, arr) => (arr[i] = "sex"));
  }
  console.log(result);
  return result;
}

toFreud("Hello World!"); // ["sex", "sex"]
toFreud(""); // ''
