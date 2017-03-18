import { Session } from 'meteor/session'
import { Words } from '../../../../lib/collections.js';

Template.wordGroup.onCreated(function wordGroupOnCreated() {
    Meteor.subscribe('words');
});

Template.wordGroup.helpers({
    words: function() {
       return Words.find({type: Session.get('feelingType')});
    }
});