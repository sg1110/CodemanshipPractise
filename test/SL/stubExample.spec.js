const { it } = require("mocha");
const Cd = require("../../src/shop-sl").Cd;
const expect = require("chai").expect;
const externalRating = require("../../src/externalRating");
const sinon = require("sinon");

let externalRatingStub;
describe("Stubs - altering external ratings behaviour. Not calling the original function", () => {
  beforeEach(function() {
    externalRatingStub = sinon
      .stub(externalRating, "externalRating")
      .returns(1);
  });

  afterEach(function() {
    externalRatingStub.restore();
  });

  it("should confirm that the product is top rated", () => {
    const cd = new Cd("some cd", 1);
    expect(cd.isTopRated()).to.be.true;
  });
});
