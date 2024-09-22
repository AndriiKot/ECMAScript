function evil(n) {
  const binaryArray = n.toString(2).split("");
  const sum = binaryArray.reduce((a, b) => a + Number(b), 0);
  return sum & 1 ? "It's Odious!" : "It's Evil!";
}

function evilMy(n) {
  const binaryNumber = n.toString(2);
  const binaryArray = binaryNumber.split("");
  const sum = binaryArray.reduce((a, b) => a + Number(b), 0);
  return sum & 1 ? "It's Odious!" : "It's Evil!";
}

// evilOptimized
function evilOptimized(n) {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n >>= 1; // Сдвиг вправо на 1 бит
  }
  return count & 1 ? "It's Odious!" : "It's Evil!";
}

