const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json("Access denied. No token provided.");

  jwt.verify(token, process.env.JWToken, (err, user) => {
    if (err) return res.status(403).json("Invalid token.");
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
