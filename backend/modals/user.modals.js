import mongoose from "mongoose";

const userSchaema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,

    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },

  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  profilepic: {
    type: String,
    default: "",
  },
});

const User = mongoose.model("User", userSchaema);
export default User;
