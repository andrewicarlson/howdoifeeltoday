import { Template } from 'meteor/templating';
import { Session } from 'meteor/session'
import './primary-question.html';

Template.primaryQuestion.events({
    'click .m-needs-met': function(e) {
        Session.set('feelingType', 'positive');
    },
    'click .m-needs-not-met': function(e) {
        Session.set('feelingType', 'negative');
    }
});