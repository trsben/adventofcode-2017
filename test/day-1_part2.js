import should from 'should';

var captcha;

if (process.env.KEY) {
	captcha = require('../env/' + process.env.KEY.toLowerCase() + '/day-1_part2.js');
}
else {
	throw "An environment was not provided";
}

describe('INVERSE CAPTCHA - PART 2', function() {
	describe('When passed a captcha of 1212', function() {
		it('should return an answer of 6', function() {
			const value = captcha('1212');

			value.should.equal(6);
		});
	});

	describe('When passed a captcha of 1221', function() {
		it('should return an answer of 0', function() {
			const value = captcha('1221');

			value.should.equal(0);
		});
	});

	describe('When passed a captcha of 123425', function() {
		it('should return an answer of 0', function() {
			const value = captcha('123425');

			value.should.equal(4);
		});
	});

	describe('When passed a captcha of 123123', function() {
		it('should return an answer of 9', function() {
			const value = captcha('123123');

			value.should.equal(12);
		});
	});

	describe('When passed a captcha of 12131415', function() {
		it('should return an answer of 1393', function() {
			const value = captcha('12131415');

			value.should.equal(4);
		});
	});
});
