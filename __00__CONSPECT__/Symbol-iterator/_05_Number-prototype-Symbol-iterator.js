console.log([...{ [Symbol.iterator]: function* () { yield* "zdec"; } }])

//console.log([...3.14]);

[...${{ toString: () => "zdec", valueOf: () => 3.14 }}]
