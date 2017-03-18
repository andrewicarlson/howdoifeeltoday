Template.wordGroup.onCreated(function wordGroupOnCreated() {
   //Meteor.subscribe('words');

   console.log(coll.words.find({}).fetch());
});

Template.wordGroup.helpers({
    words: function() {

       console.log(coll.words.find({}).fetch());
       return coll.words.find({});
    }
});