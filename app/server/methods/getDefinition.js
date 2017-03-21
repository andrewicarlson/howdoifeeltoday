import { HTTP } from 'meteor/http';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Words } from '../../lib/collections.js';
import { deepPluck } from '../../imports/api/deepPluck.js';

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
                Meteor.call('addDefinition', mongoId, result.data.results, error);
            } else if(word.slice(-1) === 'd' && word.slice(-2) === 'ed') {
                Meteor.call('getDefinition', mongoId, word.slice(0, -1));
            } else if(word.slice(-1) === 'e') {
                Meteor.call('getDefinition', mongoId, word.slice(0, -1));
            } else {
                Words.update(mongoId, {$set: {'definitions': ['No definition found'], 'feelings': 0}});
            }
        });
    },
    'addDefinition': function(mongoId, result) {
        check(result, Array);

        var definitions = deepPluck({
            haystack: result,
            needle: 'definitions',
            basket: []
        });

        Words.update(mongoId, {$set: {'definitions': definitions, 'feelings': 0}});
    }
});