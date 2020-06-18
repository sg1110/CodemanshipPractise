class Cd {
  constructor(title, quantity, getExternalRating) {
    this.title = title;
    this.quantity = quantity;
    this.rating;
    this.getExternalRating = getExternalRating;
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

  isTopRated(externalCharter) {
    this.rating = this.getExternalRating(externalCharter);
    return this.rating < 101;
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
