
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? (Math.sqrt(sq) + 1) ** 2 : -1
}

//node --print-opt-code --redirect-code-traces --allow-natives-syntax x.js
// Collect type information on next call of function
%PrepareFunctionForOptimization(findNextSquare)

// Call function once to fill type information
findNextSquare(625);

// Call function again to go from uninitialized -> pre-monomorphic -> monomorphic
findNextSquare(625);
%OptimizeFunctionOnNextCall(findNextSquare);
findNextSquare(625);


