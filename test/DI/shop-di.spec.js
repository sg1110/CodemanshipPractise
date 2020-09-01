const { it } = require("mocha");
const Cd = require("../../src/shop-di").Cd;
const expect = require("chai").expect;

describe("Customer interactions", () => {
  it("should return eligible for discount if rated in top 100", () => {
    const cd = new Cd("some cd", 0, () => 1);
    expect(cd.isTopRated()).to.be.true;
  });
});
