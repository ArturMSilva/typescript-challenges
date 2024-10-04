// Implemente uma função que recebe um número e verifica se ele é par ou ímpar.
// Caso o valor passado não seja um número, a função deve retornar null.
// Use o operador módulo (%) para realizar a verificação.

const checkEvenOdd = (numero: number) => {
  if (typeof numero != "number") return null;
  if (numero % 2 === 0) return "Par";
  return "Ímpar";
};

console.log(checkEvenOdd(4)); //Par
console.log(checkEvenOdd(7)); //Ímpar
