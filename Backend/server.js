const express = require("express");
const mysql = require("mysql2/promise");
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3002;
app.use(express.json());
app.use(cors());

const router = require('./routes');
const { createPool } = require("mysql2/promise"); // Import createPool from mysql2/promise

(async () => {
  try {
    const pool = await createPool({ // Create connection pool directly here
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT
    });

    console.log("Connected to the database!");

    // Attach the database pool to the app instance
    app.set('db', pool);

    // Use the router
    router(app);

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
})();
