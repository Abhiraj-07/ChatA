import User from "../modals/user.modals.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ errors: "User Not found" });
    }
    const isPasswordCorect = await bcrypt.compare(password, user?.password);

    if (!isPasswordCorect) {
      return res.status(400).json({ errors: "Invalid Credentials" });
    }
    generateTokenAndSetCookie(user._id, res);
    return res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilepic: user.profilepic,
    });
  } catch (e) {
    console.log("error in auth ", e.message);
    return res.status(500).json({ error: "Internal Error" });
  }
};

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, cpassword, gender } = req.body;
    if (!fullName || !username || !password || !cpassword || !gender) {

      console.log(fullName, username, password, cpassword, gender);
      ("input Field missing");
      return res.status(400).json({ errors: "Missing fields" });;
    }

    if (password != cpassword) {
      return res.status(400).json({ errors: "passwortd does not match" });
    }
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ errors: "User already Exists" });
    }

    // hashing the password

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const profilepic =
      gender == "male"
        ? `https://avatar.iran.liara.run/public/boy?username=${username}`
        : `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashPassword,
      profilepic,
      gender,
    });
    if (newUser) {
      // create coookie
      await newUser.save();

      generateTokenAndSetCookie(newUser._id, res);

      return res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilepic: newUser.profilepic,
      });
    } else {
      return res.status(400).json({
        error: "Invalid Data",
      });
    }
  } catch (e) {
    console.log("error in auth ", e.message);

    return res.status(500).json({ error: "Internal Error" });
  }
};

export const logout =    (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "logged out successfully" });
  } catch (e) {
    console.log("error in auth ", e.message);
    return res.status(500).json({ error: "Internal Error" });
  }
};
