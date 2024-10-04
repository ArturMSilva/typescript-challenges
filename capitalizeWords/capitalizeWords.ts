/*
Desafio: Adicionar um método à classe String que converte uma string em "Jaden Case".
Regras:
1. O método `toJadenCase` deve capitalizar a primeira letra de cada palavra em uma string.
2. Deve ser adicionado ao protótipo da classe `String`.
3. A interface `String` deve ser modificada para incluir o método `toJadenCase`.

Exemplo:
Input: "how can mirrors be real if our eyes aren't real"
Output: "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

String.prototype.toJadenCase = function (): string {
  return this.split(" ") // separa as palavras a partir de um espaço
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

interface String {
  toJadenCase(): string;
}

const input = "how can mirrors be real if our eyes aren't real";
console.log(input.toJadenCase()); // Output: "How Can Mirrors Be Real If Our Eyes Aren't Real"