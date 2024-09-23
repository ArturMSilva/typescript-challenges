
# Explicação do Código TypeScript

Este documento fornece uma explicação detalhada do código TypeScript que reverte a ordem das letras dentro de cada palavra em uma string.

### Código

```typescript
const reverseWord = (word: string): string => {
  return word.split("").reverse().join("").split(" ").reverse().join(" ");
};

console.log(reverseWord("Hello World Artur")); // olleH dlroW rutrA
```

### Explicação Detalhada

#### 1. `const reverseWord = (word: string): string =>`

- **Declaração de Função**: Aqui, uma função chamada `reverseWord` é declarada como uma `arrow function`.
- **Parâmetros**: A função recebe um parâmetro chamado `word`, que é uma string (`word: string`).
- **Tipo de Retorno**: O tipo de retorno da função é especificado como uma string (`: string`).

#### 2. `return word.split("").reverse().join("").split(" ").reverse().join(" ");`

- **Dividindo a String em Caracteres**: A função começa com `word.split("")`, que converte a string em um array de caracteres. Por exemplo, `"Hello"` se torna `['H', 'e', 'l', 'l', 'o']`.
  
- **Invertendo os Caracteres**: Em seguida, `reverse()` é aplicado no array de caracteres para inverter a ordem dos caracteres. Por exemplo, `['H', 'e', 'l', 'l', 'o']` se torna `['o', 'l', 'l', 'e', 'H']`.

- **Unindo os Caracteres**: O método `join("")` une os caracteres invertidos de volta em uma string. Neste ponto, `"Hello"` se torna `"olleH"`.

- **Dividindo a String em Palavras**: Agora, a string resultante é dividida novamente, mas desta vez por espaços usando `split(" ")`, o que transforma a string em um array de palavras. Para `"Hello World"`, por exemplo, o resultado seria `['Hello', 'World']`.

- **Invertendo a Ordem das Palavras**: O método `reverse()` é chamado novamente, desta vez para inverter a ordem das palavras no array. Para `['dlroW', 'olleH']`, o resultado seria `['olleH', 'dlroW']`.

- **Unindo as Palavras**: Finalmente, `join(" ")` une as palavras de volta em uma string, com as palavras invertidas separadas por espaços. O resultado final para `"Hello World"` seria `"olleH dlroW"`.

#### 3. `console.log(reverseWord("Hello World Artur"));`

- **Saída Esperada**: Quando esta linha é executada, o resultado exibido no console será `olleH dlroW rutrA`.

### Fluxo Completo do Código

1. A string `"Hello World Artur"` é recebida como entrada.
2. A string é dividida em caracteres e invertida, resultando em `"rutrA dlroW olleH"`.
3. A string é dividida em palavras, a ordem das palavras é revertida, e a string final `"olleH dlroW rutrA"` é exibida.

### Conclusão

Esta função demonstra o uso criativo de métodos de string e array do JavaScript para inverter o conteúdo de palavras em uma string, bem como inverter a ordem das palavras.

