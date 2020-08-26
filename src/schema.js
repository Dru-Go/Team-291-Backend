'use strict';

// ANCHOR we define the schema which are used to structure the data flow b/n routes
import { buildSchema } from 'graphql'

const schema = buildSchema(`
type Query {
	hello: String
}
`)

export default schema
