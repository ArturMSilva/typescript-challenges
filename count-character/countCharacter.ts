// Implemente uma função que recebe duas strings: uma palavra e um caractere.
// A função deve contar quantas vezes o caractere especificado aparece na palavra
// , sem diferenciar maiúsculas de minúsculas.
// Caso qualquer um dos parâmetros não seja do tipo string, a função deve retornar null.

function countCharacter(palavra:string, caractere:string) {
    if (typeof palavra !== "string" || typeof caractere !== "string") return null

    let contador = 0
    for (const letra of palavra) {
        if (letra.toLowerCase() === caractere.toLowerCase()) contador++
    }
    return contador
} 

console.log(countCharacter("Alemanha", "a")) // 3