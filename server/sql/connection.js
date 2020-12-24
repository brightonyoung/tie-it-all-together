require('dotenv').config()
const mysql = require('mysql')


class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection pool...')
      this.pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      })
      return this.pool
    }

    return this.pool
  }
}

const pool = new Connection()

module.exports = pool;
