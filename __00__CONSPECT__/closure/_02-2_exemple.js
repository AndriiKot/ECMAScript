
const createPlayer = (name, score = 0) => {
 return () => `${name} ${score++}`
}

const p1 = createPlayer('Andrii')
const p2 = createPlayer('Roma')

console.log(p1())   // Andrii 0
console.log(p1())   // Andrii 1
console.log(p1())   // Andrii 2

console.log(p2())   // Roma 0
console.log(p2())   // Roma 1


