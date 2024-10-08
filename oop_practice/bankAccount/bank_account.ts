class BankAccount {
  public holder: string; //titular
  protected balance: number; //saldo
  protected accountNumber: number; //numeroConta

  constructor(holder: string, accountNumber: number) {
    this.holder = holder;
    this.accountNumber = accountNumber;
    this.balance = 0;
  }

  public deposit(value: number): void {
    //depositar
    if (value < 0) {
      throw new Error("Valor inválido para depósito.");
    }

    this.balance += value;
  }

  public withdraw(value: number): void {
    //sacar
    if (value < 0 || value > this.balance) {
      throw new Error("Valor inválido para saque.");
    }

    this.balance -= value;
  }

  public checkBalance(): number {
    //verificar saldo
    return this.balance;
  }
}

class SavingsAccount extends BankAccount {
  //ContaPoupanca
  private applyInterest: number;

  constructor(holder: string, accountNumber: number, applyInterest: number) {
    super(holder, accountNumber);
    this.applyInterest = applyInterest;
  }

  public yieldInterest(): void { //rendimento de juros
    if (this.applyInterest <= 0 || this.applyInterest >= 1) {
      throw new Error("Taxa de juros inválida.");
    }

    this.balance += this.balance * this.applyInterest;
  }
}

const contaBancaria = new BankAccount("Artur", 2200)

contaBancaria.deposit(3000)
contaBancaria.withdraw(300)
console.log(contaBancaria.checkBalance()) //2700

const contaPoupanca = new SavingsAccount("Artur", 1212, 0.1)

contaPoupanca.deposit(1200)
contaPoupanca.yieldInterest()
contaPoupanca.withdraw(12)
console.log(contaPoupanca.checkBalance()) //1308
