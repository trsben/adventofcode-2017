// INVERSE CAPTCHA

/* The captcha requires you to review a sequence of digits (your puzzle input)
	and find the sum of all digits that match the next digit in the list. The list
	is circular, so the digit after the last digit is the first digit in the list.
*/
const captcha = function(sequence) {
	// split number in to array of single "characters" and parse back to integer
	let digits = sequence.toString().split('').map(x => parseInt(x));

	// reduce to a total
	return digits.reduce(function(total, value, idx, numbers) {
		// get the next value or the first value if last digit
		let comparisonValue = ((idx + 1) === numbers.length) ? numbers[0] : numbers[(idx + 1)];

		if (value === comparisonValue) { // is the comparison the same?
			total = total + value; // add to total
		}

		return total; // go with existing total
	}, 0);
};

module.exports = captcha;
