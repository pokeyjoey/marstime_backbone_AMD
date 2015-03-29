define([
    'jquery',
    'backbone',
    'routers/router',
    'collections/tabs',
    'views/tab',
    'views/article'
    ], 
    function($, Backbone, AppRouter, TabCollection, TabView, ArticleView){

        // The application    
        var AppView = Backbone.View.extend({

            // Bind to the existing skeleton of the App already 
            // present in the HTML.
            el: $("#marstime"),
            marsAppRouter: '',
            tabs: '',
            articleView: '',

            // Initialize all tab views and models in the collections.
            initialize: function() {
                console.debug('AppView.initialize');

                // listen for routes changes
                this.marsAppRouter = new AppRouter();
                this.listenTo(this.marsAppRouter, 'route', this.publish, this);

                // listen for changes on the following Tabs Collection events.
                this.tabs = new TabCollection(); 
                this.listenTo(this.tabs, 'add', this.addTabView, this);

                // initialize all tabs
                this.tabs.add(tabsData);

                // initialize the Article view
                // - render the intial view
                this.articleView = new ArticleView(
                    {el: $("#article"), id: "article"});
            },

            // Add a single tab view.
            addTabView: function(tab) {
                console.debug('AppView.addTabView');

                // creating tab views.
                // - when creating views for existing elements, 
                //   pass in the dom node as el.
                var view = new TabView(
                    {model: tab, el: tab.attributes.el, id: tab.attributes.id});
                console.log(view);
            },

            // publish a signal for all listeners to display the selected views. 
            publish: function(page) {
                console.debug('AppView.publish');
                Backbone.trigger("tab:selected", {id: page});
            }
        });

        return AppView;
});
