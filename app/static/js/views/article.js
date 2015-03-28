define([
    'jquery',
    'underscore',
    'backbone'
    ],
    function($, _, Backbone){

        // Article View item
        var ArticleView = Backbone.View.extend({
            
            // article templates.
            templates: {
                'calendar':  _.template($('#calendar-template').html()),
                'calculate': _.template($('#calculate-template').html()),
                'history':   _.template($('#history-template').html()),
                'areogator': _.template($('#areogator-template').html()),
            },

            initialize: function() {
                console.debug('ArticleView.initialize');

                this.listenTo(pubSub, "tab:selected", this.render, this);
            },

            render: function(template) {
                console.debug('ArticleView.render');

                // if a template key is not passed in default to the calendar.
                var templatesKey = (template != undefined) ? 
                    template.id:'calendar';

                // retrieve the selected template
                var selectedTemplate = this.templates[templatesKey];

                // render the template in the DOM
                this.$el.html(selectedTemplate);

                // toggle close the bootstrap navbar
                $('#navbar').collapse('hide')

                // scroll to the top of the window.
                $(window).scrollTop(0);
            }
        });

        return ArticleView;
    }
);
