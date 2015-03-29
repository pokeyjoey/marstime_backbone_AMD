require.config({
    shim : {
        "bootstrap" : { deps :['jquery'] }
    },
    paths: {
        'jquery': 'lib/jquery-1.11.2.min',
        'underscore': 'lib/underscore-min',
        'backbone': 'lib/backbone-min',
        'bootstrap': '../bootstrap/js/bootstrap.min'
    }
});

require(['backbone', 'views/app'],
    function(Backbone, AppView){

        // create the App.
        console.debug('Instantiate the AppView');
        var App = new AppView();

        console.debug('Publish the calendar view');
        App.publish('calendar');

        console.debug('Backbone.history.start');
        Backbone.history.start();
    }
);    
