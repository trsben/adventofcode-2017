// INVERSE CAPTCHA

/* The captcha requires you to review a sequence of digits (your puzzle input)
	and find the sum of all digits that match the next digit in the list. The list
	is circular, so the digit after the last digit is the first digit in the list.
*/
const captcha = function(sequence) {
	// split number in to array of single "characters" and parse back to integer
	let digits = sequence.toString().split('').map(x => parseInt(x)),
		offset = digits.length / 2;

	// reduce to a total
	return digits.reduce(function(total, value, idx, numbers) {
		// get the value half length ahead (while wrapping the array)
		let comparisonIndex = idx + offset;

		if (comparisonIndex > (numbers.length - 1)) {
			comparisonIndex = comparisonIndex - (numbers.length);
		}

		let comparisonValue = numbers[comparisonIndex];

		if (value === comparisonValue) { // is the comparison the same?
			total = total + value; // add to total
		}

		return total; // go with existing total
	}, 0);
};

module.exports = captcha;
