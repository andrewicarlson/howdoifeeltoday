import { Mongo } from 'meteor/mongo';

export const Words = new Mongo.Collection('words');

if (Meteor.isServer) {
    Meteor.publish('words', function() {
        return Words.find();
    });
}