// ANCHOR initialize the server and graphql, set routes and port for the server
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import Schema from './schema';
import root from './resolvers/resolver';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// Listen for the port
dotenv.config();

// Setting up the enviromental variables
const PORT = process.env.PORT;
const db = `mongodb+srv://Bill:${process.env.PASSWORD}@cluster0.fti7j.mongodb.net/quick_mechanic?retryWrites=true&w=majority`;

// Connect to MongoDB with Mongoose.
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Server Connected to database'))
.catch(err => { console.log(db); console.error(err); });

// Initialize Express server
const app = express();

// Set Routes
app.get('/', (req, res) => {
	return res.json({
		msg: 'Welcome to my GQL World'
	});
});

// Use express to initalize graphqql
app.use(
	'/graphql',
	cors(), // Use Cross origin resourse sharing to manage the security of the server
    bodyParser.json(),
	graphqlHTTP({
		schema: Schema,
		rootValue: root, // Note root is where the resolvers are stored
		graphiql: true
	})
);

app.listen(PORT);
