import { Template } from 'meteor/templating';
import './primary-question.html';

Template.primaryQuestion.helpers({

});

Template.primaryQuestion.events({
    'click .m-needs-met': function(e) {
    },
    'click .m-needs-not-met': function(e) {
    }
});