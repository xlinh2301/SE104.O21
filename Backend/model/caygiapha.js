const { getConnection } = require('../config/db');

class UserModel {
  static async createTable() {
    const query = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      )
    `;
    const connection = await getConnection();
    try {
      await connection.execute(query);
      console.log('Table created or already exists.');
    } catch (err) {
      console.error('Error creating table:', err);
    }
  }

  static async getAll() {
    const query = 'SELECT * FROM users';
    const connection = await getConnection();
    try {
      const [results, fields] = await connection.query(query);
      console.log(results);
      console.log(fields);
      return results;
    } catch (err) {
      console.error('Error fetching data:', err);
      throw err;
    }
  }

  static async create(data) {
    const query = 'INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)';
    const connection = await getConnection();
    try {
      const [results] = await connection.execute(query, [data.name, data.username, data.email, data.password]);
      return results;
    } catch (err) {
      console.error('Error inserting data:', err);
      throw err;
    }
  }

  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = ?';
    const connection = await getConnection();
    try {
      const [results] = await connection.execute(query, [email]);
      return results[0];
    } catch (err) {
      console.error('Error fetching data:', err);
      throw err;
    }
  }
}

module.exports = UserModel;
