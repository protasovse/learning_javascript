module.exports = function () {
    return {
        collection: 0,
        /**
         * @param {Array} collection
         * @params {Function[]} – Функции для запроса
         * @returns {Array}
         */
        query: (collection) => {
            console.log('this', this)
            console.log('col', this.collection)
            this.collection = collection
            let functions = Array.prototype.slice.call(arguments, 1)
            for (let i in functions) {
                void functions[i]
            }
            return this.collection
        },

        select: () => {
            this.collection += 1
        },

        filterIn: () => {
            this.collection *= 2
        }
    }
}