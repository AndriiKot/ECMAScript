
const INTERVAL = 500;
// or
const fnINTERVAL = () => 800; // for optimization v8


// not corect
// setInterval(console.log("HI!"), INTERVAL) !!! первым параметром должнын быть тело функции а не резултат 


// Corect:
setInterval(() => console.log(`HI!\n INTERVAL: ${INTERVAL}`), INTERVAL);
setInterval(() => console.log(`Hello!\n fnINTERVAL: ${fnINTERVAL()}`), fnINTERVAL());
