import jwt from "jsonwebtoken";
import User from "../modals/user.modals.js";
const protectRoute = async (req, res, next) => {
  try {
    const token =req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ error: "unauthorized access" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECREATEKEY);
    if (!decode) {
      return res.status(401).json({ error: "unauthorized access" });
    }
    console.log(decode.userId);
    
    const user = await User.findById(decode.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "User not found " });
    }

    req.user = user;
    next();
  } catch (e) {
    console.log("protect route "+e.message);
  }
};

export default protectRoute;