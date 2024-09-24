class BankAccount {
    #balance = 0;  
  
    constructor(accountHolder) {
      this.accountHolder = accountHolder;
    }
  
    #updateBalance(amount) {  
      this.#balance += amount;
    }
  
    deposit(amount) {
      this.#updateBalance(amount);
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  
  const account = new BankAccount('Alice');
  account.deposit(100);
  console.log(account.getBalance()); 