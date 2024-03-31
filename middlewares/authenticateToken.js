const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  console.log("hit auth");
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.sendStatus(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(403).json({ message: "Forbidden" });
    }
    console.log("user", user);
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };
