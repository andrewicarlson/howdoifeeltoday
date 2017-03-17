import { Template } from 'meteor/templating';
import './word-group.html';

Template.wordGroup.onCreated(function wordGroupOnCreated() {
   Meteor.subscribe('words');
});

Template.wordGroup.helpers({
   words: function() {
       return Words.find();
   }
});