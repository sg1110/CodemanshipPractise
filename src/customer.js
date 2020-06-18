class Customer {
  buyCd() {
    return "success";
  }
}

class Cd {
  constructor(title) {
    this.title = title;
  }
}

class Order {
  constructor(cd, quantity) {
    this.cd = cd;
    this.quantity = quantity;
  }
}

module.exports = {
  Customer,
  Cd,
  Order
};
