Meteor.publish('words', function() {

    return coll.words.find();
});