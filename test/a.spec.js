const a = require("../javascript/a");
const expect = require("chai").expect;

describe("Given....", function() {
  [{ it: "a", expect: "a" }].forEach(run =>
    it(`should ... ${run.it} to.... ${run.expect}`, () => {
      expect(a(run.it)).to.equal(run.expect);
    })
  );
});
