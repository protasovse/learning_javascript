/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    this.collection = collection;
    let functions = Array.prototype.slice.call(arguments, 1);
    for (let i in functions) {
        console.log("name: ", functions[i].name);
        functions[i](collection);
    }
    return collection;
}

/**
 * @params {String[]}
 */
function select(fields) {
    this.collection + 1;
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    this.collection * 2;
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
