class SignupController {
  async index(req, res) {
    const { name, account, password, email } = req.body;

    console.log(req.body);
    console.log(account);

    try {
      const pool = req.app.get('db'); // Get the database connection pool from req.app
      const query = `INSERT INTO users (name, username, password, email) VALUES (?, ?, ?, ?)`;
      await pool.query(query, [name, account, password, email]);
      res.status(200).json({ message: 'Signup successful' });
    } catch (error) {
      console.error('Error signing up:', error);
      res.status(500).json({ message: 'Error signing up' });
    }
  };
}

module.exports = new SignupController();
