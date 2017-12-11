const checksumEvaluator = function(sheet) {
	const rows = sheet.split('\n');

	let checksum = 0;

	rows.forEach(row => {
		// split row by spaces
		let values = row.split(' ');

		// find number that is divisable by another
		checksum += values.reduce((total, value) => {
			for (let i = 0; i < values.length; i++) {
				if (value % values[i] == 0 && value !== values[i]) {
					return total + (value / values[i]);
				}
			}

			return total;
		}, 0);
	});

	return checksum;
};

module.exports = checksumEvaluator;
