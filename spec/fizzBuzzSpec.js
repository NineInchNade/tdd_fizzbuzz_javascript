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
        expect(fizzBuzz.divisibleByFive(15)).toEqual(true);
  });
  
  it("recognizes if a number is not divisible by five", function() {
        expect(fizzBuzz.divisibleByFive(1)).toEqual(false);
  });

  it("divides by 15", function() {
        expect(fizzBuzz.divisibleBy15(15)).toEqual(true);
  });

  it("returns \"Fizz\" on play if number is divisible by 3", function() {
        expect(fizzBuzz.playGame(3)).toEqual("Fizz");
  });

  it("returns \"Buzz\" on play if number is divisible by 5", function() {
        expect(fizzBuzz.playGame(5)).toEqual("Buzz");
  });

});
