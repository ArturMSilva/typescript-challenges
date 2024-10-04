// Crie uma função que receba uma string e retorne as palavras invertidas,
// mantendo a ordem das palavras, mas com cada palavra em ordem reversa.

const reverseWord = (word: string): string => {
  return word.split("").reverse().join("").split(" ").reverse().join(" ");
};

console.log(reverseWord("Hello World Artur")); // olleH dlroW rutrA