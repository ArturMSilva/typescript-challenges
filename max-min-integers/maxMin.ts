// Recebe uma lista de inteiros como entrada e retornam 
// o maior e o menor número dessa lista, respectivamente.

const min = (list: number[]): number => Math.min(...list)
const max = (list: number[]): number => Math.max(...list)

console.log(min([2, 4, 5, -98]))
console.log(max([34, 2, 5, 9]))