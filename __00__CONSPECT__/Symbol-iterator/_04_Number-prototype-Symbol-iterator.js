Number.prototype[Symbol.iterator] = () => (
    String.prototype[Symbol.iterator].call('zdec')
)
console.log([...3.14]);
