var account = {
  owner: "Eslam",
  movements: [100, 200, 300, 400],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(move) {
    this.movements.push(move);
  },
};

console.log(account);
console.log(account.latest);

account.latest = 250;
console.log(account.movements);
