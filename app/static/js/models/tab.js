define([
    'backbone'
    ],
    function(Backbone){

        // Tab Model
        var Tab = Backbone.Model.extend({
            
            defaults: {
                id: '',
                active: false
            },

            initialize: function() {
                console.log('Tab.initialize');
            }
        });

        return Tab;
});
