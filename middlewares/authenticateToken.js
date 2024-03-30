const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("Authorization Header:", authHeader);
  const token = authHeader && authHeader.split(" ")[1];
  console.log("authenticateToken:", token);
  if (token == null) {
    return res.sendStatus(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Forbidden" });
    }
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
