
# Desafio: Sistema de Gerenciamento de Contas Bancárias

## Objetivo
Criar uma classe chamada `ContaBancaria` que gerencia as contas bancárias, permitindo depósitos, saques e consulta de saldo.

## Requisitos

## Classe ContaBancaria

#### Propriedades:

- **titular: string** (público) - O nome do titular da conta.
- **saldo: number** (protegido) - O saldo da conta. Esta propriedade não deve ser acessível diretamente fora da classe.
- **numeroConta: string** (protegido) - O número da conta, que deve ser acessível apenas por classes que estendem `ContaBancaria`.

#### Métodos:

- **depositar(valor: number): void** (público) - Permite depositar um valor na conta. O valor deve ser maior que zero. Caso contrário, deve lançar um erro **(throw new Error("Valor inválido para depósito."))**.

- **sacar(valor: number): void** (público) - Permite sacar um valor da conta. O valor deve ser maior que zero e não pode exceder o saldo disponível. Se a condição não for atendida, deve lançar um erro **(throw new Error("Valor inválido para saque."))**.

- **consultarSaldo(): number** (público) - Retorna o saldo atual da conta. Este método deve permitir que o titular veja seu saldo.

## Classe ContaPoupanca (extensão de ContaBancaria)

#### Propriedade adicional:

- **taxaRendimento: number** (privado) - Representa a taxa de rendimento da conta poupança, expressa como um valor entre 0 e 1 (por exemplo, 0.05 para 5%). A taxa de rendimento é utilizada no cálculo de juros aplicados ao saldo da conta e deve ser inicializada no construtor da classe.

#### Método adicional:

- **renderJuros(): void** (público) - Aplica uma taxa de juros ao saldo. A taxa deve ser um número entre 0 e 1 (ex: 0.05 para 5%). Caso a taxa seja inválida (fora do intervalo permitido), deve lançar um erro **(throw new Error("Taxa de juros inválida."))**.
