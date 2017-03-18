import { HTTP } from 'meteor/http';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Words } from '../../lib/collections.js';

Meteor.methods({
    'getDefinition': function(mongoId, word) {
        check(word, String);

        const WORD = word.toLowerCase();
        const KEY = '4b6777eb02c6f79d04b61836980ffcb2';
        const ID = '985545ef';
        const URL = 'https://od-api.oxforddictionaries.com/api/v1/entries/en/' + WORD + '/definitions';

        HTTP.call('GET', URL, {
            headers: {
                app_id: ID,
                app_key: KEY
            }
        }, function(error, result) {

            if(!error) {
               Meteor.call('addDefinition', mongoId, result.data.results);
            }
        });
    },
    'addDefinition': function(mongoId, result) {
        check(result, Array);

        var definitions = [];

        /**
         * TODO: This nested foreach is a mess. Refactor.
         */

        result.forEach(function(element) {
            element.lexicalEntries.forEach(function(element) {
                element.entries.forEach(function(element) {
                    element.senses.forEach(function(element) {
                        element.definitions.forEach(function(element) {
                            definitions.push(element);
                        });
                    });
                });
            });
        });

        Words.update(mongoId, {$set: {'definitions': definitions, 'feelings': 0}});
    }
});