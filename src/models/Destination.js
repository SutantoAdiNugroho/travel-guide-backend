const pool = require('../config/db');

class Destination {
  static async getAll(limit = 20, offset = 0) {
    const query = `SELECT id, name, location, image_url, short_description, category FROM destinations ORDER BY id LIMIT $1 OFFSET $2`;
    const result = await pool.query(query, [limit, offset]);
    return result.rows;
  }

  static async getById(id) {
    const query = `SELECT * FROM destinations WHERE id = $1`;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}

module.exports = Destination;