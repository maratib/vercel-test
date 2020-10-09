// data/resolvers.js

const { User } = require('../models');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

const resolvers = {
	Query: {
		// fetch the profile of currently authenticated user
		async me(_, args, { user }) {
			// console.log(user);
			// make sure user is logged in
			if (!user) {
				throw new Error('You are not authenticated!');
			}

			// user is authenticated
			return await User.findByPk(user.id);
		},

		async allUsers(_, args, context) {
			return await User.findAll();
		}
	},

	Mutation: {
		// Handle user signup
		async register(_, { username, email, password }) {
			const user = await User.create({
				username,
				email,
				password: await bcrypt.hash(password, 10)
			});
			// return json web token
			return jsonwebtoken.sign(
				{ id: user.id, email: user.email },
				process.env.JWT_SECRET,
				{ expiresIn: '1y' }
			);
		},

		async profile(_, { name, phone, org, facebook, twitter, linkedin, instagram, website, img }, { user }) {
			// console.log(user);
			// make sure user is logged in
			if (!user) {
				throw new Error('You are not authenticated!');
			}

			const profile = await User.findByPk(user.id);
			profile.name = name;
			profile.phone = phone;
			profile.org = org;
			profile.facebook = facebook;
			profile.twitter = twitter;
			profile.linkedin = linkedin;
			profile.instagram = instagram;
			profile.website = website;
			profile.img = img;
			result = await profile.save();
			if (result.id) {
				return true;
			}

			return false;
		},

		// Handles user login
		async login(_, { email, password }) {
			const user = await User.findOne({ where: { email } });

			if (!user) {
				throw new Error('No user with that email');
			}

			const valid = await bcrypt.compare(password, user.password);

			if (!valid) {
				throw new Error('Incorrect password');
			}

			// return json web token
			return jsonwebtoken.sign(
				{ id: user.id, email: user.email },
				process.env.JWT_SECRET,
				{ expiresIn: '1d' }
			);
		}
	}
};

module.exports = resolvers;