const str = 'Andrii';

console.log(str.charAt(0), str.charAt(1)); // A n

console.log(str.charAt(-1));    // ''
console.log(str.charAt(100));   //  ''


console.log(`str.charAt(-1): ''; '' === str.charAt(-1): ${'' === str.charAt(-1)}`)         // true
console.log(`str.charAt(100): ''; '' === str.charAt(100): ${'' === str.charAt(100)}`)      // true


console.log(str); // Andrii


