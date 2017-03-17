/**
 Publication definitions
 **/

// Puzzle related publications
Meteor.publish('definitions', function() {

    return coll.definitions.find();
});
