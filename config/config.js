// config/config.js

require('dotenv').config();

const dbDetails = {
  "dialect": "sqlite",
  "storage": "./database.sqlite"
};
// const dbDetails = {
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   host: process.env.DB_HOST,
//   dialect: 'mysql'
// };



module.exports = {
  development: dbDetails,
  production: dbDetails
};