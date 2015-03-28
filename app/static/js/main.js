require.config({
    baseUrl:'../../',
    paths: {
        jquery: 'libs/jquery-1.11.2.min',
        underscore: 'libs/underscore-min',
        backbone: 'libs/backbone-min'
    }
});

require(['views/app'], function(AppView){
    // create the App.
    console.debug('Instantiate the AppView');
    var App = new app.AppView();

    console.debug('Publish the calendar view');
    App.publish('calendar');

    console.debug('Backbone.history.start');
    Backbone.history.start();
});    

/* var app = app || {};

// our global pubSub object
var pubSub = _.extend({},Backbone.Events);

// Load the application once the DOM is ready using jQuery.ready.
$(function() {

    // create the App.
    console.debug('Instantiate the AppView');
    var App = new app.AppView();

    console.debug('Publish the calendar view');
    App.publish('calendar');

    console.debug('Backbone.history.start');
    Backbone.history.start();
});*/
