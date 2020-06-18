class Cd {
    constructor(title, quantity) {
      this.title = title;
      this.quantity = quantity;
    }
    buyCd() {
      if (this.quantity > 0) {
        return "success";
      }
      if (this.quantity <= 0) {
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
  