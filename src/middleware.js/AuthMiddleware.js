export const AuthMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      return res.status(401).json({ message: "Authorization header missing." });
    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Token missing." });
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) return res.status(401).json({ message: "Invalid token." });
    req.user = decode;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error." });
  }
};
export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admins only." });
  }
  next();
};
