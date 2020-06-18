const { it } = require("mocha");
const Customer = require("../src/customer").Customer;
const Cd = require("../src/customer").Cd;
const Order = require("../src/customer").Order;

const expect = require("chai").expect;

let customer;
beforeEach(() => (customer = new Customer()));

describe("Customer interactions", () => {
  it("should be able to buy a cd", () => {
    const cd = new Cd("some cd");
    const order = new Order(cd, 1);
    expect(customer.buyCd(order)).to.equal("success");
  });
});

//buy <- order (title, quant)
