
// \n \r \t \' \" \$ \\ \uXXXX \xXX

// \xXX  'Latin 1'

const SpChrX = '\xc9p\xe9e is fun, but foil is more fun.' // !!! Épée is fun, but foil is more fun. !!!

console.log(SpChrX);

// \uXXXX 

const SpChrU = 'De Morgan\'s law: \u2310(P \u22c0 Q) \u21D4 (\u2310P) \u22c1 (\u2310Q)';

console.log(SpChrU);

// \$

const SpChr$ = `New si ES6: \${interpolation}` // !!! New si ES6: ${interpolation} !!!

console.log(SpChr$);





