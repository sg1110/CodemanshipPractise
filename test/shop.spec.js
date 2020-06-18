const { it } = require("mocha");
const Cd = require("../src/shop").Cd;
const Order = require("../src/shop").Order;
const expect = require("chai").expect;

describe("Customer interactions", () => {
  it("should be able to buy a cd", () => {
    const cd = new Cd("some cd", 1);
    const order = new Order("some cd", 1);
    expect(cd.buyCd(order)).to.equal("success");
  });

  it("stock should go down when a cd is purchased", () => {});

  it("should not be able to buy a cd when it's not in stock", () => {
    const cd = new Cd("some cd", 0);
    const order = new Order("some cd", 1);
    expect(cd.buyCd(order)).to.equal("failure");
  });
});
