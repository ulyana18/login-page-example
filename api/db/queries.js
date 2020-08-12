require('dotenv').config();
const Pool = require('pg').Pool;
// const isProduction = process.env.NODE_ENV === 'production'

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
  // user: 'ulyana',
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: '1234',
  port: 5432,
});

module.exports = pool;