const bank = require("../javascript/bank");
const expect = require("chai").expect;

describe("First test", function() {
  const four = "   " + "|_|" + "  |";
  const one = "   " + "  |" + "  |";
  const two = " _ " + " _|" + "|_ ";
  const three = " _ " + " _|" + " _|";
  const five = " _ " + "|_ " + " _|";
  const six = " _ " + "|_ " + "|_|";
  const seven = " _ " + "  |" + "  |";
  const eight = " _ " + "|_|" + "|_|";
  const nine = " _ " + "|_|" + " _|";
  const oneToNine =
    one + two + three + four + five + six + seven + eight + nine;

  it(`should print a digit four`, function() {
    expect(bank(four)).to.equal(4);
  });

  it("should print a digit 1", function() {
    expect(bank(one)).to.equal(1);
  });

  it("should print a digit 2", function() {
    expect(bank(two)).to.equal(2);
  });

  it("should print a digit 3", function() {
    expect(bank(three)).to.equal(3);
  });

  it("should print a digit 5", function() {
    expect(bank(five)).to.equal(5);
  });

  it("should print a digit 6", function() {
    expect(bank(six)).to.equal(6);
  });

  it("should print a digit 7", function() {
    expect(bank(seven)).to.equal(7);
  });

  it("should print a digit 8", function() {
    expect(bank(eight)).to.equal(8);
  });

  it("should print a digit 9", function() {
    expect(bank(nine)).to.equal(9);
  });
});
