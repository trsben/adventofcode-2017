import should from 'should';

var manhattanDistance;

if (process.env.KEY) {
     manhattanDistance = require('../env/' + process.env.KEY.toLowerCase() + '/day-3.js');
}
else {
	throw "An environment was not provided";
}

describe('Manhattan Distance', function() {
	describe('When passed an input of 1', function() {
		it('should return an answer of 0', function() {
			const value = manhattanDistance(1);

			value.should.equal(18);
		});
	});

    describe('When passed an input of 12', function() {
        it('should return an answer of 3', function() {
            const value = manhattanDistance(12);

            value.should.equal(3);
        });
    });

    describe('When passed an input of 23', function() {
        it('should return an answer of 2', function() {
            const value = manhattanDistance(23);

            value.should.equal(2);
        });
    });

    describe('When passed an input of 1024', function() {
        it('should return an answer of 31', function() {
            const value = manhattanDistance(1024);

            value.should.equal(31);
        });
    });
});
