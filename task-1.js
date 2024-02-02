class Account {
  constructor({ login, email }) {
    this.login = login;
    this.email = email;
  }
  
  getInfo() {
    return `Login: ${this.login}, Email: ${this.email}`;
  }
}

console.log(typeof Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

console.log(mango.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

console.log(poly.getInfo()); // Login: Poly, Email: poly@mail.com