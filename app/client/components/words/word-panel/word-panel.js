import { Template } from 'meteor/templating';

Template.wordPanel.helpers({

});

Template.wordPanel.events({
    'click .js-toggle-content': function(e) {
        e.currentTarget.nextElementSibling.classList.toggle('hif-hidden');

        if(this.definition) {
            return;
        }

        Meteor.call('getDefinition', this._id, this.word);
    }
});