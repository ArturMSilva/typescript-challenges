
# Desafio: Sistema de Gerenciamento de Contas Bancárias

## Objetivo
Criar uma classe chamada `ContaBancaria` que gerencia as contas bancárias, permitindo depósitos, saques e consulta de saldo.

## Requisitos

### Classe ContaBancaria

#### Propriedades:

- **titular: string** (público) - O nome do titular da conta.
- **saldo: number** (privado) - O saldo da conta. Esta propriedade não deve ser acessível diretamente fora da classe.
- **numeroConta: string** (protegido) - O número da conta, que deve ser acessível apenas por classes que estendem `ContaBancaria`.

#### Métodos:

- **depositar(valor: number): void** (público) - Permite depositar um valor na conta. O valor deve ser maior que zero.
- **sacar(valor: number): void** (público) - Permite sacar um valor da conta. O valor deve ser maior que zero e não pode exceder o saldo disponível.
- **consultarSaldo(): number** (público) - Retorna o saldo atual da conta. Este método deve permitir que o titular veja seu saldo.

### Classe ContaPoupanca (extensão de ContaBancaria)

#### Método adicional:

- **renderJuros(taxa: number): void** (público) - Aplica uma taxa de juros ao saldo. A taxa deve ser um número entre 0 e 1 (ex: 0.05 para 5%).
