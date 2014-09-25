function FizzBuzz() {};

FizzBuzz.prototype.divisibleByThree = function(num) {
	return num % 3 === 0;
};

FizzBuzz.prototype.divisibleByFive = function(num) {
	return num % 5 === 0;
};

