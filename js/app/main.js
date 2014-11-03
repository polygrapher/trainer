define(function(require) {
    var $ = require('jquery'),
        Names = require('modules/names');

    return {
        sayName: function() {
            console.log('My creator name is ' + Names.first + ' ' + Names.last);
        },
        addTitle: function(title) {
            if (!title) { return; }
            $('body').append($('<h1/>').text(title));
        }
    };
});