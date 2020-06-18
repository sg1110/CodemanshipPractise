class Cd {
  constructor(title, quantity) {
    this.title = title;
    this.quantity = quantity;
    this.rating;
  }
  buyCd(order) {
    if (order.cd.title === this.title && order.quantity <= this.quantity) {
      this.quantity -= order.quantity;
      return "success";
    }
    return "failure";
  }
  addRating(ratingScore) {
    this.rating = ratingScore;
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
