import express from "express";
import expressGraphQl from "express-graphql";
import Schema from "./schema";
import root from "./resolver";

const app = express();

app.get("/", (req, res) => {
	return res.json({
		msg: "Welcome to my GQL World",
	});
});

app.use(
	"/graphql",
	expressGraphQl({
		schema: Schema,
		rootValue: root,
		graphiql: true,
	})
);

app.listen(3000, () => {
	console.log("Server Running on PORT 3000");
});
