import { Meteor } from 'meteor/meteor';
import { Words } from '../../lib/collections.js';

Meteor.methods({
    'feelsThisWay': function (mongoId) {
        Words.update(mongoId, { $inc: { 'feelings': 1 } }, function(error, result) {
            if(!error) {
                return true;
            }
        });
    }
});