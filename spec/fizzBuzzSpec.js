describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("divides by three", function() {
      	expect(fizzBuzz.divisibleByThree(3)).toEqual(true);
  });

});
