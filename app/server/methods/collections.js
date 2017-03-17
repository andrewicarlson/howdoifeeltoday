Meteor.methods({

    /**
     deleteDocument is an abstract factory used to delete any document in any collection.
     **/
    deleteDocuments: function(collectionName, query) {

        if( !collectionName || !query ) {

            throw new Meteor.Error('not-authorized');
        }

        var collection = coll[collectionName];
        var documents = collection.find(query);

        return collection.remove(query, function(error, success) {

            if( error ) {

                return error;
            } else {

                return success;
            }
        });
    },

    /**
     addDocument is a factory for creating new documents in any given collection.
     **/
    addDocument: function(collection, object) {

        if( Meteor.userId() ) {

            return coll[collection].insert( object, function(error, success) {

                if( error ) {

                    return error;
                }

                return success;
            });
        } else {

            throw new Meteor.Error('not-authorized');
        }
    },

    updateDocument: function(collection, documentId, updateObj) {

        check(documentId, String);
        check(collection, String);

        if( Meteor.userId() && typeof updateObj === 'object' ) {

            var collection = coll[collection];
            var doc = collection.findOne({ _id: documentId });

            collection.update({_id: documentId}, {$set: updateObj}, function(error, success) {

                if( error ) {

                    return error;
                } else {

                    return success;
                }
            });
        }
    }
});