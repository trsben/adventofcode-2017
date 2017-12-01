import should from 'should';
import captcha from '../app/day-1.js';

describe('INVERSE CAPTCHA', function() {
	describe('When passed a captcha of 1122', function() {
		it('should return an answer of 3', function() {
			const value = captcha('1122');

			value.should.equal(3);
		});
	});

	describe('When passed a captcha of 1111', function() {
		it('should return an answer of 4', function() {
			const value = captcha('1111');

			value.should.equal(4);
		});
	});

	describe('When passed a captcha of 1234', function() {
		it('should return an answer of 0', function() {
			const value = captcha('1234');

			value.should.equal(0);
		});
	});

	describe('When passed a captcha of 91212129', function() {
		it('should return an answer of 9', function() {
			const value = captcha('91212129');

			value.should.equal(9);
		});
	});
});
