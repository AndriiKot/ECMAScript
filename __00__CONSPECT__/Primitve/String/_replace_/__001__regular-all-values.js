// Best Praxes
var toFreud1 = (s) => s.replace(/[^ ]+/g, "sex");

// My Solution
function toFreud2(string) {
  let result = "";
  if (string) {
    result = string.split(" ");
    result.map((_w, i, arr) => (arr[i] = "sex"));
    result = result.join(" ");
  }
  return result;
}

console.log(toFreud1("Testing 1 2 3"));    // 'sex sex sex sex'
console.log(toFreud2("Testing 4 5 6 7"));  // 'sex sex sex sex sex'


