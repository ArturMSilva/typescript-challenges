// Função listSum: Recebe uma lista de número e retorna o somário deles.
// Se a lista for vazia retorna 0. Se a lista for inválida, retorna null.

function listSum(lista: number[]) {
  if (!Array.isArray(lista)) return null;
  if (lista.length === 0) return 0;

  let soma = 0;
  for (const numero of lista) {
    soma += numero;
  }
  return soma;
}

console.log(listSum([4, 6, 3, 7])); // 20
console.log(listSum([1, 2, 3])); // 6