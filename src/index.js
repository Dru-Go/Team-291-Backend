// ANCHOR initialize the server and graphql, set routes and port for the server
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import Schema from './schema';
import root from './resolver';
import dotenv from 'dotenv';
import cors from 'cors';

// Initialize Express server
const app = express();

// Set Routes
app.get('/', (req, res) => {
	return res.json({
		msg: 'Welcome to my GQL World'
	});
});

// Use Cross origin resourse sharing to manage the security of the server
app.use(cors());

// Use express to initalize graphqql
app.use(
	'/graphql',
	graphqlHTTP({
		schema: Schema,
		rootValue: root, // Note root is where the resolvers are stored
		graphiql: true
	})
);

// Listen for the port
dotenv.config();
app.listen(process.env.PORT);
