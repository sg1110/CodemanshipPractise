const { it } = require("mocha");

const Rover = require("../src/a").Rover;
const expect = require("chai").expect;

// describe("Given....", function() {
//   [{ it: "a", expect: "a" }].forEach(run =>
//     it(`should ... ${run.it} to.... ${run.expect}`, () => {
//       expect(a(run.it)).to.equal(run.expect);
//     })
//   );
// });

let myRover;
beforeEach(() => (myRover = new Rover([0, 0], "N")));

describe("rover initial position", () => {
  it("new rover has position of [0,0] by default", () => {
    expect(myRover.position).to.deep.equal([0, 0]);
  });

  it("new rover has position of [0,0] by default", () => {
    expect(myRover.facing).to.equal("N");
  });

  it("new rover is facing north by default", () => {
    expect(myRover.facing).to.equal("N");
  });
});

describe("forward and backward commands", () => {
  it("should move the rover forward by one position", () => {
    myRover.move(["f"]);
    expect(myRover.position).to.deep.equal([0, 1]);
  });

  it("should move the rover forward by two position", () => {
    myRover.move(["f", "f"]);
    expect(myRover.position).to.deep.equal([0, 2]);
  });

  it("should move the rover backwards by one position", () => {
    myRover.move(["f", "b"]);
    expect(myRover.position).to.deep.equal([0, 0]);
  });
});

describe("left and right commands", () => {
  it("should move the rover to the left by one position", () => {
    myRover.move(["l"]);
    expect(myRover.position).to.deep.equal([-1, 0]);
  });
  it("should move the rover to the right by one position", () => {
    myRover.move(["r"]);

    expect(myRover.position).to.deep.equal([1, 0]);
  });
});
