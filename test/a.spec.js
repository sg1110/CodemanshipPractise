const { it } = require("mocha");
const Rover = require("../src/a").Rover;
const expect = require("chai").expect;

let myRover;
var currentPosition = [0, 0];
beforeEach(() => (myRover = new Rover([0, 0], "N")));

describe("rover initial position", () => {
  it("new rover has position of [0,0] by default", () => {
    expect(myRover.position).to.deep.equal([0, 0]);
  });

  it("new rover has position of N by default", () => {
    expect(myRover.facing).to.equal("N");
  });
});

describe("Movement tests", function() {
  [
    { input: ["f"], expect: [0, 1] },
    { input: ["f", "f"], expect: [0, 2] },
    { input: ["f", "b"], expect: [0, 0] }
  ].forEach(run =>
    describe(`GIVEN a movement command ${run.input} at current position ${currentPosition}`, () => {
      it(`SHOULD move the rover by ${run.input.length} and its position is ${run.expect}`, () => {
        myRover.followCommand(run.input);
        expect(myRover.position).to.deep.equal(run.expect);
      });
    })
  );
});

describe("Rotation Tests", function() {
  [
    { input: ["r"], expect: "E" },
    { input: ["l"], expect: "W" },
    { input: ["l", "l"], expect: "S" }
  ].forEach(run =>
    describe(`GIVEN a rotation command ${run.input}`, () => {
      it(`SHOULD rotate and it's facing position should be ${run.expect}`, () => {
        myRover.followCommand(run.input);
        expect(myRover.facing).to.deep.equal(run.expect);
      });
    })
  );
});
