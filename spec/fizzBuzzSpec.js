describe("FizzBuzz", function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("divides by three", function() {
      	expect(fizzBuzz.divisibleByThree(3)).toEqual(true);
  });

  it("recognizes if a number is not divisible by three", function() {
        expect(fizzBuzz.divisibleByThree(1)).toEqual(false);
  });

  it("divides by five", function() {
        expect(fizzBuzz.divisibleByFive(5)).toEqual(true);
  });

});
