
# Explicação do Código TypeScript

Este documento fornece uma explicação detalhada do código TypeScript que verifica se um número é par ou ímpar.

### Código

```typescript
const checkEvenOdd = (numero:number) => {
    if(typeof numero != "number") return null;
    if(numero % 2 === 0) return "Par"
    return "Ímpar"
}

console.log(checkEvenOdd(4)); // Par
console.log(checkEvenOdd(7)); // Ímpar
```

### Explicação Detalhada

#### 1. `const checkEvenOdd = (numero:number) =>`

- **Declaração de Função**: Uma função chamada `checkEvenOdd` é declarada como uma `arrow function`.
- **Parâmetros**: A função recebe um parâmetro chamado `numero`, que é do tipo `number` (especificado como `numero:number`).
- **Tipo de Retorno**: O tipo de retorno não é explicitamente declarado aqui, mas a função pode retornar uma `string` ou `null`.

#### 2. `if(typeof numero != "number") return null;`

- **Validação de Tipo**: A primeira verificação dentro da função usa `typeof numero` para garantir que o valor passado seja de fato um número. Se `numero` não for do tipo `number`, a função retorna `null`, indicando que a entrada é inválida.

#### 3. `if(numero % 2 === 0) return "Par"`

- **Verificação de Paridade**: Aqui, o código verifica se o número é par usando o operador `%`, que retorna o resto da divisão de `numero` por 2.
  - Se o resultado for `0` (ou seja, `numero` é divisível por 2), então o número é par, e a função retorna a string `"Par"`.

#### 4. `return "Ímpar"`

- **Caso Ímpar**: Se o número não for par, o fluxo da função passa diretamente para esta linha, retornando `"Ímpar"`, o que indica que o número é ímpar.

#### 5. `console.log(checkEvenOdd(4));` e `console.log(checkEvenOdd(7));`

- **Primeiro Exemplo (`checkEvenOdd(4)`):** Quando a função é chamada com o argumento `4`, o retorno será `"Par"` porque `4 % 2 === 0`.
  
- **Segundo Exemplo (`checkEvenOdd(7)`):** Quando a função é chamada com o argumento `7`, o retorno será `"Ímpar"` porque `7 % 2 !== 0`.

### Fluxo Completo do Código

1. A função recebe um número como entrada.
2. Verifica se o tipo do parâmetro é `number`. Se não for, retorna `null`.
3. Verifica se o número é divisível por 2 (par), retornando `"Par"` se for.
4. Caso contrário, retorna `"Ímpar"`, indicando que o número é ímpar.

### Conclusão

Esta função é um exemplo simples e eficiente de como verificar se um número é par ou ímpar, com uma verificação adicional de tipo para garantir que a entrada seja válida.

