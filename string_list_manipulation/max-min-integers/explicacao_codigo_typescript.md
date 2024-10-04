
# Explicação do Código

Este trecho de código em TypeScript define duas funções `min` e `max` para encontrar o valor mínimo e máximo em uma lista de números. Vamos detalhar cada parte:

```typescript
const min = (list: number[]): number => Math.min(...list)
const max = (list: number[]): number => Math.max(...list)
```

## 1. **Declaração da Função com Arrow Function**

Em TypeScript, as funções podem ser declaradas usando a sintaxe de **arrow function**, que é uma forma mais concisa de escrever funções:

```typescript
const min = (list: number[]): number =>
```

- `const`: Declara a função como uma constante, garantindo que ela não possa ser reatribuída.
- `min`: Nome da função.
- `(list: number[])`: Define um parâmetro chamado `list`, que é um array de números (`number[]`).
- `: number`: Especifica que o tipo de retorno da função será um número.

A mesma estrutura é usada para a função `max`.

## 2. **Uso do Método `Math.min` e `Math.max`**

As funções utilizam os métodos nativos do JavaScript:

```typescript
Math.min(...list)
Math.max(...list)
```

- `Math.min` e `Math.max`: São métodos que retornam, respectivamente, o menor e o maior valor entre os argumentos fornecidos.
- `...list`: O operador **spread (`...`)** é usado para "espalhar" os elementos do array `list` como argumentos individuais para `Math.min` e `Math.max`.

### Exemplo de Explicação do Operador Spread (`...`):
O operador spread transforma o array `[1, 2, 3]` nos valores `1, 2, 3`, permitindo que `Math.min` ou `Math.max` avaliem esses números como argumentos individuais.

```typescript
const lista = [1, 2, 3];
Math.min(...lista); // Equivalente a Math.min(1, 2, 3), retornando 1
```

## 3. **Resumo**

- A função `min` retorna o menor número dentro do array `list` usando `Math.min`.
- A função `max` retorna o maior número dentro do array `list` usando `Math.max`.
- O código é eficiente e direto, utilizando o operador **spread** para passar o array como uma lista de argumentos.

### Exemplo de Uso:

```typescript
const numeros = [10, 20, 30, 40, 50];

console.log(min(numeros)); // Retorna 10
console.log(max(numeros)); // Retorna 50
```