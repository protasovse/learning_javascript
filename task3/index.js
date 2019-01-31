/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
	minutes += interval;
	hours += Math.floor(minutes / 60);
	minutes = minutes % 60;
	hours = hours % 24;
	if (minutes < 10) minutes = '0' + minutes;
	if (hours < 10) hours = '0' + hours;
	return hours + ':' + minutes;
};
