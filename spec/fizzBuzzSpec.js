describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe("It knows ", function() {
  it("if a number is divisible by three", function() {
      	expect(fizzBuzz.divisibleByThree(3)).toEqual(true);
  });

  it("recognizes if a number is not divisible by three", function() {
        expect(fizzBuzz.divisibleByThree(1)).toEqual(false);
  });

  it("if a number is divisible by five", function() {
        expect(fizzBuzz.divisibleByFive(15)).toEqual(true);
  });
  
  it(" if a number is not divisible by five", function() {
        expect(fizzBuzz.divisibleByFive(1)).toEqual(false);
  });

  it("if a number is divisible by 15", function() {
        expect(fizzBuzz.divisibleBy15(15)).toEqual(true);
  });

   it(" if a number is not divisible by 15", function() {
        expect(fizzBuzz.divisibleByFive(1)).toEqual(false);
  });
 });

  describe("the game returns", function() {
  it("\"Fizz\" on play if number is divisible by 3", function() {
        expect(fizzBuzz.playGame(3)).toEqual("Fizz");
  });

  it("\"Buzz\" on play if number is divisible by 5", function() {
        expect(fizzBuzz.playGame(5)).toEqual("Buzz");
  });
});

});
