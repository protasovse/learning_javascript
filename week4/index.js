/**
 * @params {Array, Array}
 * @returns {Array} — Пересечение массивов
 */
function intersection (array1, array2) {
    return array1.filter(function (n) {
        return array2.indexOf(n) !== -1
    })
}

/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array} collection
 */
function query (collection) {

    let functions = Array.prototype.slice.call(arguments, 1);
    let selectFields = [];
    let filterFields = {};
    let keys = Object.keys(collection[0]);

    for (let i in functions) {
        let res = functions[i]

        if ('select' in res) {
            selectFields = selectFields.length > 0
                ? intersection(selectFields, res['select'])
                : res['select']

        } else {
            let property = Object.keys(res['filter'])[0]
            let values = res['filter'][property]

            filterFields[property] = property in filterFields
                ? intersection(filterFields[property], values)
                : values
        }
    }

    collection = filtering(collection, filterFields)

    if (selectFields.some((i) => keys.indexOf(i) >= 0)) {
        collection = selecting(collection, selectFields)
    }

    return collection
}

/**
 *
 * @param {Array} collection
 * @param {Object} filter
 * @returns {*[]} коллекция
 */
function filtering (collection, filter) {
    return collection.filter((item) => {
        for (let key in filter) {
            if (filter[key].indexOf(item[key]) < 0) {
                return false
            }
        }
        return true
    })
}

/**
 *
 * @param {Array} collection
 * @param {Array} select: массив с названиями полей
 * @returns {*[]} коллекция с полями из select
 */
function selecting (collection, select) {
    return collection.map((item) => {
        let res = {}
        select.map((key) => {
            if (key in item) {
                res[key] = item[key]
            }
        })
        return res
    })
}

/**
 * @params {String[]}
 */
function select (fields) {
    return {'select': Array.prototype.slice.call(arguments)}
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn (property, values) {
    let obj = {}
    obj[property] = values
    return {'filter': obj}
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
}