class BankAccount2 {

  customerName;
  AccountNumber;
  #balance = 0; // making the properties PRIVATE

  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.AccountNumber = Date.now();
    this.balance = balance;
  }

  set balance(amount) { // Set the balance by SETTER Method
    if (isNaN(amount)) {
      throw new Error("Invalid Amount: Not Accessable ")
    }
    this.#balance = amount;
  }

  // GETTER Method to get the balance
  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdrawn(amount) {
    this.#balance -= amount;
  }

}

class CurrenAccount extends BankAccount2 {
  transactionLimit = 40000;

  constructor(customerName, balance = 0) {
    super(customerName, balance); // In order to get the properties of the parent class constructor we used (Super) Keyword
  }

  takeBusinessLoan(amount) {
    console.log("Taking a Loan for Buisness " + amount);
  }
}

class SavingsAccount extends BankAccount2 {

  transactionLimit = 10000;

  constructor(customerName, balance = 0) {
    super(customerName, balance);
  }

  #calculateInterest(amount) { // Created a Private method and called inside another method
    console.log("Claculating your initial Interest for Laon Section...." + amount)
  }

  takePersonalLoan(amount) {
    this.#calculateInterest(amount) // private mehtod can be called inside another method
    console.log("Taking the Laon for Personal Issues " + amount);
  }

}

const newCustomer = new SavingsAccount("Kaushik");
// newCustomer.balance = 5000;
console.log(newCustomer.takePersonalLoan(5000))
// newCustomer.deposit(500);
// newCustomer.takePersonalLoan(5000)
// console.log(newCustomer)
// newCustomer.withdrawn(500);
// console.log(newCustomer)