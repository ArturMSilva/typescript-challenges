// Desenvolver uma função em JavaScript que receba uma lista e retorne a média aritmética dos números presentes na lista.
// A função deve garantir que a entrada seja um array de números não vazio.
// Caso a entrada não atenda a esses critérios (não seja um array, esteja vazia ou contenha elementos que não são números),
// a função deve retornar null.

function arithmeticMean(list: number[]) {
  if (
    list.length === 0 ||
    !Array.isArray(list) ||
    list.some((numb) => typeof numb !== "number")
  )
    return null;
  let sum = 0;
  for (const numb of list) {
    sum += numb;
  }
  return sum / list.length;
}

console.log(arithmeticMean([1, 2, 3, 4, 5])); // 3
console.log(arithmeticMean([1, 2, 3, "4", 5])); // null