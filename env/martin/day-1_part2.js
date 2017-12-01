// INVERSE CAPTCHA

/* The captcha requires you to review a sequence of digits (your puzzle input)
 and find the sum of all digits that match the next digit in the list. The list
 is circular, so the digit after the last digit is the first digit in the list.
 */
const captcha = function (sequence) {
    var total = 0;
    var offset = sequence.length / 2;
    var sequenceExtended = sequence + sequence; // prevent need for wrap around

    for (var i = 0; i < sequence.length; i++) {
        var index1 = i;
        var index2 = i + offset;

        var compare1 = sequenceExtended[index1];
        var compare2 = sequenceExtended[index2];

        if (compare1 === compare2) {
            total += Number(compare1);
        }
    }

    return total;
};

module.exports = captcha;
