require.config({
    shim : {
        "bootstrap" : { deps :['jquery'] }
    },
    paths: {
        'jquery': ['//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min',
            'lib/jquery-1.11.2.min'],
        'underscore': ['//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
            'lib/underscore-min'],
        'backbone': ['//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
            'lib/backbone-min'],
        'bootstrap': ['//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.4/js/bootstrap.min',
            '../bootstrap/js/bootstrap.min']
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
