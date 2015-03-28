define([
    'backbone',
    'models/tab'
    ],
    function(Backbone, Tab){

        // Tab Collection
        var TabList = Backbone.Collection.extend({
            
            // reference to this collections model.
            model: Tab,

            initialize: function() {
                console.log('TabList.initialize');
            }

        });

        return TabList;
    }
);
