
# Explicação do Código TypeScript - `capitalizeWords`

Este código em TypeScript estende o protótipo da classe `String`, adicionando um novo método chamado `toJadenCase`. Este método transforma cada palavra em uma string, capitalizando a primeira letra de cada uma. A seguir, explicamos cada parte do código.

## 1. Extensão do Protótipo `String`

```typescript
String.prototype.toJadenCase = function (): string {
```
Aqui, estamos estendendo o protótipo da classe `String` para adicionar um novo método chamado `toJadenCase`. Isso significa que todas as instâncias de `String` terão acesso a esse método.

- `String.prototype`: Refere-se ao protótipo da classe `String`, que permite que novas funcionalidades sejam adicionadas a todas as strings.
- `function (): string`: A função não aceita parâmetros e retorna uma string.

## 2. Separação das Palavras

```typescript
return this.split(" ")
```

A palavra-chave `this` refere-se à string na qual o método `toJadenCase` foi chamado. O método `split(" ")` divide a string em um array de palavras, utilizando o espaço como delimitador.

- `split(" ")`: Cria um array onde cada elemento é uma palavra da string original.

## 3. Capitalização da Primeira Letra

```typescript
.map((word) => word[0].toUpperCase() + word.slice(1))
```

Neste trecho, estamos utilizando o método `map()` para iterar sobre cada palavra do array resultante. Para cada palavra, a primeira letra é convertida para maiúscula, e o restante da palavra é mantido inalterado.

- `word[0].toUpperCase()`: Acessa a primeira letra da palavra e a converte para maiúscula.
- `word.slice(1)`: Retorna a parte da palavra a partir do segundo caractere até o final.
- `map((word) => ...)`: Aplica a função a cada elemento do array, retornando um novo array com as palavras modificadas.

## 4. Junção das Palavras

```typescript
.join(" ");
```

Depois de capitalizar as letras iniciais de cada palavra, o método `join(" ")` é usado para combinar as palavras de volta em uma única string, separando-as com um espaço.

- `join(" ")`: Cria uma string a partir do array de palavras, inserindo um espaço entre cada palavra.

## 5. Interface `String`

```typescript
interface String {
  toJadenCase(): string;
}
```

Aqui, estamos declarando uma interface que estende a classe `String`, informando ao TypeScript que a classe `String` terá um novo método chamado `toJadenCase` que retorna uma string. Isso ajuda o TypeScript a reconhecer o método durante a verificação de tipos, evitando erros e proporcionando autocompletar em IDEs.

## 6. Exemplo de Uso

```typescript
const frase = "como você está";
console.log(frase.toJadenCase()); // Saída: "Como Você Está"
```

Neste exemplo, uma string `"como você está"` é criada e o método `toJadenCase()` é chamado. O resultado é uma nova string onde cada palavra começa com uma letra maiúscula: `"Como Você Está"`.

## Conclusão

O método `toJadenCase` é uma maneira eficaz de capitalizar a primeira letra de cada palavra em uma string. Este código é um exemplo de boas práticas, incluindo:

- Extensão segura do protótipo de `String`.
- Utilização de métodos funcionais como `split`, `map`, e `join` para transformar a string de maneira clara e concisa.
- Declaração da interface para garantir a tipagem adequada em TypeScript.
