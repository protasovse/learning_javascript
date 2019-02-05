module.exports = {

    events: [],
    
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        "use strict";
        this.events.push([event, subscriber, handler]);
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        "use strict";
        this.events = this.events.filter((e) => e[0] !== event || e[1] !== subscriber);
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        "use strict";
        this.events.forEach(function(e) {
            if (e[0] === event) {
                e[2].call(e[1]);
            }
        });
        return this;
    }
};