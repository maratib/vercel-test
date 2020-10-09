const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

const PORT = 3000;


const auth = ({ req }) => {
	const tokenWithBearer = req.headers.authorization || '';
	console.log('Token : ' + tokenWithBearer);
	const token = tokenWithBearer.split(' ')[1];
	let user;
	try {
		user = jwt.verify(token, process.env.JWT_SECRET);

	} catch (err) { return null; }
	return { user };
};

const server = new ApolloServer({ typeDefs, resolvers, context: auth });

const publicFolder = path.join(__dirname + '/../public');
console.log(publicFolder);
app.use(express.static(publicFolder));
app.get('/*', (req, res) => {
	res.sendFile(publicFolder);
});
//Other routes


app.get('/about', (req, res) => {
	res.send('About');
});

server.applyMiddleware({ app, path: '/api' });


app.listen(PORT, () => {
	console.log(`The server is running on http://localhost:${PORT}${server.graphqlPath}`);
});

// exports.app = app;