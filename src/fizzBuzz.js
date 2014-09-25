function FizzBuzz() {};

FizzBuzz.prototype.divisibleByThree = function(num) {
	return num % 3 === 0;
};

FizzBuzz.prototype.divisibleByFive = function(num) {
	return num % 5 === 0;
};

FizzBuzz.prototype.divisibleBy15 = function(num) {
	return num % 15 === 0;
};

FizzBuzz.prototype.playGame = function(num) {
	
	if (this.divisibleBy15(num)) {
		return "FizzBuzz";
	} else if (this.divisibleByThree(num)) {
		return "Fizz"; 
	} else if (this.divisibleByFive(num)) {
		return "Buzz";
	} else {
		return num;
	}

};

