
# Explicação do Código TypeScript - `BankAccount` e `SavingsAccount`

Este código em TypeScript define uma classe `BankAccount` (Conta Bancária) e uma classe derivada `SavingsAccount` (Conta Poupança). Essas classes permitem manipular contas bancárias com métodos para depósito, saque, verificação de saldo, e no caso de `SavingsAccount`, rendimentos.

## 1. Classe `BankAccount`

A classe `BankAccount` define uma conta bancária básica com as seguintes propriedades e métodos:

### 1.1 Propriedades

```typescript
public holder: string; 
protected balance: number;
protected accountNumber: number;
```
- `holder`: Define o nome do titular da conta. É uma propriedade pública e pode ser acessada diretamente.
- `balance`: Armazena o saldo da conta. É uma propriedade protegida e só pode ser acessada dentro da classe `BankAccount` ou classes derivadas.
- `accountNumber`: Armazena o número da conta. Também é uma propriedade protegida.

### 1.2 Construtor

```typescript
constructor(holder: string, accountNumber: number) {
    this.holder = holder;
    this.accountNumber = accountNumber;
    this.balance = 0;
}
```
- O construtor inicializa o titular da conta (`holder`) e o número da conta (`accountNumber`). O saldo (`balance`) é inicializado como 0.

### 1.3 Método `deposit`

```typescript
public deposit(value: number): void {
    if (value < 0) {
        throw new Error("Valor inválido para depósito.");
    }
    this.balance += value;
}
```
- Este método adiciona um valor ao saldo da conta. Se o valor for negativo, lança um erro informando que o valor do depósito é inválido.

### 1.4 Método `withdraw`

```typescript
public withdraw(value: number): void {
    if (value < 0 || value > this.balance) {
        throw new Error("Valor inválido para saque.");
    }
    this.balance -= value;
}
```
- Este método subtrai um valor do saldo da conta. Se o valor for negativo ou maior que o saldo disponível, lança um erro.

### 1.5 Método `checkBalance`

```typescript
public checkBalance(): number {
    return this.balance;
}
```
- Este método retorna o saldo atual da conta.

## 2. Classe `SavingsAccount` (Conta Poupança)

A classe `SavingsAccount` estende a classe `BankAccount`, herdando suas propriedades e métodos, e adiciona um método para rendimentos.

### 2.1 Propriedade `applyInterest`

```typescript
private applyInterest: number; //seria algo como "aplicar juros"
```
- `applyInterest`: Uma taxa que define o rendimento da poupança. Esta propriedade é privada e só pode ser acessada dentro da própria classe.

### 2.2 Construtor

```typescript
constructor(holder: string, accountNumber: number, applyInterest: number) {
    super(holder, accountNumber);
    this.applyInterest = applyInterest;
}
```
- O construtor de `SavingsAccount` chama o construtor da classe base (`super`) para inicializar o titular e o número da conta. Além disso, define a taxa de rendimento.

### 2.3 Método `yieldInterest`

```typescript
public yieldInterest(): void { //rendimento de juros
    if (this.applyInterest <= 0 || this.applyInterest >= 1) {
        throw new Error("Taxa de juros inválida.");
    }
    this.balance += this.balance * this.applyInterest;
}
```
- Este método aplica o rendimento ao saldo da poupança. Se a taxa de rendimento (applyInterest) for inválida (≤ 0 ou ≥ 1), lança um erro.

## 3. Exemplo de Uso

### 3.1 Criando uma Conta Bancária Comum

```typescript
const contaBancaria = new BankAccount("Artur", 2200);
contaBancaria.deposit(3000);
contaBancaria.withdraw(300);
console.log(contaBancaria.checkBalance()); // 2700
```
- Uma instância de `BankAccount` é criada para "Artur" com o número da conta 2200. Após depositar 3000 e sacar 300, o saldo final é 2700.

### 3.2 Criando uma Conta Poupança

```typescript
const contaPoupanca = new SavingsAccount("Artur", 1212, 0.1);
contaPoupanca.deposit(1200);
contaPoupanca.yieldInterest();
contaPoupanca.withdraw(12);
console.log(contaPoupanca.checkBalance()); // 1308
```
- Uma instância de `SavingsAccount` é criada com uma taxa de rendimento (applyInterest) de 0.1 (10%). Após depositar 1200, render juros, e sacar 12, o saldo final é 1308.

## Conclusão

Este código demonstra boas práticas em programação orientada a objetos (POO) usando TypeScript. As classes são bem estruturadas com separação de responsabilidades e métodos protegidos para segurança de dados. O uso de herança também mostra como uma classe pode ser expandida para adicionar funcionalidades (como no caso da `SavingsAccount`).
