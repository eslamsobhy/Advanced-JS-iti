// TWO MAIN REASONS FOR ENCAPSULATION:
// - To prevent code from outside the class from manipulating data from inside the class.
// - Allows internal changes without breaking the outside code!

class Account {
  // Public fields (available in the instances)
  locale = navigator.language;

  // Private fields (available in the instances)
  #movements = [];
  #pin; // Fields can't be declared in the constructor

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; // protected property (now it is private)
    // two properties that do not need data when creating the object
    // this._movements = []; // Protected property (by convention)
    // this.locale = navigator.language;
    // Every time we create an instance, this happens:
    console.log(`Thanks ${owner} for creating an account!`);
  }

  // Public Methods
  // Public interface
  // Public interface is used to prevent manipulating the properties directly, instead via methods.
  // also called APIs.
  getMovements() {
    // this method is created to get the movements data outside the class,
    // since it is protected and can't be accessed otside the class. (By convention)
    return this.#movements;
  }

  deposite(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposite(-val);
  }

  // Protected method
  //   _approveLoan(val) {
  //     // this should have some logic
  //     return true;
  //   }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposite(val);
      console.log("Loan Accepted!");
    }
  }

  // Protected Mothods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account("Eslam", "EGP", 1112);
acc1.deposite(250);
acc1.withdraw(140);
acc1.requestLoan(400);
console.log(acc1.getMovements());
// console.log(#approveLoan(400)); // ERROR: Can't be accessed outside of the class
// console.log(acc1.#movements); // ERROR: Can't be accessed outside of the class
console.log(acc1);
