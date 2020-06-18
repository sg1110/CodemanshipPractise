class Cd {
  constructor(title, quantity) {
    this.title = title;
    this.quantity = quantity;
  }
  buyCd(order) {
    if (order.quantity <= this.quantity) {
      return "success";
    }
    if (order.quantity > this.quantity) {
      return "failure";
    }
  }
}

class Order {
  constructor(cd, quantity) {
    this.cd = cd;
    this.quantity = quantity;
  }
}

module.exports = {
  Cd,
  Order
};
