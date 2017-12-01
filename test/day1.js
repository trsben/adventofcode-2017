var adventOfCode = require('../app.js'),
	should = require('should');

describe('Day 1', function() {
	describe('When passing a value to my function', function() {
		it('should return the same value', function() {
			var aoc = adventOfCode.Day1(5)
			aoc.should.equal(5);
		});
	});
});
