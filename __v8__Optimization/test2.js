

const fn = (a) => {
  if ((1 < 3)) return a;
}


//node --print-opt-code --redirect-code-traces --allow-natives-syntax x.js
// Collect type information on next call of function
%PrepareFunctionForOptimization(fn)

// Call function once to fill type information
fn(1);

// Call function again to go from uninitialized -> pre-monomorphic -> monomorphic
fn(1);
%OptimizeFunctionOnNextCall(fn);
fn(1);
