//Constructor Function
function BankAccount(customerName, balance = 0) {

  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  // this.deposit = (amount) => {
  //   this.balance += amount;
  // }

  // this.withdrawn = (amount) => {
  //   this.balance -= amount
  // }

}

window.onload = function() { // if we don't use this it will return null as it loads the file before the DOM fully load up
  const accounts = [];
  const accountForm = document.querySelector('#accountForm');
  const customerName = document.querySelector('#customerName');
  const balance = document.querySelector('#balance');

  //Depsoit
  const DepositForm = document.querySelector('#DepositForm');
  const accountNumber = document.querySelector('#accountNumber');
  const amount = document.querySelector('#amount');

  accountForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const account = new BankAccount(customerName.value, +balance.value); // (+) is used to convert the string value to Number
    accounts.push(account);
    console.log(account)
  })

  DepositForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let account = accounts.find((account) => account.accountNumber === +accountNumber.value);

    account.deposit(+amount.value)
    console.log(accounts)
  })
}

// Prototype_Chaining

BankAccount.prototype.deposit = function(amount){

  this.balance += amount;
  
}

BankAccount.prototype.withdrawn = function(amount){

  this.balance -= amount;
  
}