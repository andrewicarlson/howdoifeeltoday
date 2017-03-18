import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

Template.wordPanel.helpers({
    disabled: function() {
        return Session.get(this._id) ? 'disabled' : '';
    }
});

Template.wordPanel.events({
    'click .m-toggle-content': function(e) {
        e.currentTarget.nextElementSibling.classList.toggle('hif-hidden');

        if(this.definitions) {
            return;
        }

        Meteor.call('getDefinition', this._id, this.word);
    },
    'click .m-feel-this-way': function(e) {

        var self = this;

        Meteor.call('feelsThisWay', this._id, function(error, result) {
            if(!error) {
                Session.set(self._id, true)
            }
        });
    }
});