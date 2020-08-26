'use strict';

// ANCHOR we define the schema which are used to structure the data flow b/n routes
const { buildSchema } = require('graphql');

const schema = buildSchema(`
type Query {
	hello: String
}
`);

module.exports = schema;
