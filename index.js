console.log('Loading function');
var qs = require('qs');
var request = require('request');
var jsonPath = require('JSONPath');



exports.handler = function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('Received context:', JSON.stringify(context, null, 2));

    // var proxy = function(event) {

    // };

    switch (event.action){
        case 'create':
            // return proxy(event);
            break;
        default:
            return context.fail(new Error("Error: Invalid path."));
            break;

    };
};
