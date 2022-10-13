//Instead of constructor we can simply use this Class
class BankAccount1 {

  customerName;
  AccountNumber;
  balance = 0;

  constructor(customerName, balance = 0) {

    this.customerName = customerName;
    this.AccountNumber = Date.now();
    this.balance = balance;

  }

  deposit(amount) {
    this.balance += amount;
  }

  withdrawn(amount) {
    this.balance -= amount;
  }

}

const kaushik = new BankAccount1("Kaushik", 3000);
console.log(kaushik);
kaushik.deposit(3000);
kaushik.withdrawn(500);
console.log(kaushik);
