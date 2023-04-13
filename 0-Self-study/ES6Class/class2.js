// TWO MAIN REASONS FOR ENCAPSULATION:
// - To prevent code from outside the class from manipulating data from inside the class.
// - Allows internal changes without breaking the outside code!

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // two properties that do not need data when creating the object
    this.movements = [];
    this.locale = navigator.language;
    // Every time we create an instance, this happens:
    console.log(`Thanks ${owner} for creating an account!`);
  }

  // Public interface
  // Public interface is used to prevent manipulating the properties directly, instead via methods.
  // also called APIs.
  deposite(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposite(-val);
  }

  approveLoan(val) {
    // this should have some logic
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposite(val);
      console.log("Loan Accepted!");
    }
  }
}

const acc1 = new Account("Eslam", "EGP", 1112);
acc1.deposite(250);
acc1.withdraw(140);
console.log(acc1);
