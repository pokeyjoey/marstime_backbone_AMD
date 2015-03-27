// site/js/routers/router.js

var app = app || {};

var AppRouter = Backbone.Router.extend({
    // define the routes and function maps for this router
    routes: {
        "calendar":  "calendar",
        "calculate": "calculate",
        "history":   "history",
        "areogator": "areogator"
    },

    initialize: function() {
        console.log('AppRouter.initialize');
    }
});

// create an instance of our router.
app.MarsAppRouter = new AppRouter();
