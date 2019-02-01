/**
 * @param {String} date '2015-01-01 00:00'
 * @returns {Object}
 */
module.exports = function (date) {
    return {

        // приводим дату к формату ISO: 2019-01-01T:00:00:00.000Z
        _date: new Date(date.replace(/ /, 'T') + ':00.000Z'),

        _changeDate: function (value, duration) {
            let period;
            switch (duration) {
                case 'months':
                    period = 'Month';
                    break;

                case 'days':
                    period = 'Date';
                    break;

                case 'years':
                    period = 'FullYear';
                    break;

                case 'minutes':
                case 'hours':
                    // первую букву приводим к верхенму регистру
                    period = duration[0].toUpperCase() + duration.slice(1);
                    break;

                default:
                    throw TypeError('Неизвестная единица времени');
            }

            // выполняем команду, например:
            // this._date.setFullYear(this._date.getFullYear() + value;
            eval(`this._date.set${period}(this._date.get${period}() + ${value})`);
        },

        _checkValue: function (value) {
            if (typeof value !== 'number' || value !== (value ^ 0) || value < 0) {
                throw new TypeError('Неправильный формат даты');
            }
        },

        subtract: function (value, duration) {
            this._checkValue(value);
            this._changeDate(-value, duration);
            return this
        },

        add: function (value, duration) {
            this._checkValue(value);
            this._changeDate(value, duration);
            return this
        },

        get value () {
            // to 2015-01-01 00:00
            return this._date.toISOString().replace(/T/, ' ').slice(0, 16)
        },
    }
}