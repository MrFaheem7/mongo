// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const config = require("./config");
function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, config.secretKey);
    req.userId = decoded.userId;
    console.log(decoded, "consoleeee");
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = verifyToken;
