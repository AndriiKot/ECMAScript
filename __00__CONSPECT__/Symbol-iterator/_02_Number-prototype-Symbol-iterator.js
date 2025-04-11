Number.prototype[Symbol.iterator]=function(){
 var current = 0;
 var results = ["z", "d", "e", "c"];
 return {
  next: function(){
   if (current<results.length) return {done: false, value:results[current++]}
   return {done:true}
  }
 }
}
console.log([...3.14]);

