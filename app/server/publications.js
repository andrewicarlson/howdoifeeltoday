import { Words } from '../lib/collections';

Meteor.publish('words', function() {

    return Words.find();
});