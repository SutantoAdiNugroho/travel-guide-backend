const pool = require('../config/db');

class User {
  static async create(email, passwordHash, fullName) {
    const query = `INSERT INTO users (email, password_hash, full_name) VALUES ($1, $2, $3) RETURNING id, email, full_name`;
    const values = [email, passwordHash, fullName];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async findByEmail(email) {
    const query = `SELECT id, email, password_hash, full_name FROM users WHERE email = $1`;
    const result = await pool.query(query, [email]);
    return result.rows[0];
  }
}

module.exports = User;