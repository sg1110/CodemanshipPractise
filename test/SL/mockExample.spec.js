const { it } = require("mocha");
const Cd = require("../../src/shop-sl").Cd;
const expect = require("chai").expect;
const externalRating = require("../../src/externalRating");
const sinon = require("sinon");

let externalRatingMock;
let expectation;

describe("Mock - fake methods (spies) with pre-programmed behaviour (stubs)", () => {
  beforeEach(function() {
    externalRatingMock = sinon.mock(externalRating);

    expectation = externalRatingMock
      .expects("externalRating")
      .once()
      .returns(1);
  });

  afterEach(function() {
    externalRatingMock.restore();
  });

  it("should confirm that external rating was called once", () => {
    const cd = new Cd("some cd", 1);
    cd.isTopRated();
    expectation.verify();
  });

  it("should confirm that cd is top rated", () => {
    const cd = new Cd("some cd", 1);
    expect(cd.isTopRated()).to.be.true;
  });
});
