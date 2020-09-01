const { it } = require("mocha");
const Cd = require("../../src/shop-sl").Cd;
const expect = require("chai").expect;
const externalRating = require("../../src/externalRating");
const sinon = require("sinon");

let externalRatingSpy;
describe("Spy - function that records arguments, return value etc for all its calls", () => {
  beforeEach(function() {
    externalRatingSpy = sinon.spy(externalRating, "externalRating");
  });

  afterEach(function() {
    externalRatingSpy.restore();
  });

  it("should confirm that the product is top rated", () => {
    const cd = new Cd("some cd", 1);
    cd.isTopRated();
    expect(externalRatingSpy.callCount).to.eq(1);
  });
});
