const checksumEvaluator = function(sheet) {
	const rows = sheet.split('\n');

	let checksum = 0;

	rows.forEach(row => {
		// split row by spaces
		row = row.split(' ');

		// calculate checksum
		checksum += Math.max(...row) - Math.min(...row);
	});

	return checksum;
};

module.exports = checksumEvaluator;
