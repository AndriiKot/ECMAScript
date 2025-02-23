var main2 = (a) => {
  const hi = 'hi';
  return () => a + hi;
};

//node --print-opt-code --redirect-code-traces --allow-natives-syntax x.js
// Collect type information on next call of function
%PrepareFunctionForOptimization(main2)

// Call function once to fill type information
main2();

// Call function again to go from uninitialized -> pre-monomorphic -> monomorphic
main2();
%OptimizeFunctionOnNextCall(main2);
main2();
