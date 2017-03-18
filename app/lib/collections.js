import { Mongo } from 'meteor/mongo';

export const Words = new Mongo.Collection('words', {idGeneration: 'MONGO'});